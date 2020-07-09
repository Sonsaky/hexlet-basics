// 6. Калькулятор, использую цикл switch
const calc = (a1, a, b) => {
    switch (a1) {
      case '+':
        return a + b;
      case '-':
        return a - b
      case '/':
        return a / b;
      case '*':
        return a * b;
      default:
        return NaN;
    }
  };
  export default calc;
