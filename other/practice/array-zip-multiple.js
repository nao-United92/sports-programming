
const arrayZipMultiple = (...arrays) => {
  const maxLength = Math.max(...arrays.map(a => a.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return arrays.map(array => array[i]);
  });
};

module.exports = arrayZipMultiple;
