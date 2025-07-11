/**
 * @jest-environment jsdom
 */

import { on, off, once } from './event_handler_utils.js';

describe('DOM event handling utility functions', () => {
  let element;
  let handler;

  beforeEach(() => {
    element = document.createElement('div');
    handler = jest.fn();
  });

  // on
  describe('on', () => {
    test('should attach an event listener', () => {
      on(element, 'click', handler);
      element.dispatchEvent(new MouseEvent('click'));
      expect(handler).toHaveBeenCalledTimes(1);
    });
  });

  // off
  describe('off', () => {
    test('should remove an event listener', () => {
      on(element, 'click', handler);
      off(element, 'click', handler);
      element.dispatchEvent(new MouseEvent('click'));
      expect(handler).not.toHaveBeenCalled();
    });
  });

  // once
  describe('once', () => {
    test('should attach an event listener that fires only once', () => {
      once(element, 'click', handler);
      element.dispatchEvent(new MouseEvent('click'));
      element.dispatchEvent(new MouseEvent('click'));
      expect(handler).toHaveBeenCalledTimes(1);
    });

    test('should pass event object to the handler', () => {
      once(element, 'click', handler);
      const event = new MouseEvent('click');
      element.dispatchEvent(event);
      expect(handler).toHaveBeenCalledWith(event);
    });
  });
});
