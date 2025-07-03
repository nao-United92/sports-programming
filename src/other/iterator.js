function genIterator(min, max) {
  let value = min;

  return {
    next() {
      if (value < max) {
        return {
          done: false,
          value: min++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

const iterator = genIterator(1, 10);
console.log(iterator.next().value);
