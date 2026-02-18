import { stringReverseWordsOrder } from './string-reverse-words-order';

test('stringReverseWordsOrder reverses word order', () => {
  expect(stringReverseWordsOrder('hello world')).toBe('world hello');
  expect(stringReverseWordsOrder('  the sky is blue  ')).toBe('blue is sky the');
  expect(stringReverseWordsOrder('a')).toBe('a');
});
