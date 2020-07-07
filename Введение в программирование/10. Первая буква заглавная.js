// 10. функция делает первую букву заглавной
const wordUpper = (str) => {
  let result = '';
  if (str[0] !== ' ') {
    result = toUpperCase(str[0]);
  } else {
    [result] = [str[0]];
  }
  for (let i = 1; i < length(str); i += 1) {
    if (str[i - 1] === ' ' && str[i] !== ' ') {
      result += toUpperCase(str[i]);
    } else {
      result += str[i];
    }
  }
  return result;
};
export default wordUpper;
