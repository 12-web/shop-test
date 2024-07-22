/**
 * @example getDeclineNoun(5, ['товар', 'товара', 'товаров']) вернет строку "5 товаров"
 */

export const getDeclineNoun = (number: number, variantsOfNoun: [string, string, string]) => {
  let remain = Math.abs(number) % 100;
  if (remain >= 11 && remain <= 19) {
    return `${number} ${variantsOfNoun[2]}`;
  }
  remain = remain % 10;
  if (remain >= 2 && remain <= 4) {
    return `${number} ${variantsOfNoun[1]}`;
  }
  if (remain === 1) {
    return `${number} ${variantsOfNoun[0]}`;
  }
  return `${number} ${variantsOfNoun[2]}`;
};
