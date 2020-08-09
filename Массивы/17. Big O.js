// 17. Функция, которая принимает на вход два отсортированных массива и находит их пересечение
// Смогла решить вложенным циклом
const getIntersectionOfSortedArrays = (arr1, arr2) => {
    const newArr = [];
    for (let i = 0; i < arr2.length; i += 1) {
        for (let j = 0; j < arr2.length; j += 1) {
            if (arr1[i] === arr2[j]) {
                newArr.push(arr1[i]);
            }
        }
    }
    return newArr;
};
export default getIntersectionOfSortedArrays;

// Решение учителя, сложность O(n + m)
const getIntersectionOfSortedArrays = (arr1, arr2) => {
    const size1 = arr1.length;
    const size2 = arr2.length;

    let i1 = 0;
    let i2 = 0;
    const result = [];

    while (i1 < size1 && i2 < size2) {
        if (arr1[i1] === arr2[i2]) {
            result.push(arr1[i1]);
            i1 += 1;
            i2 += 1;
        } else if (arr1[i1] > arr2[i2]) {
            i2 += 1;
        } else {
            i1 += 1;
        }
    }

    return result;
};

export default getIntersectionOfSortedArrays;
