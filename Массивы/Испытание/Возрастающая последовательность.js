// Функция, которая проверяет, является ли переданная последовательность целых чисел возрастающей непрерывно (не имеющей пропусков чисел). 
//Например, последовательность [4, 5, 6, 7] — непрерывная, а [0, 1, 3] — нет.
const isContinuousSequence = (arr) => {
    if (arr.length < 2) {
        return false;
    }
    for (let i = 0; i < arr.length - 1; i += 1) {
        if (arr[i + 1] - arr[i] !== 1) {
            return false;
        }
    }
    return true;
};
export default isContinuousSequence;

// Решение учителя
const isContinuousSequence = (coll) => {
    const size = coll.length;
    if (size <= 1) {
        return false;
    }

    const start = coll[0];
    for (let index = 1; index < size; index += 1) {
        if (start + index !== coll[index]) {
            return false;
        }
    }

    return true;
};

export default isContinuousSequence;
