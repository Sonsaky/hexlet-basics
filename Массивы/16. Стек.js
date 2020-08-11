// 16. Функция, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет, является ли эта строка сбалансированной.
// Первая версия (помогали доделать)

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

// BEGIN (write your solution here)
const isBracketStructureBalanced = (arr) => {
    const newArr = [];
    const findPair = (simbol) => {
        for (let i = 0; i < 4; i += 1) {
            if (openingSymbols[i] === simbol) {
                return closingSymbols[i];

            } else if (closingSymbols[i] === simbol) {
                return openingSymbols[i]
            }
        }
        return null;
    }


    for (const simbol of arr) {

        if (openingSymbols.includes(simbol)) {


            newArr.push(simbol);

        } else if (closingSymbols.includes(simbol)) {
            if (newArr.pop() !== findPair(simbol)) {
                return false
            }
        }
    }

    return newArr.length === 0;
}
export default isBracketStructureBalanced;

// Вторая версия (добила свою)
const isBracketStructureBalanced = (arr) => {
    const newArr = [];
    for (const item of arr) {
        if (openingSymbols.indexOf(item) !== -1) {
            newArr.push(closingSymbols[openingSymbols.indexOf(item)]);
        } else if (closingSymbols.includes(item)) {
            if (newArr.pop() !== item) {
                return false;
            }
        }
    }
    return newArr.length === 0;
};
export default isBracketStructureBalanced;

// Решение учителя
сonst isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
const getClosingSymbolFor = (symbol) => closingSymbols[openingSymbols.indexOf(symbol)];

export default (str) => {
  const stack = [];
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      stack.push(closingSymbol);
    } else {
      const lastSavedSymbol = stack.pop();
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
