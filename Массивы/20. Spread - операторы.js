// 20. Функция принимает на вход массив и выпрямляет его, если элементами массива являются массивы
export const flatten = (arr) => {
    if (arr.length === 0) {
        return [];
    }
    let kek = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            kek = [...kek, ...item];
        } else {
            kek.push(item);
        }
    }
    return kek;
};
