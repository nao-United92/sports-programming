import { removeClass } from './dom-remove-class-utils.js';

describe('removeClass', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    element.classList.add('test-class');
  });

  test('should remove a single class from the element', () => {
    removeClass(element, 'test-class');
    expect(element.classList.contains('test-class')).toBe(false);
  });

  test('should not remove class if element is null', () => {
    removeClass(null, 'test-class');
    expect(element.classList.contains('test-class')).toBe(true);
  });

  test('should not remove class if className is empty', () => {
    removeClass(element, '');
    expect(element.classList.contains('test-class')).toBe(true);
  });
});
