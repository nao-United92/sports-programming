import { delegate } from './event-delegation-utils';

describe('delegate', () => {
  let parentElement;
  let handler;
  let consoleWarnSpy;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="parent">
        <button class="child-btn" id="btn1">Button 1</button>
        <div class="child-div">
          <span class="grandchild-span">Span</span>
        </div>
        <button class="child-btn" id="btn2">Button 2</button>
      </div>
      <button id="outsideBtn">Outside Button</button>
    `;
    parentElement = document.getElementById('parent');
    handler = jest.fn();
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    document.body.innerHTML = '';
    consoleWarnSpy.mockRestore();
  });

  test('should call handler when a matching child is clicked', () => {
    const delegatedHandler = delegate(parentElement, '.child-btn', 'click', handler);
    document.getElementById('btn1').click();
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(expect.any(Event));
    expect(handler).toHaveBeenCalledWith(expect.objectContaining({ target: document.getElementById('btn1') }));
    expect(handler.mock.contexts[0]).toBe(document.getElementById('btn1')); // context should be the matching element

    document.getElementById('btn2').click();
    expect(handler).toHaveBeenCalledTimes(2);
  });

  test('should not call handler when a non-matching child is clicked', () => {
    const delegatedHandler = delegate(parentElement, '.child-btn', 'click', handler);
    document.querySelector('.grandchild-span').click();
    expect(handler).not.toHaveBeenCalled();
  });

  test('should call handler when a grandchild matching the selector is clicked', () => {
    const delegatedHandler = delegate(parentElement, '.child-div', 'click', handler);
    document.querySelector('.grandchild-span').click();
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.contexts[0]).toBe(document.querySelector('.child-div')); // context should be the matching element
  });

  test('should not call handler when an element outside the parent is clicked', () => {
    const delegatedHandler = delegate(parentElement, '.child-btn', 'click', handler);
    document.getElementById('outsideBtn').click();
    expect(handler).not.toHaveBeenCalled();
  });

  test('should return the delegated handler function', () => {
    const delegatedHandler = delegate(parentElement, '.child-btn', 'click', handler);
    expect(typeof delegatedHandler).toBe('function');
  });

  test('should allow removing the delegated handler', () => {
    const delegatedHandler = delegate(parentElement, '.child-btn', 'click', handler);
    document.getElementById('btn1').click();
    expect(handler).toHaveBeenCalledTimes(1);

    parentElement.removeEventListener('click', delegatedHandler);
    document.getElementById('btn1').click();
    expect(handler).toHaveBeenCalledTimes(1); // Should not be called again
  });

  test('should warn and return null for invalid parentElement', () => {
    expect(delegate(null, '.selector', 'click', handler)).toBeNull();
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid parentElement provided to delegate.', null);
  });

  test('should warn and return null for invalid selector', () => {
    expect(delegate(parentElement, '', 'click', handler)).toBeNull();
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid selector provided to delegate.', '');
  });

  test('should warn and return null for invalid eventType', () => {
    expect(delegate(parentElement, '.selector', '', handler)).toBeNull();
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid eventType provided to delegate.', '');
  });

  test('should warn and return null for invalid handler', () => {
    expect(delegate(parentElement, '.selector', 'click', null)).toBeNull();
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid handler provided to delegate.', null);
  });
});
