import { sampleElement } from './array-sample-element.js';

test('sampleElement returns a random element', () => {
  const arr = [1, 2, 3];
  jest.spyOn(Math, 'random').mockReturnValue(0.5); // Index 1
  expect(sampleElement(arr)).toBe(2);
  jest.restoreAllMocks();
});
