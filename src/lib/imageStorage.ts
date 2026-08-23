// IndexedDB + LocalStorage hybrid storage helper for storing uploaded images reliably without a DB
const DB_NAME = "dayanand_school_db";
const STORE_NAME = "images";
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      resolve(null);
      return;
    }
    try {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = (event) => {
        resolve((event.target as IDBOpenDBRequest).result);
      };
      request.onerror = () => {
        resolve(null);
      };
    } catch (e) {
      resolve(null);
    }
  });
}

export async function setPersistentImage(key: string, value: string): Promise<void> {
  // Always update localStorage first as fast synchronous fallback
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(`dayanand_img_${key}`, value);
    } catch (e) {
      // Ignore quota exceeded error for localStorage
    }
  }

  // Persist to IndexedDB (virtually unlimited quota for images)
  const db = await openDB();
  if (db) {
    try {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      store.put(value, key);
    } catch (e) {}
  }
}

export async function getPersistentImage(key: string): Promise<string | null> {
  if (typeof window === "undefined") return null;

  // Check IndexedDB first
  const db = await openDB();
  if (db) {
    try {
      const val = await new Promise<string | null>((resolve) => {
        const tx = db.transaction(STORE_NAME, "readonly");
        const store = tx.objectStore(STORE_NAME);
        const req = store.get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      });
      if (val) return val;
    } catch (e) {}
  }

  // Fallback to localStorage
  try {
    return localStorage.getItem(`dayanand_img_${key}`);
  } catch (e) {
    return null;
  }
}

export async function loadAllPersistentImages(keys: string[]): Promise<Record<string, string>> {
  const result: Record<string, string> = {};
  if (typeof window === "undefined") return result;

  for (const key of keys) {
    const img = await getPersistentImage(key);
    if (img && img !== "/placeholder.png" && img !== "") {
      result[key] = img;
    }
  }

  return result;
}
