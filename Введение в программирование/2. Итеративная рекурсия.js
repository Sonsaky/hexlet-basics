// 2. Использую итеративную рекурсию (для задачи найти минимальный делитель)
const smallestDivisor = (num) => {
    // BEGIN (write your solution here)
    if (num === 1) {
      return 1;
    }
    /**
  * @param {number} counter
  * @param {number} acc
  */
    const iter = (counter, acc) => {
      if (counter % acc === 0) {
        return acc;
      }
      return iter(counter, acc + 1);
    };
    return iter(num, 2);
  };