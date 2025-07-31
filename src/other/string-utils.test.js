import { capitalize, removeNonAlphanumeric, reverseString, isPalindrome, countOccurrences, countWords, removeWhitespace, camelCase, snakeCase, kebabCase, padLeft, isUUID, truncate, toCamelCase, toSnakeCase, toTitleCase, slugify, mask } from './string-utils.js';

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('fooBar')).toBe('FooBar');
  });

  test('should return an empty string for an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(capitalize(123)).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
  });
});

describe('mask', () => {
  test('should mask a portion of the string with the default mask character', () => {
    expect(mask('1234567890', 2, 6)).toBe('12****890');
  });

  test('should mask a portion of the string with a custom mask character', () => {
    expect(mask('1234567890', 2, 6, '#')).toBe('12####890');
  });

  test('should handle start and end indices out of bounds', () => {
    expect(mask('12345', -2, 3)).toBe('***45');
    expect(mask('12345', 2, 10)).toBe('12***');
    expect(mask('12345', -2, 10)).toBe('*****');
  });

  test('should return the original string if start >= end', () => {
    expect(mask('12345', 3, 2)).toBe('12345');
    expect(mask('12345', 3, 3)).toBe('12345');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(mask(12345, 2, 4)).toBe('');
    expect(mask(null, 2, 4)).toBe('');
    expect(mask(undefined, 2, 4)).toBe('');
  });
});

describe('removeNonAlphanumeric', () => {
  test('should remove all non-alphanumeric characters from a string', () => {
    expect(removeNonAlphanumeric('Hello, World!123')).toBe('HelloWorld123');
    expect(removeNonAlphanumeric('  abc-123_xyz  ')).toBe('abc123xyz');
    expect(removeNonAlphanumeric('!@#$%^&*()')).toBe('');
    expect(removeNonAlphanumeric('abc')).toBe('abc');
  });

  test('should return an empty string if the input is not a string', () => {
    expect(removeNonAlphanumeric(123)).toBe('');
    expect(removeNonAlphanumeric(null)).toBe('');
    expect(removeNonAlphanumeric(undefined)).toBe('');
  });

  test('should handle empty string', () => {
    expect(removeNonAlphanumeric('')).toBe('');
  });
});

describe('reverseString', () => {
  test('should reverse a given string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('12345')).toBe('54321');
    expect(reverseString('')).toBe('');
  });

  test('should return an empty string if the input is not a string', () => {
    expect(reverseString(123)).toBe('');
    expect(reverseString(null)).toBe('');
    expect(reverseString(undefined)).toBe('');
  });
});

describe('isPalindrome', () => {
  test('should return true for a palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('level')).toBe(true);
  });

  test('should return false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
  });

  test('should be case-insensitive and ignore non-alphanumeric characters', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
    expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
  });

  test('should return false for non-string inputs', () => {
    expect(isPalindrome(121)).toBe(false);
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(undefined)).toBe(false);
  });
});

describe('countOccurrences', () => {
  test('should count the occurrences of a character in a string', () => {
    expect(countOccurrences('hello world', 'l')).toBe(3);
    expect(countOccurrences('programming', 'm')).toBe(2);
    expect(countOccurrences('banana', 'a')).toBe(3);
  });

  test('should return 0 if the character is not found', () => {
    expect(countOccurrences('hello', 'z')).toBe(0);
  });

  test('should return 0 for invalid inputs', () => {
    expect(countOccurrences(123, '1')).toBe(0);
    expect(countOccurrences('hello', 1)).toBe(0);
    expect(countOccurrences('hello', 'll')).toBe(0);
  });
});

describe('countWords', () => {
  test('should count words in a string', () => {
    expect(countWords('Hello world')).toBe(2);
    expect(countWords('  One  two   three  ')).toBe(3);
    expect(countWords('SingleWord')).toBe(1);
    expect(countWords('')).toBe(0);
    expect(countWords('   ')).toBe(0);
  });

  test('should return 0 for non-string inputs', () => {
    expect(countWords(123)).toBe(0);
    expect(countWords(null)).toBe(0);
    expect(countWords(undefined)).toBe(0);
  });
});

describe('removeWhitespace', () => {
  test('should remove all whitespace from a string', () => {
    expect(removeWhitespace('Hello world')).toBe('Helloworld');
    expect(removeWhitespace('  leading and trailing  ')).toBe('leadingandtrailing');
    expect(removeWhitespace('Multiple   spaces')).toBe('Multiplespaces');
    expect(removeWhitespace(`	Tabs
andNewlines`)).toBe('TabsandNewlines');
    expect(removeWhitespace('')).toBe('');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(removeWhitespace(123)).toBe('');
    expect(removeWhitespace(null)).toBe('');
    expect(removeWhitespace(undefined)).toBe('');
  });
});

