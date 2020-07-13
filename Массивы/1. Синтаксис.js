// 1. Функция возвращает массив из двух элементов
export const getWeekends = (a) => {
    const long = ['saturday', 'sunday'];
    const short = ['sat', 'sun'];
    if (a === 'short') {
      return short;
    }
    return long;
  };
  