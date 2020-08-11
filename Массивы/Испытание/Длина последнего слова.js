const lengthOfLastWord = (str) => {
    const result = [];
    for (let i = str.length - 1; i >= 0;) {
        if (str[i] !== ' ') {
            result.push(str[i]);
            if (str[i - 1] === ' ') break;
        }
        i -= 1;
    }
    return result.length;
};
export default lengthOfLastWord;



// Решение учителя
export default (str) => {
    const words = str.trim().split(' ');
    const lastWord = words[words.length - 1];
    return lastWord.length;
};
