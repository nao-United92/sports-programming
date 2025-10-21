/**
 * オブジェクトのキーと値を反転させます。
 * @param {Object} obj - 反転するオブジェクト。
 * @returns {Object} 反転した新しいオブジェクト。
 */
export const invert = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[obj[key]] = key;
    }
  }
  return newObj;
};
