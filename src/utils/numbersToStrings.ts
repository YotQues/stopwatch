export const formatNumber = (number: number): string => {
  let tempNumber = Math.floor(number);
  return tempNumber < 10 ? `0${tempNumber}` : tempNumber.toString();
};
