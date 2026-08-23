/**
 * Converts an uploaded image file into WebP format entirely in the browser
 * using HTML5 Canvas and returns it as a base64 data URL.
 *
 * This approach is 100% serverless-compatible (works on Vercel, Netlify, etc.)
 * because no files are written to the server filesystem. The base64 data URL
 * is stored directly in the database.
 *
 * @param file - The input image File object (PNG, JPG, WEBP, etc.)
 * @param options - Optional settings (category prefix, maxWidth, quality)
 * @returns Promise<string> - Resolves to a base64 data URL: "data:image/webp;base64,..."
 */
export async function convertAndUploadWebP(
  file: File,
  options?: {
    category?: string;
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
  }
): Promise<string> {
  // Use smaller dimensions and lower quality to keep base64 under Vercel's 4.5MB request limit
  // Hero/banner: max 1200px, quality 0.80 → ~300-500KB base64
  // Logo: max 400px, quality 0.90 → ~30-80KB base64
  // Portrait/photo: max 800px, quality 0.80 → ~100-200KB base64
  const category = options?.category || "upload";
  let maxWidth = options?.maxWidth ?? 1200;
  let maxHeight = options?.maxHeight ?? 1200;
  let quality = options?.quality ?? 0.80;

  if (category === "logo") {
    maxWidth = options?.maxWidth ?? 400;
    maxHeight = options?.maxHeight ?? 400;
    quality = options?.quality ?? 0.90;
  } else if (category === "hero") {
    maxWidth = options?.maxWidth ?? 1200;
    maxHeight = options?.maxHeight ?? 800;
    quality = options?.quality ?? 0.80;
  } else if (category === "portrait" || category === "principal" || category === "director") {
    maxWidth = options?.maxWidth ?? 800;
    maxHeight = options?.maxHeight ?? 800;
    quality = options?.quality ?? 0.82;
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = (err) => reject(err);

    reader.onload = (event) => {
      const img = new window.Image();

      img.onerror = () => reject(new Error("Failed to load image for WebP conversion"));

      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;

          // Scale down if image exceeds max dimensions (preserve aspect ratio)
          if (width > maxWidth || height > maxHeight) {
            const widthScale = maxWidth / width;
            const heightScale = maxHeight / height;
            const scale = Math.min(widthScale, heightScale);
            width = Math.round(width * scale);
            height = Math.round(height * scale);
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            ctx.drawImage(img, 0, 0, width, height);
          }

          // Convert directly to base64 WebP data URL — no server needed
          const dataUrl = canvas.toDataURL("image/webp", quality);
          resolve(dataUrl);
        } catch (error) {
          reject(error);
        }
      };

      img.src = event.target?.result as string;
    };

    reader.readAsDataURL(file);
  });
}
