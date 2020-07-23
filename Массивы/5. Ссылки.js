// 5. Функция, которая распологает внутри массива элементы в обратном порядке
// Первый мой способ
export const reverse = (arr) => {
  const newArr = [];
  const b = arr.length;
  for (let i = 0; i < b; i += 1) {
    const result = arr.pop();
    newArr.push(result);
  }
  for (let i = 0; i < b; i += 1) {
    arr[i] = newArr[i];
  }
};

// Второй способ
export const reverse = (arr) => {
  const b = arr.length;
  for (let i = 0; i < Math.floor(b / 2); i += 1) {
    const a = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = arr[i];
    arr[i] = a;
  }
  return arr;
};
