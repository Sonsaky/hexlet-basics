// 7. Функция считает среднее арифметическое элементов переданного массива
const calculateAverage = (arr) => {
    if (arr.length === 0) {
      return null;
    }
    let sum = 0;
    for (const value of arr) {
      sum += value;
    }
    return sum / arr.length;
  };
export default calculateAverage;