describe('camelCase', () => {
  test('should convert a string to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
    expect(camelCase('foo-bar')).toBe('fooBar');
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
    expect(camelCase('alreadyCamelCase')).toBe('alreadyCamelCase');
    expect(camelCase('foo_bar_baz')).toBe('fooBarBaz');
    expect(camelCase('  leading and trailing  ')).toBe('leadingAndTrailing');
  });
});

describe('snakeCase', () => {
  test('should convert a string to snake_case', () => {
    expect(snakeCase('hello world')).toBe('hello_world');
    expect(snakeCase('fooBar')).toBe('foo_bar');
    expect(snakeCase('__FOO_BAR__')).toBe('__foo_bar__');
  });
});

describe('kebabCase', () => {
  test('should convert a string to kebab-case', () => {
    expect(kebabCase('hello world')).toBe('hello-world');
    expect(kebabCase('fooBar')).toBe('foo-bar');
    expect(kebabCase('__FOO_BAR__')).toBe('--foo-bar--');
  });
});


describe('padLeft', () => {
  test('should pad the string on the left with the specified character', () => {
    expect(padLeft('123', 5, '0')).toBe('00123');
    expect(padLeft('hello', 10, '-')).toBe('-----hello');
  });

  test('should use space as default padding character', () => {
    expect(padLeft('abc', 5)).toBe('  abc');
  });

  test('should return the original string if its length is greater than or equal to the desired length', () => {
    expect(padLeft('12345', 3, '0')).toBe('12345');
    expect(padLeft('short', 5, '*')).toBe('short');
  });

  test('should handle empty string input', () => {
    expect(padLeft('', 5, 'x')).toBe('xxxxx');
  });

  test('should return empty string for non-string input', () => {
    expect(padLeft(123, 5, '0')).toBe('');
    expect(padLeft(null, 5, ' ')).toBe('');
    expect(padLeft(undefined, 5, ' ')).toBe('');
  });
});

describe('isUUID', () => {
  test('should return true for a valid UUID v4', () => {
    expect(isUUID('f47ac10b-58cc-4372-a567-0e02b2c3d479')).toBe(true);
    expect(isUUID('123e4567-e89b-42d3-a456-426614174000')).toBe(true); // Example UUID v4
  });

  test('should return false for an invalid UUID', () => {
    expect(isUUID('invalid-uuid')).toBe(false);
    expect(isUUID('123e4567-e89b-12d3-a456-42661417400')).toBe(false); // Too short
    expect(isUUID('123e4567-e89b-12d3-a456-4266141740000')).toBe(false); // Too long
    expect(isUUID('123e4567-e89b-12d3-a456-42661417400g')).toBe(false); // Invalid character
    expect(isUUID('f47ac10b-58cc-1372-a567-0e02b2c3d479')).toBe(false); // Invalid version (not 4)
    expect(isUUID('f47ac10b-58cc-4372-g567-0e02b2c3d479')).toBe(false); // Invalid variant (not 8, 9, a, or b)
  });

  test('should return false for non-string inputs', () => {
    expect(isUUID(123)).toBe(false);
    expect(isUUID(null)).toBe(false);
    expect(isUUID(undefined)).toBe(false);
  });
});

describe('truncate', () => {
  test('should truncate a string to the specified length and add ellipsis', () => {
    expect(truncate('Hello world', 8)).toBe('Hello...');
    expect(truncate('This is a long string', 13)).toBe('This is a ...');
  });

  test('should handle custom suffix', () => {
    expect(truncate('Long string example', 10, '--')).toBe('Long str--');
  });

  test('should not truncate if the string is shorter than or equal to the max length', () => {
    expect(truncate('Short', 10)).toBe('Short');
    expect(truncate('Exact', 5)).toBe('Exact');
  });

  test('should return an empty string for non-string input', () => {
    expect(truncate(123, 5)).toBe('');
    expect(truncate(null, 5)).toBe('');
    expect(truncate(undefined, 5)).toBe('');
  });

  test('should return an empty string for invalid maxLength', () => {
    expect(truncate('Hello', -1)).toBe('');
    expect(truncate('Hello', 'abc')).toBe('');
  });

  test('should handle empty string input', () => {
    expect(truncate('', 5)).toBe('');
  });
});

describe('toCamelCase', () => {
  test('should convert snake_case to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
    expect(toCamelCase('foo_bar_baz')).toBe('fooBarBaz');
  });

  test('should convert kebab-case to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
    expect(toCamelCase('foo-bar-baz')).toBe('fooBarBaz');
  });

  test('should handle mixed cases', () => {
    expect(toCamelCase('hello-World_foo')).toBe('helloWorldFoo');
  });

  test('should return empty string for non-string inputs', () => {
    expect(toCamelCase(123)).toBe('');
    expect(toCamelCase(null)).toBe('');
    expect(toCamelCase(undefined)).toBe('');
  });
});

