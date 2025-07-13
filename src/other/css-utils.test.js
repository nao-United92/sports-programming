
import { hasClass, addClass, removeClass, toggleClass, getStyle, setStyle } from './css-utils';

describe('CSS Utilities', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    element.id = 'testElement';
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  describe('hasClass', () => {
    test('should return true if element has the class', () => {
      element.classList.add('test-class');
      expect(hasClass(element, 'test-class')).toBe(true);
    });

    test('should return false if element does not have the class', () => {
      expect(hasClass(element, 'non-existent-class')).toBe(false);
    });

    test('should warn for invalid element', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      expect(hasClass(null, 'test-class')).toBe(false);
      expect(consoleWarnSpy).toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });

  describe('addClass', () => {
    test('should add a class to the element', () => {
      addClass(element, 'new-class');
      expect(element.classList.contains('new-class')).toBe(true);
    });

    test('should not add duplicate class', () => {
      element.classList.add('existing-class');
      addClass(element, 'existing-class');
      expect(element.classList.contains('existing-class')).toBe(true);
      expect(element.classList.length).toBe(1);
    });

    test('should warn for invalid element', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      addClass(null, 'new-class');
      expect(consoleWarnSpy).toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });

  describe('removeClass', () => {
    test('should remove a class from the element', () => {
      element.classList.add('remove-me');
      removeClass(element, 'remove-me');
      expect(element.classList.contains('remove-me')).toBe(false);
    });

    test('should not throw error if class does not exist', () => {
      expect(() => removeClass(element, 'non-existent')).not.toThrow();
    });

    test('should warn for invalid element', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      removeClass(null, 'remove-me');
      expect(consoleWarnSpy).toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });

  describe('toggleClass', () => {
    test('should add class if not present', () => {
      toggleClass(element, 'toggle-class');
      expect(element.classList.contains('toggle-class')).toBe(true);
    });

    test('should remove class if present', () => {
      element.classList.add('toggle-class');
      toggleClass(element, 'toggle-class');
      expect(element.classList.contains('toggle-class')).toBe(false);
    });

    test('should warn for invalid element', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      toggleClass(null, 'toggle-class');
      expect(consoleWarnSpy).toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });

  describe('getStyle', () => {
    test('should get computed style property', () => {
      element.style.width = '100px';
      expect(getStyle(element, 'width')).toBe('100px');
    });

    test('should return empty string for invalid element', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      expect(getStyle(null, 'width')).toBe('');
      expect(consoleWarnSpy).toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });

  describe('setStyle', () => {
    test('should set style property', () => {
      setStyle(element, 'color', 'red');
      expect(element.style.color).toBe('red');
    });

    test('should warn for invalid element', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      setStyle(null, 'color', 'blue');
      expect(consoleWarnSpy).toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });
});
