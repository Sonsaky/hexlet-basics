// 12. Функция, которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%! и возвращает полученную строку. 
/* const sentence = 'When you play the game of thrones, you win or you die';
const result = makeCensored(sentence, ['die', 'play']);
// When you $#%! the game of thrones, you win or you $#%! */
const makeCensored = (sentence, arr) => {
    const separator = ' ';
    const words = sentence.split(separator);
    const censored = [];
    for (const item of words) {
        if (item === arr[0] || item === arr[1] ? censored.push('$#%!') : censored.push(item));
    }
    return censored.join(separator);
};
export default makeCensored;
