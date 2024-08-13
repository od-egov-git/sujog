export const showFormattedCurrentDate = () => {
  const today = new Date();
  const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
  
  const date = ("0" + lastDayOfLastMonth.getDate()).slice(-2);
  const month = ("0" + (lastDayOfLastMonth.getMonth() + 1)).slice(-2);
  const year = lastDayOfLastMonth.getFullYear();
  
  return `${date}.${month}.${year}`;
}