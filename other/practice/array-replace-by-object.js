function replaceByObject(array, object) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  return array.map(item => Object.prototype.hasOwnProperty.call(object, item) ? object[item] : item);
}
module.exports = replaceByObject;
