/**
 * 値がTypedArrayであるかどうかをチェックします。
 * @param {*} value - チェックする値。
 * @returns {boolean} TypedArrayであればtrue、そうでなければfalse。
 */
export const isTypedArray = (value) => {
  const TypedArray = Object.getPrototypeOf(Int8Array);
  return value instanceof TypedArray;
};
