export const generateArray = (quantity) => [...Array(quantity).keys()];

export const convertTimeToDegree = () => {
  const currentTime = new Date();
  let hour = currentTime.getUTCHours() - 12;
  let minute = currentTime.getUTCMinutes();
  let second = currentTime.getUTCSeconds();
  hour = hour * 30 + minute * 0.5 + second * 0.008333
  minute = minute * 6 + second * 0.1;
  second = second * 6;
  return [hour, minute, second];
};
