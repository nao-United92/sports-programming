const move = (arr, from, to) => {
  if (!Array.isArray(arr) || from < 0 || to < 0 || from >= arr.length || to >= arr.length) {
    return [...arr];
  }
  const newArr = [...arr];
  const [removed] = newArr.splice(from, 1);
  newArr.splice(to, 0, removed);
  return newArr;
};

module.exports = { move };