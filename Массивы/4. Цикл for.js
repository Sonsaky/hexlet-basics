/* 4. Функция, которая принимает на вход массив и строковой префикс, и возвращает новый массив, 
в котором к каждому элементу исходного массива добавляется переданный префикс */
const arrays = (arr, pref) => {
    const newName = arr.slice(0);
    for (let i = 0; i < arr.length; i += 1) {
      newName[i] = pref + ' ' + newName[i];
    }
    return newName;
};
export default arrays;
