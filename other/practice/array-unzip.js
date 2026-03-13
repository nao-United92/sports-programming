export const unzip = (arr) => {
  if (!arr.length) return [];
  const maxLength = Math.max(...arr.map((x) => x.length));
  return arr.reduce(
    (acc, val) => {
      val.forEach((v, i) => acc[i].push(v));
      return acc;
    },
    Array.from({ length: maxLength }).map(() => [])
  );
};
