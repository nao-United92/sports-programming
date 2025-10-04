
import { numberToWords } from './number-to-words-utils.js';

describe('numberToWords', () => {
  it('should convert single digit numbers to words', () => {
    expect(numberToWords(0)).toBe('zero');
    expect(numberToWords(1)).toBe('one');
    expect(numberToWords(9)).toBe('nine');
  });

  it('should convert two digit numbers to words', () => {
    expect(numberToWords(10)).toBe('ten');
    expect(numberToWords(15)).toBe('fifteen');
    expect(numberToWords(20)).toBe('twenty');
    expect(numberToWords(21)).toBe('twenty-one');
    expect(numberToWords(99)).toBe('ninety-nine');
  });

  it('should convert three digit numbers to words', () => {
    expect(numberToWords(100)).toBe('one hundred');
    expect(numberToWords(101)).toBe('one hundred one');
    expect(numberToWords(123)).toBe('one hundred twenty-three');
    expect(numberToWords(999)).toBe('nine hundred ninety-nine');
  });

  it('should convert numbers in thousands to words', () => {
    expect(numberToWords(1000)).toBe('one thousand');
    expect(numberToWords(1001)).toBe('one thousand one');
    expect(numberToWords(12345)).toBe('twelve thousand three hundred forty-five');
    expect(numberToWords(999999)).toBe('nine hundred ninety-nine thousand nine hundred ninety-nine');
  });

  it('should convert numbers in millions to words', () => {
    expect(numberToWords(1000000)).toBe('one million');
    expect(numberToWords(1000001)).toBe('one million one');
    expect(numberToWords(1234567)).toBe('one million two hundred thirty-four thousand five hundred sixty-seven');
  });

  it('should convert numbers in billions to words', () => {
    expect(numberToWords(1000000000)).toBe('one billion');
    expect(numberToWords(1234567890)).toBe('one billion two hundred thirty-four million five hundred sixty-seven thousand eight hundred ninety');
  });

  it('should convert numbers in trillions to words', () => {
    expect(numberToWords(1000000000000)).toBe('one trillion');
    expect(numberToWords(1234567890123)).toBe('one trillion two hundred thirty-four billion five hundred sixty-seven million eight hundred ninety thousand one hundred twenty-three');
  });

  it('should handle negative numbers', () => {
    expect(numberToWords(-1)).toBe('negative one');
    expect(numberToWords(-123)).toBe('negative one hundred twenty-three');
    expect(numberToWords(-1000)).toBe('negative one thousand');
  });

  it('should throw an error for non-finite numbers', () => {
    expect(() => numberToWords(Infinity)).toThrow('Input must be a finite number.');
    expect(() => numberToWords(-Infinity)).toThrow('Input must be a finite number.');
    expect(() => numberToWords(NaN)).toThrow('Input must be a finite number.');
  });

  it('should handle decimal numbers by throwing an error', () => {
    expect(() => numberToWords(1.23)).toThrow('Input must be a finite number.');
  });
});
