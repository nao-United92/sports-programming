import { stringCapitalizeWords } from './string-capitalize-words';

test('stringCapitalizeWords capitalizes first letter of each word', () => {
  expect(stringCapitalizeWords('hello world')).toBe('Hello World');
  expect(stringCapitalizeWords('javaScript is fun')).toBe('JavaScript Is Fun');
  expect(stringCapitalizeWords('')).toBe('');
});
