// 10. Функция, которая вычисляет команду, выигравшую суперсерию. Первый вариант
const getSuperSeriesWinner = (arr) => {
    const resultCanada = [];
    const resultUssr = [];
    for (const item of arr) {
        const a = Math.sign(item[0] - item[1]);
        if (a === -1) {
            resultUssr.push(a);
        }
        if (a === 1) {
            resultCanada.push(a);
        }
    }
    if (resultCanada.length > resultUssr.length) {
        return 'canada';
    }
    if (resultUssr.length > resultCanada.length) {
        return 'ussr';
    }
    return null;
};
export default getSuperSeriesWinner;


// Нормальный второй вариант
const getSuperSeriesWinner = (arr) => {
    let result = 0;
    for (const item of arr) {
        const a = Math.sign(item[0] - item[1]);
        result = a + result;
    }
    if (result > 0) {
        return 'canada';
    }
    if (result < 0) {
        return 'ussr';
    }
    return null;
};
export default getSuperSeriesWinner;
