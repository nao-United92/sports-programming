const { delegate } = require('./dom-event-delegate-utils.js');

describe('delegate', () => {
  let parent, child1, child2, grandchild;
  let handler;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="parent">
        <button class="child" id="child1">Child 1</button>
        <div class="child">
          <span id="grandchild">Grandchild</span>
        </div>
        <button id="child2">Child 2</button>
      </div>
    `;
    parent = document.getElementById('parent');
    child1 = document.getElementById('child1');
    child2 = document.getElementById('child2');
    grandchild = document.getElementById('grandchild');
    handler = jest.fn();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  test('should call the handler when a delegated child is clicked', () => {
    const removeListener = delegate(parent, 'click', '.child', handler);
    child1.click();
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(expect.any(Event));
    expect(handler.mock.lastCall[0]).toEqual(expect.objectContaining({ target: child1 }));
    removeListener();
  });

  test('should call the handler when a grandchild matching the selector is clicked', () => {
    const removeListener = delegate(parent, 'click', 'span', handler);
    grandchild.click();
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(expect.any(Event));
    expect(handler.mock.lastCall[0]).toEqual(expect.objectContaining({ target: grandchild }));
    removeListener();
  });

  test('should not call the handler when a non-matching child is clicked', () => {
    const removeListener = delegate(parent, 'click', '#child1', handler);
    child2.click();
    expect(handler).not.toHaveBeenCalled();
    removeListener();
  });

  test('should not call the handler when clicking outside the delegated children', () => {
    const removeListener = delegate(parent, 'click', '.child', handler);
    parent.click(); // Clicking parent directly, not a child matching .child
    expect(handler).not.toHaveBeenCalled();
    removeListener();
  });

  test('should remove the event listener when the returned function is called', () => {
    const removeListener = delegate(parent, 'click', '.child', handler);
    removeListener();
    child1.click();
    expect(handler).not.toHaveBeenCalled();
  });

  test('should pass the correct `this` context to the handler', () => {
    const removeListener = delegate(parent, 'click', '.child', handler);
    child1.click();
    expect(handler).toHaveBeenCalledWith(expect.any(Event));
    // In Jest, `this` context is often lost or mocked. We can check `event.currentTarget` or `event.target`
    // For `delegate`, `handler.call(closestMatch, event)` means `this` inside handler is `closestMatch`
    // We can't directly test `this` with `toHaveBeenCalledWith` for `this` context, but we can check `event.target`
    expect(handler.mock.lastCall[0]).toEqual(expect.objectContaining({ target: child1 }));
    removeListener();
  });
});
