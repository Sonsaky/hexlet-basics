// 15. Сортировка массива пузырьком
const bubbleSort = (arr) => {
    let i = 0;
    do {
        i += 1;
        for (let j = 0; j < arr.length; j += 1) {
            if (arr[j] > arr[j + 1]) {
                const a = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = a;
            }
        }
    } while (i < arr.length);
    return arr;
};
export default bubbleSort;
