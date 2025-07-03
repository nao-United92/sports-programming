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

function genStep(min, max, step) {
  const currentValue = min - step;

  return {
    next() {
      currentValue += step;
      if (currentValue > max) {
        return {
          done: true,
        };
      } else {
        return {
          done: false,
          value: currentValue,
        };
      }
    },
  };
}

const it = genStep(3, 10, 2);
let a = it.next();

while (!a.done) {
  console.log(a.value);
  a = it.next();
}
