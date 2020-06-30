// 7. Квадрат, сумма квадратов, квадрат сумммы квадратов двух чисел
const square = (n) => n * n;
const sumOfSquares = (n1, n2) => square(n1) + square(n2);
const squareSumOfSquares = (n3, n4) => square(sumOfSquares(n3, n4))