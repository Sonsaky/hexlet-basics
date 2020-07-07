// 2. Использую итеративную рекурсию (для задачи найти минимальный делитель)
const smallestDivisor = (num) => {
  if (num === 1) {
    return 1;
  }
  const iter = (counter, acc) => {
    if (counter % acc === 0) {
      return acc;
    }
    return iter(counter, acc + 1);
  };
  return iter(num, 2);
};
export default smallestDivisor;
