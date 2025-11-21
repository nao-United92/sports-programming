const parse = (str) => {
  const s = str.startsWith('?') ? str.slice(1) : str;
  if (!s) {
    return {};
  }

  const result = {};
  const pairs = s.split('&');

  for (const pair of pairs) {
    let [key, value] = pair.split('=');
    if (key === undefined) continue;
    
    key = decodeURIComponent(key);
    // Handle keys without values and plus-encoded spaces
    value = value === undefined ? '' : decodeURIComponent(value.replace(/\+/g, ' '));

    if (Object.prototype.hasOwnProperty.call(result, key)) {
      if (!Array.isArray(result[key])) {
        result[key] = [result[key]];
      }
      result[key].push(value);
    } else {
      result[key] = value;
    }
  }
  return result;
};

const stringify = (obj) => {
  if (!obj) {
    return '';
  }

  const pairs = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const encodedKey = encodeURIComponent(key);

      if (Array.isArray(value)) {
        for (const item of value) {
          if (item !== null && item !== undefined) {
            pairs.push(`${encodedKey}=${encodeURIComponent(item)}`);
          }
        }
      } else if (value !== null && value !== undefined) {
        pairs.push(`${encodedKey}=${encodeURIComponent(value)}`);
      }
    }
  }
  return pairs.join('&');
};

module.exports = { parse, stringify };
