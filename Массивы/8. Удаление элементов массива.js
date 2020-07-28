/* 8. Функция, которая принимает на вход массив чисел и возвращает новый, у которого такая же чётность,
как и у первого элемента входного массива */
const getSameParity = (arr) => {
    if (arr.length === 0) {
        return [];
    }
    const result = [];
    if (Math.abs(arr[0]) % 2 !== 0) {
        for (const item of arr) {
            if (Math.abs(item) % 2 !== 0) {
                result.push(item);
            }
        }
    } else {
        for (const item of arr) {
            if (Math.abs(item) % 2 === 0) {
                result.push(item);
            }
        }
    }
    return result;
};
export default getSameParity;

// Решение учителя
const getSameParity = (coll) => {
    if (coll.length === 0) {
        return [];
    }

    const result = [];
    const remainder = Math.abs(coll[0] % 2);

    for (const item of coll) {
        if (Math.abs(item % 2) === remainder) {
            result.push(item);
        }
    }

    return result;
};
export default getSameParity;
