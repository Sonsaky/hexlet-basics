// 6. Функция, которая высчитывает сумму всех элементов массива, которые делятся без остатка на три
const calculateSum = (arr) => {
    if (arr.length === 0) {
      return null;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 3 === 0) {
        sum += arr[i];
      }
    }
    return sum;
};
export default calculateSum;
