
const unzip = arr =>
  arr.reduce(
    (acc, val) => {
      val.forEach((v, i) => acc[i].push(v));
      return acc;
    },
    Array.from({ length: Math.max(...arr.map(a => a.length)) }).map(() => [])
  );
module.exports = unzip;
