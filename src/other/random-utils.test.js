
import {
  generateUUID,
  getRandomInt,
  shuffleArray,
  randomFloat,
  randomHexColor,
  randomBoolean,
  randomString,
  randomDate,
  randomEnum,
} from './random-utils';

describe('random-utils', () => {
  // Mock Math.random for predictable test results
  const mockMathRandom = jest.spyOn(Math, 'random');

  afterEach(() => {
    mockMathRandom.mockRestore(); // Restore original Math.random after each test
  });

  

  describe('generateUUID', () => {
    it('should generate a valid UUID v4 format', () => {
      // Mock Math.random to produce a predictable UUID
      mockMathRandom.mockReturnValueOnce(0.1).mockReturnValueOnce(0.2).mockReturnValueOnce(0.3).mockReturnValueOnce(0.4)
                    .mockReturnValueOnce(0.5).mockReturnValueOnce(0.6).mockReturnValueOnce(0.7).mockReturnValueOnce(0.8)
                    .mockReturnValueOnce(0.9).mockReturnValueOnce(0.11).mockReturnValueOnce(0.12).mockReturnValueOnce(0.13)
                    .mockReturnValueOnce(0.14).mockReturnValueOnce(0.15).mockReturnValueOnce(0.16).mockReturnValueOnce(0.17);

      const uuid = generateUUID();
      // Basic regex for UUID v4 format
      expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });

    it('should generate different UUIDs', () => {
      mockMathRandom.mockRestore(); // Use actual random for this test
      const uuid1 = generateUUID();
      const uuid2 = generateUUID();
      expect(uuid1).not.toBe(uuid2);
    });
  });

  describe('getRandomInt', () => {
    it('should return an integer within the specified range (inclusive)', () => {
      mockMathRandom.mockReturnValue(0.0);
      expect(getRandomInt(1, 5)).toBe(1);

      mockMathRandom.mockReturnValue(0.9999999999999999);
      expect(getRandomInt(1, 5)).toBe(5);

      mockMathRandom.mockReturnValue(0.5);
      const result = getRandomInt(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
      expect(Number.isInteger(result)).toBe(true);
    });
  });

  describe('shuffleArray', () => {
    it('should return a new array', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const shuffledArray = shuffleArray(originalArray);
      expect(shuffledArray).not.toBe(originalArray);
      expect(shuffledArray).toEqual(expect.arrayContaining(originalArray));
    });

    it('should contain the same elements as the original array', () => {
      const originalArray = [1, 2, 3, 4, 5];
      const shuffledArray = shuffleArray(originalArray);
      expect(shuffledArray.sort()).toEqual(originalArray.sort());
    });

    it('should shuffle the array (basic check with mock random)', () => {
      const originalArray = [1, 2, 3, 4];
      // Mock Math.random to produce a specific shuffle order
      // Example: [4, 3, 2, 1]
      mockMathRandom.mockReturnValueOnce(0.74) // 3rd element (index 2) for 4 elements
                    .mockReturnValueOnce(0.66) // 2nd element (index 1) for 3 elements
                    .mockReturnValueOnce(0.5)  // 1st element (index 0) for 2 elements
                    .mockReturnValueOnce(0);   // 0th element (index 0) for 1 element

      const shuffledArray = shuffleArray(originalArray);
      expect(shuffledArray).toEqual([3, 4, 2, 1]);
    });

    it('should handle an empty array', () => {
      expect(shuffleArray([])).toEqual([]);
    });

    it('should handle a single-element array', () => {
      expect(shuffleArray([1])).toEqual([1]);
    });
  });

  describe('randomFloat', () => {
    it('should return a float within the specified range (exclusive max)', () => {
      mockMathRandom.mockReturnValue(0.0);
      expect(randomFloat(0, 1)).toBe(0);

      mockMathRandom.mockReturnValue(0.9999999999999999);
      expect(randomFloat(0, 1)).toBeCloseTo(1, 10); // Close to 1, but not exactly 1

      const min = 10;
      const max = 20;
      for (let i = 0; i < 100; i++) {
        const result = randomFloat(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThan(max);
      }
    });
  });

  describe('randomHexColor', () => {
    it('should return a valid hex color string', () => {
      mockMathRandom.mockReturnValue(0.5); // Predictable color
      expect(randomHexColor()).toBe('#7fffff');

      const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;
      for (let i = 0; i < 100; i++) {
        expect(randomHexColor()).toMatch(hexColorRegex);
      }
    });
  });

  describe('randomBoolean', () => {
    it('should return true when Math.random() is >= 0.5', () => {
      mockMathRandom.mockReturnValue(0.5);
      expect(randomBoolean()).toBe(true);

      mockMathRandom.mockReturnValue(0.99);
      expect(randomBoolean()).toBe(true);
    });

    it('should return false when Math.random() is < 0.5', () => {
      mockMathRandom.mockReturnValue(0.49);
      expect(randomBoolean()).toBe(false);

      mockMathRandom.mockReturnValue(0.01);
      expect(randomBoolean()).toBe(false);
    });
  });

  describe('randomString', () => {
    it('should generate a string of the specified length', () => {
      mockMathRandom.mockReturnValue(0.5);
      const str = randomString(10);
      expect(str.length).toBe(10);
    });

    it('should use the default character set if none is provided', () => {
      mockMathRandom.mockReturnValue(0.01); // Will pick first char
      const str = randomString(5);
      expect(str).toBe('AAAAA'); // Assuming default starts with A
    });

    it('should use the provided character set', () => {
      mockMathRandom.mockReturnValue(0.99); // Will pick last char
      const str = randomString(5, 'abc');
      expect(str).toBe('99999'); // Assuming '9' is the last char
    });

    it('should generate different strings with different seeds (if not mocked)', () => {
      mockMathRandom.mockRestore(); // Use actual random for this test
      const str1 = randomString(10);
      const str2 = randomString(10);
      expect(str1).not.toBe(str2);
    });
  });

  describe('randomDate', () => {
    test('should return a date within the specified range', () => {
      const start = new Date('2023-01-01');
      const end = new Date('2023-12-31');
      const randomDt = randomDate(start, end);
      expect(randomDt.getTime()).toBeGreaterThanOrEqual(start.getTime());
      expect(randomDt.getTime()).toBeLessThanOrEqual(end.getTime());
    });
  });

  describe('randomEnum', () => {
    const Colors = {
      RED: 'RED',
      GREEN: 'GREEN',
      BLUE: 'BLUE',
    };

    test('should return a random value from the enum', () => {
      const randomColor = randomEnum(Colors);
      expect(Object.values(Colors)).toContain(randomColor);
    });
  });
});
