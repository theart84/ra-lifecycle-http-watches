export const generateArray = (quantity) => [...Array(quantity).keys()]

export const convertTime = () => {
  const currentTime = new Date();
  return [currentTime.getUTCHours() - 12, currentTime.getUTCMinutes(), currentTime.getUTCSeconds()];
}
