/* 5. Сумма всех атуральных чисел, меньших чем (не включительно) n (первый аргумент),
 которые делятся на числа a или b (второй и третий аргументы) без остатка*/
 const sum = (n, a, b) => {
    let result = 0;
    for (let counter = 1; counter < n; counter += 1) {
      if (counter % a === 0 || counter % b === 0) {
        result += counter;
      }
    }
    return result;
  };
  export default sum;
