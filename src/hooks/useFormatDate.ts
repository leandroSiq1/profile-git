export function formattedDate(date: string) {
  const formatDate = new Date(date);
  const dateFormatter = new Intl.DateTimeFormat("pr-BR");

  return dateFormatter.format(formatDate);
}