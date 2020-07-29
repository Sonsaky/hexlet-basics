// 9. Функция, которая принимает на вход в виде массива кошелёк с деньгами и название валюты и возвращает сумму денег указанной валюты
const getTotalAmount = (arr1, arr2) => {
    let result = 0;
    for (const item of arr1) {
        if (item.indexOf(arr2) === -1) {
            continue;
        }
        const num = Number(item.slice(4));
        result += num;
    }
    return result;
};
export default getTotalAmount;


// Первый мой вариант (с доработкой), т.к не увидела что сравниваю значение с пробелом и пришлось применять indexOf
const getTotalAmount = (arr1, arr2) => {
    let result = 0;
    for (const item of arr1) {
        if (item.slice(0, 3) !== arr2) {
            continue;
        }
        const num = Number(item.slice(4));
        result += num;
    }
    return result;
};
export default getTotalAmount;
