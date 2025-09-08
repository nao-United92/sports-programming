const assert = require('assert');
const {
  uniqueElements,
  uniqueElementsBy,
  uniqBy,
} = require('./array-unique-utils.js');

try {
  assert.deepStrictEqual(uniqueElements([1, 2, 2, 3, 4, 4, 5]), [1, 2, 3, 4, 5]);
  assert.deepStrictEqual(
    uniqueElementsBy(
      [
        { id: 0, value: 'a' },
        { id: 1, value: 'b' },
        { id: 2, value: 'c' },
        { id: 1, value: 'd' },
        { id: 0, value: 'e' },
      ],
      (a, b) => a.id == b.id
    ),
    [
      { id: 0, value: 'a' },
      { id: 1, value: 'b' },
      { id: 2, value: 'c' },
    ]
  );
  assert.deepStrictEqual(uniqBy([{ n: 1 }, { n: 2 }, { n: 1 }], o => o.n), [{ n: 1 }, { n: 2 }]);
  console.log('All array-unique tests passed!');
} catch (e) {
  console.error('array-unique tests failed:', e.message);
  process.exit(1);
}