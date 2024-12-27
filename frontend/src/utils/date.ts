export function formatTimestamp(
  timestamp: number,
  locale: string = navigator.language,
  options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }
): string {
  return new Date(timestamp).toLocaleDateString(locale, options);
}
