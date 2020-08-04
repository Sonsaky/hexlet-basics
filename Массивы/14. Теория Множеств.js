// 14. Функция, которая получает на вход строку и считает, сколько символов (без учёта повторяющихся символов) использовано в этой строке.
// Первый способ по заданию
const strings = (arr1) => {
    const result = [];
    for (const item of arr1) {
        if (result.includes(item) === false) {
            result.push(item);
        }
    }
    return result.length;
};

// Второй способо использую uniq() - не по заданию
export default strings;
const strings = (arr1) => {
    let result = '';
    console.log(_.uniq(arr1))
    result = _.uniq(arr1)
    return result.length
};
export default strings;
