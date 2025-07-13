
import { on, off, once, isKeyPressed } from './event-advanced-utils';

describe('Event Advanced Utilities', () => {
  let element;
  let handler;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
    handler = jest.fn();
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  describe('on', () => {
    test('should attach a direct event listener', () => {
      on(element, 'click', handler);
      element.click();
      expect(handler).toHaveBeenCalledTimes(1);
    });

    test('should attach a delegated event listener', () => {
      const child = document.createElement('button');
      child.className = 'my-button';
      element.appendChild(child);

      on(element, 'click', '.my-button', handler);
      child.click();
      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(expect.any(MouseEvent));
    });

    test('should not trigger delegated event for non-matching child', () => {
      const child = document.createElement('span');
      child.className = 'other-element';
      element.appendChild(child);

      on(element, 'click', '.my-button', handler);
      child.click();
      expect(handler).not.toHaveBeenCalled();
    });

    test('should warn for invalid element', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      on(null, 'click', handler);
      expect(consoleWarnSpy).toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });

  describe('off', () => {
    test('should remove a direct event listener', () => {
      on(element, 'click', handler);
      element.click();
      expect(handler).toHaveBeenCalledTimes(1);

      off(element, 'click', handler);
      element.click();
      expect(handler).toHaveBeenCalledTimes(1); // Should not be called again
    });

    test('should remove a delegated event listener', () => {
      const child = document.createElement('button');
      child.className = 'my-button';
      element.appendChild(child);

      on(element, 'click', '.my-button', handler);
      child.click();
      expect(handler).toHaveBeenCalledTimes(1);

      off(element, 'click', handler);
      child.click();
      expect(handler).toHaveBeenCalledTimes(1); // Should not be called again
    });

    test('should warn for invalid element', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      off(null, 'click', handler);
      expect(consoleWarnSpy).toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });

  describe('once', () => {
    test('should trigger handler only once', () => {
      once(element, 'click', handler);
      element.click();
      element.click(); // Second click
      expect(handler).toHaveBeenCalledTimes(1);
    });

    test('should warn for invalid element', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      once(null, 'click', handler);
      expect(consoleWarnSpy).toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });

  describe('isKeyPressed', () => {
    test('should return true for the correct key', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      expect(isKeyPressed(event, 'Enter')).toBe(true);
      expect(isKeyPressed(event, 'enter')).toBe(true); // Case-insensitive
    });

    test('should return false for incorrect key', ()n => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' });
      expect(isKeyPressed(event, 'Enter')).toBe(false);
    });

    test('should return false for non-keyboard event', () => {
      const event = new MouseEvent('click');
      expect(isKeyPressed(event, 'Enter')).toBe(false);
    });
  });
});
