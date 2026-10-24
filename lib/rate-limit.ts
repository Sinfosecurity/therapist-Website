const windowMs = 10 * 60 * 1000;
const maxHits = 8;
const hits = new Map<string, number[]>();

export function rateLimit(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs);
  if (recent.length >= maxHits) {
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}
