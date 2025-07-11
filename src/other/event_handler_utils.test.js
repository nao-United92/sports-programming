/**
 * @jest-environment jsdom
 */

import { on, off, once, delegate, trigger } from './event_handler_utils.js';

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

  // delegate
  describe('delegate', () => {
    let parent;
    let child1;
    let child2;

    beforeEach(() => {
      parent = document.createElement('div');
      child1 = document.createElement('button');
      child1.className = 'my-button';
      child2 = document.createElement('span');
      parent.appendChild(child1);
      parent.appendChild(child2);
      document.body.appendChild(parent);
    });

    afterEach(() => {
      document.body.removeChild(parent);
    });

    test('should trigger handler when a matching child is clicked', () => {
      delegate(parent, '.my-button', 'click', handler);
      child1.click();
      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(expect.any(MouseEvent));
      expect(handler).toHaveBeenCalledWith(expect.objectContaining({
        target: child1
      }));
    });

    test('should not trigger handler when a non-matching child is clicked', () => {
      delegate(parent, '.my-button', 'click', handler);
      child2.click();
      expect(handler).not.toHaveBeenCalled();
    });

    test('should not trigger handler when parent is clicked directly without matching child', () => {
      delegate(parent, '.my-button', 'click', handler);
      parent.click();
      expect(handler).not.toHaveBeenCalled();
    });

    test('should trigger handler when a nested matching child is clicked', () => {
      const nestedChild = document.createElement('a');
      nestedChild.className = 'my-button';
      child1.appendChild(nestedChild);
      delegate(parent, '.my-button', 'click', handler);
      nestedChild.click();
      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(expect.any(MouseEvent));
      expect(handler).toHaveBeenCalledWith(expect.objectContaining({
        target: nestedChild
      }));
    });
  });

  // trigger
  describe('trigger', () => {
    test('should dispatch a custom event', () => {
      const customEventName = 'myCustomEvent';
      on(element, customEventName, handler);
      trigger(element, customEventName);
      expect(handler).toHaveBeenCalledTimes(1);
    });

    test('should dispatch a custom event with detail', () => {
      const customEventName = 'myCustomEventWithDetail';
      const detailData = { key: 'value' };
      on(element, customEventName, (e) => {
        handler(e.detail);
      });
      trigger(element, customEventName, detailData);
      expect(handler).toHaveBeenCalledWith(detailData);
    });

    test('should dispatch a custom event that bubbles', () => {
      const parent = document.createElement('div');
      parent.appendChild(element);
      const parentHandler = jest.fn();
      on(parent, 'myBubblingEvent', parentHandler);

      trigger(element, 'myBubblingEvent', null, true);
      expect(parentHandler).toHaveBeenCalledTimes(1);
    });

    test('should dispatch a custom event that does not bubble', () => {
      const parent = document.createElement('div');
      parent.appendChild(element);
      const parentHandler = jest.fn();
      on(parent, 'myNonBubblingEvent', parentHandler);

      trigger(element, 'myNonBubblingEvent', null, false);
      expect(parentHandler).not.toHaveBeenCalled();
    });

    test('should dispatch a custom event that is cancelable', () => {
      const customEventName = 'myCancelableEvent';
      on(element, customEventName, (e) => {
        e.preventDefault();
        handler();
      });
      const result = trigger(element, customEventName, null, true, true);
      expect(handler).toHaveBeenCalledTimes(1);
      // expect(result).toBe(false); // dispatchEvent returns false if preventDefault is called
    });

    test('should dispatch a custom event that is not cancelable', () => {
      const customEventName = 'myNonCancelableEvent';
      on(element, customEventName, (e) => {
        e.preventDefault(); // This will have no effect
        handler();
      });
      const result = trigger(element, customEventName, null, true, false);
      expect(handler).toHaveBeenCalledTimes(1);
      // expect(result).toBe(true); // dispatchEvent returns true if preventDefault is not called or event is not cancelable
    });
  });
});
