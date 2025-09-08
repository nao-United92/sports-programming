const assert = require('assert');
const { compose, pipe } = require('./compose-utils.js');

try {
  const add5 = x => x + 5;
  const multiply10 = x => x * 10;

  // compose test
  const composed = compose(add5, multiply10);
  assert.strictEqual(composed(5), 55, 'compose functions should work');

  // pipe test
  const piped = pipe(add5, multiply10);
  assert.strictEqual(piped(5), 100, 'pipe functions should work');

  console.log('All compose/pipe tests passed!');
} catch (e) {
  console.error('compose/pipe tests failed:', e.message);
  process.exit(1);
}
