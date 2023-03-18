export function dateFormat(date) {
  const newDate = new Date(date);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = newDate.getDate();
  const monthIndex = newDate.getMonth();
  const monthName = monthNames[monthIndex];
  const year = newDate.getFullYear();
  return `${day} ${monthName} ${year}`;
}
