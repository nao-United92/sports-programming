/**
 * @jest-environment jsdom
 */

const { addClass, removeClass, toggleClass, show, hide } = require('./dom-manipulation');

describe('DOM Manipulation', () => {
  let element;

  beforeEach(() => {
    document.body.innerHTML = '<div id="test-element" class="initial-class" style="display: block;"></div>';
    element = document.getElementById('test-element');
  });

  describe('Class Manipulation', () => {
    test('addClass should add a new class', () => {
      addClass(element, 'new-class');
      expect(element.classList.contains('new-class')).toBe(true);
    });

    test('removeClass should remove an existing class', () => {
      removeClass(element, 'initial-class');
      expect(element.classList.contains('initial-class')).toBe(false);
    });

    test('toggleClass should add a class if it does not exist', () => {
      toggleClass(element, 'toggled-class');
      expect(element.classList.contains('toggled-class')).toBe(true);
    });

    test('toggleClass should remove a class if it exists', () => {
      toggleClass(element, 'initial-class');
      expect(element.classList.contains('initial-class')).toBe(false);
    });
  });

  describe('Display Manipulation', () => {
    test('hide should set display to "none"', () => {
      hide(element);
      expect(element.style.display).toBe('none');
    });

    test('show should reset the display style', () => {
      element.style.display = 'none'; // First hide it
      show(element);
      // When style is set to '', it is removed from inline styles.
      // The computed style will depend on stylesheets, but the inline style attribute will be empty.
      expect(element.style.display).toBe('');
    });
  });

  describe('Error Handling', () => {
    test('functions should not throw an error if element is null or undefined', () => {
        const nullEl = null;
        const undefinedEl = undefined;
        expect(() => addClass(nullEl, 'test')).not.toThrow();
        expect(() => removeClass(undefinedEl, 'test')).not.toThrow();
        expect(() => toggleClass(nullEl, 'test')).not.toThrow();
        expect(() => show(undefinedEl)).not.toThrow();
        expect(() => hide(nullEl)).not.toThrow();
    });
  });
});
