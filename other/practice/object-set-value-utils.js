/**
 * Sets the value at `path` of `object`. If a portion of `path` does not exist, it's created.
 * Arrays are created for numeric path segments, objects for string segments.
 *
 * @param {object} object The object to modify.
 * @param {string|Array<string>} path The path of the property to set.
 * @param {any} value The value to set.
 * @returns {object} Returns the modified object.
 */
function setValue(object, path, value) {
  if (object === null || typeof object !== 'object') {
    throw new TypeError('Expected an object for the first argument.');
  }
  // 空のパス文字列または空の配列パスは無効とする
  if ((typeof path === 'string' && path.length === 0) || (Array.isArray(path) && path.length === 0)) {
    throw new TypeError('Expected a non-empty string or array for the path argument.');
  }

  const pathParts = Array.isArray(path) ? path : path.split('.');
  let current = object;

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];

    if (i === pathParts.length - 1) {
      // 最後のパスセグメントでは値を設定
      current[part] = value;
    } else {
      // 中間のパスセグメント
      // 次のセグメントが数字かどうかをチェックし、配列かオブジェクトかを決定
      const nextPartIsNumeric = !isNaN(Number(pathParts[i + 1])) && Number(pathParts[i + 1]) >= 0;

      if (current[part] === null || current[part] === undefined || typeof current[part] !== 'object') {
        // 現在のパスセグメントが未定義、null、またはプリミティブの場合、新しい構造を作成
        current[part] = nextPartIsNumeric ? [] : {};
      }
      // ここでtypeof current[part] !== 'object' のチェックは不要になる。
      // なぜなら、上のif文で既にオブジェクト/配列に変換されているか、
      // 元々オブジェクト/配列であればそのままcurrentに代入されるから。
      
      current = current[part];
    }
  }

  return object;
}

export default setValue;
