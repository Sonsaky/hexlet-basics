// 6. Модули
export const getTriangleArea = (h, b) => (1 / 2) * h * b;

import { getTriangleArea } from './myMathModule.js';

const kek = (n) => {
  if (n === 0) {
    return 0;
  }
  return getTriangleArea(n, square(n) / 2);
};
export default kek;