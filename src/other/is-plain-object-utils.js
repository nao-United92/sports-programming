/**
 * 値がプレーンなオブジェクト、つまり `Object` コンストラクタで作成されたオブジェクト、
 * または `[[Prototype]]` が `null` のオブジェクトであるかどうかをチェックします。
 * @param {*} value チェックする値。
 * @returns {boolean} `value` がプレーンなオブジェクトの場合は `true`、それ以外の場合は `false` を返します。
 */
export const isPlainObject = (value) => {
  if (value == null || typeof value !== 'object') {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  let Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && Ctor instanceof Ctor && Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object);
}
