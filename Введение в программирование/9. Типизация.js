// 9. Типизация. На вход 128 должно получится 2 (1+2+8= 11; 1+1 =2)
const sum = (num) => {
    const num1 = String(num);
    let result = 0;
    for (let i = 0; i < length(num1); i += 1) {
      const num2 = Number(num1[i]);
      result += num2;
    }
    return result;
  };
  const addDigits = (num) => {
    let k = num;
    while (k > 9) {
      k = sum(k);
    }
    return k;
  };
  export default addDigits;
  // END
  
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