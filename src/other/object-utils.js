/**
 * オブジェクトから指定されたキーのプロパティのみを抽出した新しいオブジェクトを作成します。
 * @param {object} obj - 元のオブジェクト。
 * @param {string[]} keys - 抽出するキーの配列。
 * @returns {object} 新しいオブジェクト。
 */
export const pick = (obj, keys) => {
  if (!obj || !keys) {
    return {};
  }
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

/**
 * オブジェクトから指定されたキーのプロパティを除外した新しいオブジェクトを作成します。
 * @param {object} obj - 元のオブジェクト。
 * @param {string[]} keys - 除外するキーの配列。
 * @returns {object} 新しいオブジェクト。
 */
export const omit = (obj, keys) => {
  if (!obj) {
    return {};
  }
  const newObj = { ...obj };
  if (keys) {
    keys.forEach(key => {
      delete newObj[key];
    });
  }
  return newObj;
};
