export function createUrl(string) {
  return string.replace(/\s+/g, '-').toLowerCase();
};