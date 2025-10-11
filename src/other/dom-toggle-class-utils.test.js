import { toggleClass } from './dom-toggle-class-utils.js';

describe('toggleClass', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
  });

  test('should add class if it does not exist', () => {
    toggleClass(element, 'test-class');
    expect(element.classList.contains('test-class')).toBe(true);
  });

  test('should remove class if it exists', () => {
    element.classList.add('test-class');
    toggleClass(element, 'test-class');
    expect(element.classList.contains('test-class')).toBe(false);
  });

  test('should not toggle class if element is null', () => {
    toggleClass(null, 'test-class');
    expect(element.classList.contains('test-class')).toBe(false);
  });

  test('should not toggle class if className is empty', () => {
    toggleClass(element, '');
    expect(element.classList.length).toBe(0);
  });
});
