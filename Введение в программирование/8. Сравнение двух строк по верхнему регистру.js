// 8. Сравнивает две строки  по верхнему регистру
import { length, toUpperCase } from './strings';

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let i = 0;
  let kek = 0;
  while (i < length(str)) {
    if (toUpperCase(str)[i] === str[i] || toUpperCase(str)[i] === '') {
      kek = 1 + kek;
    }
    i += 1;
  }
  return kek;
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);
  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  }
  if (firstCount < secondCount) {
    return -1;
  }
  return 0;
  // END
};

export const greaterThan = (first, second) => (
  compare(first, second) === 1);

export const lessThan = (first, second) => (
  compare(first, second) === -1);

export const isEqual = (first, second) => (
  compare(first, second) === 0);