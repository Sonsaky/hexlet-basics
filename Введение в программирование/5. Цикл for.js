// 5. Использую цикл for для нахождения простого числа
const isPrime = (n) => {
    if (n === 1 || n <= 0) {
      return false;
    }
    if (n === 2) {
      return true;
    }
    for (let counter = 2; counter < n; counter += 1) {
      if (n % counter === 0) {
        return false;
      }
    }
    return true;
  };
  // END
  export default isPrime;