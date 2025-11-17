function parseQuery(queryString) {
  const query = {};
  if (!queryString) {
    return query;
  }

  const pairs = (queryString.startsWith('?') ? queryString.substring(1) : queryString).split('&');

  for (const pair of pairs) {
    if (!pair) continue;
    const parts = pair.split('=');
    const key = decodeURIComponent(parts[0]);
    const value = parts.length > 1 ? decodeURIComponent(parts[1].replace(/\+/g, ' ')) : true;

    if (key in query) {
      if (!Array.isArray(query[key])) {
        query[key] = [query[key]];
      }
      query[key].push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}

function stringifyQuery(queryObject) {
  if (!queryObject) {
    return '';
  }

  const params = [];
  for (const key in queryObject) {
    if (Object.prototype.hasOwnProperty.call(queryObject, key)) {
      const value = queryObject[key];
      const encodedKey = encodeURIComponent(key);

      if (value === null || value === undefined) {
        continue;
      }

      if (Array.isArray(value)) {
        value.forEach(val => {
          if (val !== null && val !== undefined) {
            params.push(`${encodedKey}=${encodeURIComponent(val)}`);
          }
        });
      } else {
        params.push(`${encodedKey}=${encodeURIComponent(value)}`);
      }
    }
  }
  return params.join('&');
}

module.exports = {
  parseQuery,
  stringifyQuery,
};
