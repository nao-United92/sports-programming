import { on, off, trigger, once, delegate } from './event-utils';

describe('Event Utilities', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
  });

  describe('on', () => {
    it('should attach an event listener', () => {
      const handler = jest.fn();
      on(element, 'click', handler);
      element.click();
      expect(handler).toHaveBeenCalledTimes(1);
    });
  });

  describe('off', () => {
    it('should remove an event listener', () => {
      const handler = jest.fn();
      on(element, 'click', handler);
      off(element, 'click', handler);
      element.click();
      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe('trigger', () => {
    it('should trigger a custom event', () => {
      const handler = jest.fn();
      on(element, 'my-event', handler);
      trigger(element, 'my-event', { a: 1 });
      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler.mock.calls[0][0].detail).toEqual({ a: 1 });
    });
  });
});

describe('once', () => {
  it('should trigger the handler only once', () => {
    const handler = jest.fn();
    once(element, 'click', handler);
    element.click();
    element.click(); // Second click should not trigger
    expect(handler).toHaveBeenCalledTimes(1);
  });
});

describe('delegate', () => {
  let parentElement;
  let childElement;
  let grandChildElement;

  beforeEach(() => {
    parentElement = document.createElement('div');
    parentElement.id = 'parent';
    childElement = document.createElement('button');
    childElement.className = 'my-button';
    childElement.id = 'child';
    grandChildElement = document.createElement('span');
    grandChildElement.id = 'grandchild';

    childElement.appendChild(grandChildElement);
    parentElement.appendChild(childElement);
    document.body.appendChild(parentElement);
  });

  afterEach(() => {
    document.body.removeChild(parentElement);
  });

  it('should trigger the handler when a delegated child is clicked', () => {
    const handler = jest.fn();
    delegate(parentElement, '.my-button', 'click', handler);
    childElement.click();
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(expect.any(MouseEvent));
    expect(handler.mock.contexts[0]).toBe(childElement); // 'this' context should be the delegated element
  });

  it('should not trigger the handler when a non-delegated child is clicked', () => {
    const handler = jest.fn();
    delegate(parentElement, '.other-button', 'click', handler);
    childElement.click();
    expect(handler).not.toHaveBeenCalled();
  });

  it('should trigger the handler when a grandchild of a delegated child is clicked', () => {
    const handler = jest.fn();
    delegate(parentElement, '.my-button', 'click', handler);
    grandChildElement.click(); // Click on grandchild, but handler should be called for .my-button
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.contexts[0]).toBe(childElement);
  });
});
