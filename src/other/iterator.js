function genIterator(max) {
  let value = 0;

  return {
    next() {
      if (value < max) {
        return {
          done: false,
          value: value++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

const iterator = genIterator(2);

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());