describe('toSnakeCase', () => {
  test('should convert camelCase to snake_case', () => {
    expect(toSnakeCase('helloWorld')).toBe('hello_world');
    expect(toSnakeCase('fooBarBaz')).toBe('foo_bar_baz');
  });

  test('should handle already snake_case strings', () => {
    expect(toSnakeCase('already_snake_case')).toBe('already_snake_case');
  });

  test('should return empty string for non-string inputs', () => {
    expect(toSnakeCase(123)).toBe('');
    expect(toSnakeCase(null)).toBe('');
    expect(toSnakeCase(undefined)).toBe('');
  });
});

describe('toTitleCase', () => {
  test('should convert a string to title case', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
    expect(toTitleCase('this is a test string')).toBe('This Is A Test String');
    expect(toTitleCase('another-example-string')).toBe('Another-Example-String');
    expect(toTitleCase('already Title Case')).toBe('Already Title Case');
  });

  test('should handle empty string', () => {
    expect(toTitleCase('')).toBe('');
  });

  test('should handle single word string', () => {
    expect(toTitleCase('word')).toBe('Word');
  });

  test('should return empty string for non-string inputs', () => {
      expect(toTitleCase(123)).toBe('');
      expect(toTitleCase(null)).toBe('');
      expect(toTitleCase(undefined)).toBe('');
    });
  });

  describe('startsWith', () => {
    test('should return true if the string starts with the prefix', () => {
      expect(startsWith('hello world', 'hello')).toBe(true);
      expect(startsWith('foo bar', 'foo')).toBe(true);
    });

    test('should return false if the string does not start with the prefix', () => {
      expect(startsWith('hello world', 'world')).toBe(false);
      expect(startsWith('foo bar', 'baz')).toBe(false);
    });

    test('should return false for non-string inputs', () => {
      expect(startsWith(null, 'hello')).toBe(false);
      expect(startsWith('hello', null)).toBe(false);
      expect(startsWith(123, '1')).toBe(false);
    });
  });

  describe('endsWith', () => {
    test('should return true if the string ends with the suffix', () => {
      expect(endsWith('hello world', 'world')).toBe(true);
      expect(endsWith('foo bar', 'bar')).toBe(true);
    });

    test('should return false if the string does not end with the suffix', () => {
      expect(endsWith('hello world', 'hello')).toBe(false);
      expect(endsWith('foo bar', 'baz')).toBe(false);
    });

    test('should return false for non-string inputs', () => {
      expect(endsWith(null, 'world')).toBe(false);
      expect(endsWith('world', null)).toBe(false);
      expect(endsWith(123, '3')).toBe(false);
    });
  });

  describe('isNumeric', () => {
    test('should return true for a string containing only digits', () => {
      expect(isNumeric('12345')).toBe(true);
      expect(isNumeric('0')).toBe(true);
    });

    test('should return false for a string containing non-digits', () => {
      expect(isNumeric('123a')).toBe(false);
      expect(isNumeric('1.23')).toBe(false);
      expect(isNumeric('-123')).toBe(false);
      expect(isNumeric(' ')).toBe(false);
      expect(isNumeric('')).toBe(false);
    });

    test('should return false for non-string inputs', () => {
      expect(isNumeric(123)).toBe(false);
      expect(isNumeric(null)).toBe(false);
      expect(isNumeric(undefined)).toBe(false);
    });
  });

  describe('repeat', () => {
    test('should repeat the string n times', () => {
      expect(repeat('abc', 3)).toBe('abcabcabc');
      expect(repeat('-', 5)).toBe('-----');
      expect(repeat('test', 0)).toBe('');
    });

    test('should return an empty string for invalid input', () => {
      expect(repeat(null, 2)).toBe('');
      expect(repeat('abc', -1)).toBe('');
    });
  });

  describe('escapeHTML', () => {
    test('should escape HTML special characters', () => {
      expect(escapeHTML('<script>alert("XSS")</script>')).toBe('&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;');
      expect(escapeHTML('"' + "'" + '<>')).toBe('&quot;&#39;&lt;&gt;');
    });

    test('should return an empty string for non-string input', () => {
      expect(escapeHTML(123)).toBe('');
      expect(escapeHTML(null)).toBe('');
      expect(escapeHTML(undefined)).toBe('');
    });
  });

  describe('slugify', () => {
    test('should convert a string to a URL-friendly slug', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('  leading and trailing spaces  ')).toBe('leading-and-trailing-spaces');
      expect(slugify('special!@#characters')).toBe('specialcharacters');
      expect(slugify('MiXeD CaSe')).toBe('mixed-case');
    });

    test('should return an empty string for non-string inputs', () => {
      expect(slugify(123)).toBe('');
      expect(slugify(null)).toBe('');
      expect(slugify(undefined)).toBe('');
    });
  });