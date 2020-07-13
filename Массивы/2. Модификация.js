// 2. Меняет местами первый и последний элимент массива
export const swap = (arrays) => {
  if (arrays.length < 2) {
    return arrays;
  }
  const a = arrays[arrays.length - 1];
  arrays[arrays.length - 1] = arrays[0];
  arrays[0] = a;
  return arrays;
};
