import { hasClass } from './dom-has-class-utils.js';

describe('hasClass', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    element.classList.add('test-class');
  });

  test('should return true if element has the class', () => {
    expect(hasClass(element, 'test-class')).toBe(true);
  });

  test('should return false if element does not have the class', () => {
    expect(hasClass(element, 'other-class')).toBe(false);
  });

  test('should return false if element is null', () => {
    expect(hasClass(null, 'test-class')).toBe(false);
  });

  test('should return false if className is empty', () => {
    expect(hasClass(element, '')).toBe(false);
  });
});
