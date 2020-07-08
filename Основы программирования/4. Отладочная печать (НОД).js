// 4. Функция нахождения НОД для двух целых чисел
const gcd = (m, n) => {
    let m1 = m;
    let n1 = n;
    while (m1 !== 0 && n1 !== 0) {
      if (m1 > n1) {
        m1 %= n1;
      } else {
        n1 %= m1;
      }
    }
    const kek = m1 + n1;
    return kek;
  };
  export default gcd;
  
// Способ учителя (сохраню на заметку)
const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
  
    return gcd(b, a % b);
  };
  
  export default gcd;