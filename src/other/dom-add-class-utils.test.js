import { addClass } from './dom-add-class-utils.js';

describe('addClass', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
  });

  test('should add a single class to the element', () => {
    addClass(element, 'test-class');
    expect(element.classList.contains('test-class')).toBe(true);
  });

  test('should not add class if element is null', () => {
    addClass(null, 'test-class');
    expect(element.classList.contains('test-class')).toBe(false);
  });

  test('should not add class if className is empty', () => {
    addClass(element, '');
    expect(element.classList.length).toBe(0);
  });
});
