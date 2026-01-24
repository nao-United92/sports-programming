/**
 * Gets the value at `path` of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {object} object The object to query.
 * @param {string|Array<string>} path The path of the property to get.
 * @param {any} [defaultValue] The value returned if the resolved value is `undefined`.
 * @returns {any} Returns the resolved value.
 */
function getValue(object, path, defaultValue) {
  if (object === null || typeof object !== 'object') {
    return defaultValue;
  }
  
  // pathが空文字列または空配列の場合、object自体を返す
  if ((typeof path === 'string' && path === '') || (Array.isArray(path) && path.length === 0)) {
    return object;
  }

  const pathParts = Array.isArray(path) ? path : path.split('.');
  let current = object;

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    // partが空文字列の場合、スキップするかエラーにするか考慮が必要だが、
    // 空パスは既に上で処理されているはずなので、通常はここに来ない。
    // もしpathが"a..b"のような形式でsplitされて空文字列がpathPartsに含まれる場合、
    // そのようなパスは無効とみなしdefaultValueを返すのが適切。
    if (part === '') { // 空文字列のパスセグメントを検出したら無効なパスとして扱う
      return defaultValue;
    }

    if (current === null || typeof current !== 'object' || !(part in current)) {
      return defaultValue;
    }
    current = current[part];
  }

  return current === undefined ? defaultValue : current;
}

export default getValue;
