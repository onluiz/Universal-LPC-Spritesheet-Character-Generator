/**
 * Resolves an asset path relative to the application's base URL.
 * Uses `import.meta.env.BASE_URL` which is provided by Vite.
 */
export function getAssetUrl(path: string): string {
  // Vite-provided base URL (includes trailing slash).
  // In Node/tests, we fall back to "./".
  const baseUrl = (import.meta.env?.BASE_URL) || "./";

  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${baseUrl}${cleanPath}`;
}
