// 3. Извлекает элемент по указанному индексу (на входе три аргумента)
const arrays = (city, index, param = null) => {
  if ((param !== null && city[index] === undefined) || city[index] === undefined) {
      return param;
    }
    return city[index];
};
export default arrays;


// второй способ
const arrays = (city, index, param = null) => {
    if (city[index] === undefined) {
      return param;
    }
    return city[index];
};
export default arrays;
