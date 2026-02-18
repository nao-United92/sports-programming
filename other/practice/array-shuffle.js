export const arrayShuffle = (arr) => {
  const newArr = [...arr];
  let m = newArr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [newArr[m], newArr[i]] = [newArr[i], newArr[m]];
  }
  return newArr;
};
