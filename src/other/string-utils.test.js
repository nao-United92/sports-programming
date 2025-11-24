// src/other/string-utils.test.js

import { capitalize, toKebabCase } from './string-utils';

describe('capitalize', () => {
  test('should capitalize the first letter of a single word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should capitalize the first letter of a sentence', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('should handle an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle a string that is already capitalized', () => {
    expect(capitalize('World')).toBe('World');
  });

  test('should handle a string with leading spaces', () => {
    expect(capitalize('  test')).toBe('  test'); // Only first char is capitalized, not first non-space char
  });

  test('should return an empty string for non-string input like null', () => {
    expect(capitalize(null)).toBe('');
  });

  test('should return an empty string for non-string input like undefined', () => {
    expect(capitalize(undefined)).toBe('');
  });

  test('should return an empty string for non-string input like a number', () => {
    expect(capitalize(123)).toBe('');
  });
});

describe('toKebabCase', () => {
  test('should convert a single word to kebab-case', () => {
    expect(toKebabCase('hello')).toBe('hello');
  });

  test('should convert a camelCase string to kebab-case', () => {
    expect(toKebabCase('helloWorld')).toBe('hello-world');
  });

  test('should convert a PascalCase string to kebab-case', () => {
    expect(toKebabCase('HelloWorld')).toBe('hello-world');
  });

  test('should convert a string with spaces to kebab-case', () => {
    expect(toKebabCase('hello world')).toBe('hello-world');
  });

  test('should convert a string with hyphens to kebab-case', () => {
    expect(toKebabCase('hello-world')).toBe('hello-world');
  });

  test('should convert a string with underscores to kebab-case', () => {
    expect(toKebabCase('hello_world')).toBe('hello-world');
  });

  test('should handle a string with mixed casing and spaces', () => {
    expect(toKebabCase('  Hello World  Example  ')).toBe('hello-world-example');
  });

  test('should handle an empty string', () => {
    expect(toKebabCase('')).toBe('');
  });

  test('should return an empty string for non-string input like null', () => {
    expect(toKebabCase(null)).toBe('');
  });

  test('should return an empty string for non-string input like undefined', () => {
    expect(toKebabCase(undefined)).toBe('');
  });

  test('should return an empty string for non-string input like a number', () => {
    expect(toKebabCase(123)).toBe('');
  });

  test('should handle acronyms correctly', () => {
    expect(toKebabCase('NASAProject')).toBe('nasa-project');
    expect(toKebabCase('XMLHTTPRequest')).toBe('xml-http-request');
  });
});
