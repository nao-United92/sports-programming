
const interleave = (...arrays) => {
  const maxLength = Math.max(...arrays.map(x => x.length));
  return Array.from({ length: maxLength }).reduce((acc, _, i) => {
    return acc.concat(arrays.map(arr => arr[i]).filter(v => v !== undefined));
  }, []);
};
module.exports = interleave;
