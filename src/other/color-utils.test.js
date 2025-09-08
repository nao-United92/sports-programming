const assert = require('assert');
const { hexToRgb, rgbToHex, rgbToHsl, hexToHsl } = require('./color-utils.js');

try {
  // hexToRgb
  assert.strictEqual(hexToRgb('#ff0000'), 'rgb(255, 0, 0)', 'hexToRgb full hex');
  assert.strictEqual(hexToRgb('#f00'), 'rgb(255, 0, 0)', 'hexToRgb short hex');
  assert.strictEqual(hexToRgb('00ff00'), 'rgb(0, 255, 0)', 'hexToRgb no hash');

  // rgbToHex
  assert.strictEqual(rgbToHex(255, 0, 0), '#FF0000', 'rgbToHex');
  assert.strictEqual(rgbToHex(0, 255, 128), '#00FF80', 'rgbToHex');

  // rgbToHsl
  assert.strictEqual(rgbToHsl(255, 0, 0), 'hsl(0, 100%, 50%)', 'rgbToHsl red');
  assert.strictEqual(rgbToHsl(0, 0, 0), 'hsl(0, 0%, 0%)', 'rgbToHsl black');
  assert.strictEqual(rgbToHsl(255, 255, 255), 'hsl(0, 0%, 100%)', 'rgbToHsl white');
  assert.strictEqual(rgbToHsl(0, 255, 127), 'hsl(150, 100%, 50%)', 'rgbToHsl spring green');

  // hexToHsl
  assert.strictEqual(hexToHsl('#00ff7f'), 'hsl(150, 100%, 50%)', 'hexToHsl spring green');
  assert.strictEqual(hexToHsl('ffffff'), 'hsl(0, 0%, 100%)', 'hexToHsl white no hash');

  console.log('All color-utils tests passed!');
} catch (e) {
  console.error('color-utils tests failed:', e.message);
  process.exit(1);
}