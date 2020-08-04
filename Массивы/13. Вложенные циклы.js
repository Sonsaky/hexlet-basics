// 13. Функция принимающая на вход два массива и возвращающая количество общих уникальных значений в обоих массивах
const getSameCount = (arr1, arr2) => {
    const result = [];
    let a = [];
    for (const item of arr1) {
        if (arr2.includes(item)) {
            result.push(item);
            a = _.uniq(result);
        }
    }
    return a.length;
};
export default getSameCount;


// Решение учителя
const getSameCount = (coll1, coll2) => {
    let count = 0;
    const uniqColl1 = _.uniq(coll1);
    const uniqColl2 = _.uniq(coll2);

    for (const item1 of uniqColl1) {
        for (const item2 of uniqColl2) {
            if (item1 === item2) {
                count += 1;
            }
        }
    }

    return count;
};

export default getSameCount;
