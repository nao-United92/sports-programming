import {
  on,
  off,
  addClass,
  removeClass,
  toggleClass,
  hasClass,
  once,
  setAttribute
} from './dom-class-event-utils';

describe('dom-class-event-utils', () => {
  let element;
  let childElement;
  let grandChildElement;

  beforeEach(() => {
    // Set up a basic DOM structure for testing
    document.body.innerHTML = `
      <div id="parent" class="parent-class">
        <button id="child" class="child-class">Click Me</button>
        <span id="grandchild">Grandchild</span>
      </div>
    `;
    element = document.getElementById('parent');
    childElement = document.getElementById('child');
    grandChildElement = document.getElementById('grandchild');
  });

  afterEach(() => {
    document.body.innerHTML = ''; // Clean up DOM
  });

  describe('addClass', () => {
    it('should add a single class to an element', () => {
      addClass(element, 'new-class');
      expect(element.classList.contains('new-class')).toBe(true);
      expect(element.className).toBe('parent-class new-class');
    });

    it('should not add a class if element is null', () => {
      const initialClassList = element.className;
      addClass(null, 'new-class');
      expect(element.className).toBe(initialClassList);
    });
  });

  describe('removeClass', () => {
    it('should remove a single class from an element', () => {
      removeClass(element, 'parent-class');
      expect(element.classList.contains('parent-class')).toBe(false);
      expect(element.className).toBe('');
    });

    it('should not remove a class if element is null', () => {
      const initialClassList = element.className;
      removeClass(null, 'parent-class');
      expect(element.className).toBe(initialClassList);
    });
  });

  describe('toggleClass', () => {
    it('should add a class if it does not exist', () => {
      toggleClass(element, 'toggle-class');
      expect(element.classList.contains('toggle-class')).toBe(true);
    });

    it('should remove a class if it exists', () => {
      element.classList.add('toggle-class');
      toggleClass(element, 'toggle-class');
      expect(element.classList.contains('toggle-class')).toBe(false);
    });

    it('should return true if class is added', () => {
      expect(toggleClass(element, 'toggle-class')).toBe(true);
    });

    it('should return false if class is removed', () => {
      element.classList.add('toggle-class');
      expect(toggleClass(element, 'toggle-class')).toBe(false);
    });
  });

  describe('hasClass', () => {
    it('should return true if element has the class', () => {
      expect(hasClass(element, 'parent-class')).toBe(true);
    });

    it('should return false if element does not have the class', () => {
      expect(hasClass(element, 'non-existent-class')).toBe(false);
    });

    it('should return false if element is null', () => {
      expect(hasClass(null, 'parent-class')).toBe(false);
    });
  });

  describe('on and off', () => {
    it('should attach and detach a direct event listener', () => {
      const handler = jest.fn();
      on(childElement, 'click', handler);
      childElement.click();
      expect(handler).toHaveBeenCalledTimes(1);

      off(childElement, 'click', handler);
      childElement.click();
      expect(handler).toHaveBeenCalledTimes(1); // Should not be called again
    });

    it('should attach and detach a delegated event listener', () => {
      const handler = jest.fn();
      on(element, 'click', 'button', handler);
      childElement.click(); // Click the child button
      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(expect.any(MouseEvent));
      expect(handler.mock.contexts[0]).toBe(childElement); // Context should be the delegated element

      // Clicking grandchild should not trigger the handler
      grandChildElement.click();
      expect(handler).toHaveBeenCalledTimes(1);

      off(element, 'click', handler);
      childElement.click();
      expect(handler).toHaveBeenCalledTimes(1); // Should not be called again
    });

    it('should handle multiple delegated handlers on the same element', () => {
      const handler1 = jest.fn();
      const handler2 = jest.fn();

      on(element, 'click', 'button', handler1);
      on(element, 'click', '#grandchild', handler2);

      childElement.click();
      expect(handler1).toHaveBeenCalledTimes(1);
      expect(handler2).not.toHaveBeenCalled();

      grandChildElement.click();
      expect(handler1).toHaveBeenCalledTimes(1);
      expect(handler2).toHaveBeenCalledTimes(1);

      off(element, 'click', handler1);
      childElement.click();
      expect(handler1).toHaveBeenCalledTimes(1); // Not called again
      expect(handler2).toHaveBeenCalledTimes(1);

      off(element, 'click', handler2);
      grandChildElement.click();
      expect(handler1).toHaveBeenCalledTimes(1);
      expect(handler2).toHaveBeenCalledTimes(1); // Not called again
    });

    it('should not throw error if element is null for on', () => {
      expect(() => on(null, 'click', jest.fn())).not.toThrow();
    });

    it('should not throw error if element is null for off', () => {
      expect(() => off(null, 'click', jest.fn())).not.toThrow();
    });
  });

  describe('once', () => {
    let element;
    let handler;

    beforeEach(() => {
      element = document.createElement('button');
      document.body.appendChild(element);
      handler = jest.fn();
    });

    afterEach(() => {
      document.body.removeChild(element);
    });

    test('should execute the handler only once', () => {
      once(element, 'click', handler);
      element.click();
      element.click();
      expect(handler).toHaveBeenCalledTimes(1);
    });

    test('should not throw error if element is null', () => {
      expect(() => once(null, 'click', handler)).not.toThrow();
    });
  });

  describe('setAttribute', () => {
    test('should set an attribute on an element', () => {
      setAttribute(element, 'data-test', 'value');
      expect(element.getAttribute('data-test')).toBe('value');
    });

    test('should update an existing attribute', () => {
      element.setAttribute('id', 'old-id');
      setAttribute(element, 'id', 'new-id');
      expect(element.id).toBe('new-id');
    });

    test('should not throw error if element is null', () => {
      expect(() => setAttribute(null, 'data-test', 'value')).not.toThrow();
    });

    test('should not throw error if attributeName is null or undefined', () => {
      expect(() => setAttribute(element, null, 'value')).not.toThrow();
      expect(() => setAttribute(element, undefined, 'value')).not.toThrow();
    });
  });
});