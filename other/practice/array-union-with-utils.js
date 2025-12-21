const unionWith = (a, b, comp) =>
  Array.from(new Set([...a, ...b.filter(x => a.every(y => !comp(x, y)))]));

export default unionWith;
