import { delegate } from './event-delegation-utils.js';

describe('Event Delegation Utilities', () => {
  let parentElement;
  let childElement;
  let grandChildElement;
  let handler;

  beforeEach(() => {
    parentElement = document.createElement('div');
    parentElement.id = 'parent';
    childElement = document.createElement('button');
    childElement.className = 'child';
    childElement.textContent = 'Child Button';
    grandChildElement = document.createElement('span');
    grandChildElement.className = 'grandchild';
    grandChildElement.textContent = 'Grandchild Span';

    childElement.appendChild(grandChildElement);
    parentElement.appendChild(childElement);
    document.body.appendChild(parentElement);

    handler = jest.fn();
  });

  afterEach(() => {
    document.body.removeChild(parentElement);
  });

  it('should call the handler when a matching child element is clicked', () => {
    delegate(parentElement, '.child', 'click', handler);
    childElement.click();
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(expect.any(MouseEvent));
    expect(handler.mock.contexts[0]).toBe(childElement);
  });

  it('should call the handler when a grandchild element matching the selector is clicked', () => {
    delegate(parentElement, '.child', 'click', handler);
    grandChildElement.click();
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(expect.any(MouseEvent));
    expect(handler.mock.contexts[0]).toBe(childElement);
  });

  it('should not call the handler when a non-matching element is clicked', () => {
    const nonMatchingElement = document.createElement('div');
    parentElement.appendChild(nonMatchingElement);

    delegate(parentElement, '.child', 'click', handler);
    nonMatchingElement.click();
    expect(handler).not.toHaveBeenCalled();
  });

  it('should not call the handler if the event target is outside the delegated parent', () => {
    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);

    delegate(parentElement, '.child', 'click', handler);
    outsideElement.click();
    expect(handler).not.toHaveBeenCalled();
    document.body.removeChild(outsideElement);
  });

  it('should bind the handler to the matching element (this context)', () => {
    delegate(parentElement, '.child', 'click', handler);
    childElement.click();
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.contexts[0]).toBe(childElement);
  });

  it('should handle multiple event types', () => {
    delegate(parentElement, '.child', 'click', handler);
    delegate(parentElement, '.child', 'mouseover', handler);

    childElement.click();
    childElement.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));

    expect(handler).toHaveBeenCalledTimes(2);
  });
});