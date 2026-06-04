export function isUnavailableImageSrc(src) {
  if (!src || typeof src !== "string") return true;

  return src.includes("/api/placeholder/");
}
