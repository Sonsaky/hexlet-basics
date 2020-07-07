// 3. Использую перменные и циклы ( для задачи найти минимальный делитель)
const smallestDivisor = (num) => {
  if (num < 1) {
    return NaN;
  }
  let acc = 2;
  if (num === 1) {
    return 1;
  }
  while (num % acc !== 0) {
    acc += 1;
  }
  return acc;
};
export default smallestDivisor;