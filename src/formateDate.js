export function formatDate(dateString) {
  const date = new Date(dateString);

  let options = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };
  return date.toLocaleString("ru-RU", options).replace(",", "");
}