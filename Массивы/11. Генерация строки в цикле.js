// 11. Функция генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку
const buildDefinitionList = (arr) => {
    if (arr.length === 0) {
        return '';
    }
    const kek = [];
    for (const item of arr) {
        kek.push(`<dt>${item[0]}</dt>`);
        kek.push(`<dd>${item[1]}</dd>`);
    }
    const newArr = kek.join('');
    const result = `<dl>${newArr}</dl>`;
    return result;
};
export default buildDefinitionList;