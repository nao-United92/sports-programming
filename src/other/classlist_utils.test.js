/**
 * @jest-environment jsdom
 */

import {
  addClasses,
  removeClasses,
  toggleClass,
  replaceClass,
  hasClass,
  addTemporaryClass,
  addClassesToMultiple,
  removeClassesFromMultiple,
} from './classlist_utils.js';

describe('DOM classList utility functions', () => {
  let element;
  let elements;

  beforeEach(() => {
    element = document.createElement('div');
    elements = [document.createElement('div'), document.createElement('div')];
  });

  // addClasses
  describe('addClasses', () => {
    test('should add a single class', () => {
      addClasses(element, 'foo');
      expect(element.classList.contains('foo')).toBe(true);
    });

    test('should add multiple classes', () => {
      addClasses(element, 'foo', 'bar', 'baz');
      expect(element.classList.contains('foo')).toBe(true);
      expect(element.classList.contains('bar')).toBe(true);
      expect(element.classList.contains('baz')).toBe(true);
    });
  });

  // removeClasses
  describe('removeClasses', () => {
    beforeEach(() => {
      element.className = 'foo bar baz';
    });

    test('should remove a single class', () => {
      removeClasses(element, 'foo');
      expect(element.classList.contains('foo')).toBe(false);
    });

    test('should remove multiple classes', () => {
      removeClasses(element, 'foo', 'baz');
      expect(element.classList.contains('foo')).toBe(false);
      expect(element.classList.contains('bar')).toBe(true);
      expect(element.classList.contains('baz')).toBe(false);
    });
  });

  // toggleClass
  describe('toggleClass', () => {
    test('should add class if it does not exist', () => {
      toggleClass(element, 'foo');
      expect(element.classList.contains('foo')).toBe(true);
    });

    test('should remove class if it exists', () => {
      element.classList.add('foo');
      toggleClass(element, 'foo');
      expect(element.classList.contains('foo')).toBe(false);
    });

    test('should force add a class', () => {
      toggleClass(element, 'foo', true);
      expect(element.classList.contains('foo')).toBe(true);
      toggleClass(element, 'foo', true); // should still be there
      expect(element.classList.contains('foo')).toBe(true);
    });

    test('should force remove a class', () => {
      element.classList.add('foo');
      toggleClass(element, 'foo', false);
      expect(element.classList.contains('foo')).toBe(false);
      toggleClass(element, 'foo', false); // should still be not there
      expect(element.classList.contains('foo')).toBe(false);
    });
  });

  // replaceClass
  describe('replaceClass', () => {
    test('should replace an existing class with a new one', () => {
      element.classList.add('foo');
      replaceClass(element, 'foo', 'bar');
      expect(element.classList.contains('foo')).toBe(false);
      expect(element.classList.contains('bar')).toBe(true);
    });
  });

  // hasClass
  describe('hasClass', () => {
    test('should return true if the class exists', () => {
      element.classList.add('foo');
      expect(hasClass(element, 'foo')).toBe(true);
    });

    test('should return false if the class does not exist', () => {
      expect(hasClass(element, 'foo')).toBe(false);
    });
  });

  // addTemporaryClass
  describe('addTemporaryClass', () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    test('should add a class and then remove it after the specified duration', () => {
      addTemporaryClass(element, 'temp-class', 1000);
      expect(element.classList.contains('temp-class')).toBe(true);

      // Fast-forward time by 1000ms
      jest.advanceTimersByTime(1000);

      expect(element.classList.contains('temp-class')).toBe(false);
    });

     test('should not remove the class before the duration has passed', () => {
      addTemporaryClass(element, 'temp-class', 1000);
      expect(element.classList.contains('temp-class')).toBe(true);

      // Fast-forward time by 500ms
      jest.advanceTimersByTime(500);

      expect(element.classList.contains('temp-class')).toBe(true);
    });
  });

  // addClassesToMultiple
  describe('addClassesToMultiple', () => {
    test('should add classes to multiple elements', () => {
      addClassesToMultiple(elements, 'new-class-1', 'new-class-2');
      elements.forEach(el => {
        expect(el.classList.contains('new-class-1')).toBe(true);
        expect(el.classList.contains('new-class-2')).toBe(true);
      });
    });
  });

  // removeClassesFromMultiple
  describe('removeClassesFromMultiple', () => {
    beforeEach(() => {
      elements.forEach(el => el.classList.add('existing-class-1', 'existing-class-2'));
    });

    test('should remove classes from multiple elements', () => {
      removeClassesFromMultiple(elements, 'existing-class-1');
      elements.forEach(el => {
        expect(el.classList.contains('existing-class-1')).toBe(false);
        expect(el.classList.contains('existing-class-2')).toBe(true);
      });
    });
  });
});
