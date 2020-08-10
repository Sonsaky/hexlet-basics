// 19. Функция, которая ищет в массиве максимальное значение и возвращает его
export const getMax = (arr) => {
    if (arr.length === 0) {
        return null;
    }
    const [first, ...rest] = arr;
    let firstElement = first;
    for (const item of rest) {
        if (firstElement < item) {
            firstElement = item;
        }
    }
    return firstElement;
};
