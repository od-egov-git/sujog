export const showFormattedCurrentDate = () => {
  const today = new Date(),
  date = ("0" + today.getDate()).slice(-2),
  month = ("0" + (today.getMonth() + 1)).slice(-2),
  year = today.getFullYear();
  return `${date}.${month}.${year}`;
}