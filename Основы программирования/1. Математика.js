// 1. Функция которая считает площадь треугольника на основе известной стороны и прилегающих к ней углов
const radian = (grad) => (grad * Math.PI) / 180;
const solution = (a, b, c) => {
  const d = Math.sin(radian(180 - (b + c)));
  return (1 / 2) * (a ** 2) * ((Math.sin(radian(b)) * (Math.sin(radian(c)))) / d);
};
// END
export default solution;
