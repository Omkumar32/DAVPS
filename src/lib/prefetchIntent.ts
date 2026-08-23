/**
 * Intent-Based Data & Route Prefetcher
 * Prefetches Next.js routes and API endpoints when user shows intent
 * (e.g. hovering over navigation links, focusing CTA buttons, touching menu items).
 */

const prefetchedRoutes = new Set<string>();
const prefetchedApis = new Set<string>();

// Map of page routes to their corresponding API data dependencies
const ROUTE_API_MAP: Record<string, string[]> = {
  "/academics/faculty-directory": ["/api/faculty"],
  "/news-events": ["/api/news"],
  "/photo-gallery": ["/api/gallery"],
  "/academics/academic-programs": ["/api/programs"],
  "/about/general-information": ["/api/settings"],
  "/about/director-message": ["/api/settings"],
  "/about/principal-message": ["/api/settings"],
  "/admissions": ["/api/settings"],
};

/**
 * Prefetch a route and its underlying API data based on user hover/touch intent
 */
export function prefetchUserIntent(
  routeUrl: string,
  routerPrefetch?: (url: string) => void
) {
  if (typeof window === "undefined") return;

  // 1. Next.js Route Prefetching
  if (routerPrefetch && !prefetchedRoutes.has(routeUrl)) {
    prefetchedRoutes.add(routeUrl);
    try {
      routerPrefetch(routeUrl);
    } catch (e) {
      // Ignore prefetch failures
    }
  }

  // 2. Intent-based API Data Pre-fetching
  const apisToFetch = ROUTE_API_MAP[routeUrl] || [];
  apisToFetch.forEach((apiEndpoint) => {
    if (!prefetchedApis.has(apiEndpoint)) {
      prefetchedApis.add(apiEndpoint);
      fetch(apiEndpoint, { priority: "low" } as any).catch(() => {
        // Silently ignore prefetch network errors
      });
    }
  });
}
