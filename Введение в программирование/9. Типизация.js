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
