const sortBy = (arr, fields) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument');
  }
  if (!Array.isArray(fields) || fields.length === 0) {
    throw new TypeError('Expected an array of fields (strings or objects) for the second argument');
  }

  // Create a shallow copy to avoid modifying the original array
  const sortedArr = [...arr];

  sortedArr.sort((a, b) => {
    for (const field of fields) {
      let key;
      let order = 'asc'; // default to ascending

      if (typeof field === 'string') {
        key = field;
      } else if (typeof field === 'object' && field !== null && field.key) {
        key = field.key;
        if (field.order === 'desc') {
          order = 'desc';
        }
      } else {
        throw new TypeError('Each field must be a string or an object with a "key" property');
      }

      const valA = a[key];
      const valB = b[key];

      if (valA < valB) {
        return order === 'asc' ? -1 : 1;
      }
      if (valA > valB) {
        return order === 'asc' ? 1 : -1;
      }
      // If values are equal, continue to the next field
    }
    return 0; // All fields are equal
  });

  return sortedArr;
};

module.exports = { sortBy };
