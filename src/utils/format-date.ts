export function formatDate(entry: string) {
  const dateObj = entry.split('-');
  const month = parseInt(dateObj[0]) - 1;
  const day = parseInt(dateObj[1]);
  const year = parseInt(dateObj[2]);
  const date = new Date(year, month, day);

  const shortMonth = date.toLocaleString('default', { month: 'short' });

  const shortYear = year.toString().slice(-2);

  return `${day} ${shortMonth} ${shortYear}`;
}
