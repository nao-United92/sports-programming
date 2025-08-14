/**
 * 数値を指定した小数点以下の桁数に丸めます。
 * @param {number} number - 丸める数値。
 * @param {number} decimalPlaces - 小数点以下の桁数。
 * @returns {number} 丸められた数値。
 */
export function roundToDecimal(number, decimalPlaces) {
  if (typeof number !== 'number' || isNaN(number)) {
    return NaN;
  }
  if (typeof decimalPlaces !== 'number' || !Number.isInteger(decimalPlaces) || decimalPlaces < 0) {
    decimalPlaces = 0; // デフォルトは整数に丸める
  }

  const factor = Math.pow(10, decimalPlaces);
  return Math.round(number * factor) / factor;
}
