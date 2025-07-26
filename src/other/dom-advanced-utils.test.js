import { insertAfter, prependChild, wrapElement, unwrapElement, isElementInViewport } from './dom-advanced-utils';

describe('insertAfter', () => {
  let parentDiv;
  let refNode;

  beforeEach(() => {
    parentDiv = document.createElement('div');
    refNode = document.createElement('span');
    refNode.id = 'refNode';
    parentDiv.appendChild(refNode);
    document.body.appendChild(parentDiv);
  });

  afterEach(() => {
    document.body.removeChild(parentDiv);
  });

  test('should insert a new node after the reference node', () => {
    const newNode = document.createElement('p');
    newNode.id = 'newNode';
    insertAfter(newNode, refNode);
    expect(parentDiv.children[0].id).toBe('refNode');
    expect(parentDiv.children[1].id).toBe('newNode');
  });

  test('should handle inserting after the last child', () => {
    const newNode = document.createElement('p');
    newNode.id = 'newNode';
    insertAfter(newNode, refNode);
    expect(parentDiv.lastChild.id).toBe('newNode');
  });

  test('should not insert if newNode is null', () => {
    const initialChildrenCount = parentDiv.children.length;
    insertAfter(null, refNode);
    expect(parentDiv.children.length).toBe(initialChildrenCount);
  });
});

describe('prependChild', () => {
  let parentDiv;

  beforeEach(() => {
    parentDiv = document.createElement('div');
    parentDiv.innerHTML = '<span>Existing Child</span>';
    document.body.appendChild(parentDiv);
  });

  afterEach(() => {
    document.body.removeChild(parentDiv);
  });

  test('should prepend a new child to the parent', () => {
    const newChild = document.createElement('p');
    newChild.textContent = 'New Child';
    prependChild(parentDiv, newChild);
    expect(parentDiv.firstChild).toBe(newChild);
  });

  test('should handle empty parent', () => {
    const emptyDiv = document.createElement('div');
    const newChild = document.createElement('p');
    prependChild(emptyDiv, newChild);
    expect(emptyDiv.firstChild).toBe(newChild);
  });

  test('should not prepend if parent is null', () => {
    const newChild = document.createElement('p');
    prependChild(null, newChild);
    expect(newChild.parentNode).toBeNull();
  });
});

describe('wrapElement', () => {
  let parentDiv;
  let elementToWrap;

  beforeEach(() => {
    parentDiv = document.createElement('div');
    elementToWrap = document.createElement('span');
    elementToWrap.id = 'elementToWrap';
    parentDiv.appendChild(elementToWrap);
    document.body.appendChild(parentDiv);
  });

  afterEach(() => {
    document.body.removeChild(parentDiv);
  });

  test('should wrap an element with a wrapper', () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    wrapElement(elementToWrap, wrapper);

    expect(parentDiv.firstChild).toBe(wrapper);
    expect(wrapper.firstChild).toBe(elementToWrap);
  });

  test('should not wrap if element is null', () => {
    const wrapper = document.createElement('div');
    const initialChildrenCount = parentDiv.children.length;
    wrapElement(null, wrapper);
    expect(parentDiv.children.length).toBe(initialChildrenCount);
    expect(wrapper.children.length).toBe(0);
  });
});

describe('unwrapElement', () => {
  let parentDiv;
  let wrapperElement;
  let childElement;

  beforeEach(() => {
    parentDiv = document.createElement('div');
    wrapperElement = document.createElement('div');
    wrapperElement.id = 'wrapper';
    childElement = document.createElement('span');
    childElement.id = 'child';

    wrapperElement.appendChild(childElement);
    parentDiv.appendChild(wrapperElement);
    document.body.appendChild(parentDiv);
  });

  afterEach(() => {
    document.body.removeChild(parentDiv);
  });

  test('should unwrap an element and move its children to parent', () => {
    unwrapElement(wrapperElement);
    expect(parentDiv.contains(childElement)).toBe(true);
    expect(parentDiv.contains(wrapperElement)).toBe(false);
    expect(parentDiv.firstChild).toBe(childElement);
  });

  test('should handle unwrapping an element with no children', () => {
    const emptyWrapper = document.createElement('div');
    parentDiv.appendChild(emptyWrapper);
    unwrapElement(emptyWrapper);
    expect(parentDiv.contains(emptyWrapper)).toBe(false);
  });

  test('should not unwrap if element is null', () => {
    const initialChildrenCount = parentDiv.children.length;
    unwrapElement(null);
    expect(parentDiv.children.length).toBe(initialChildrenCount);
  });
});

describe('isElementInViewport', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
    // Mock getBoundingClientRect for the element
    Object.defineProperty(element, 'getBoundingClientRect', {
      value: () => ({
        top: 100,
        left: 100,
        bottom: 200,
        right: 200,
        width: 100,
        height: 100,
        x: 100,
        y: 100,
      }),
      writable: true,
    });
    // Mock viewport dimensions
    Object.defineProperty(window, 'innerHeight', { value: 500, writable: true });
    Object.defineProperty(window, 'innerWidth', { value: 500, writable: true });
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test('should return true if element is fully in viewport', () => {
    expect(isElementInViewport(element)).toBe(true);
  });

  test('should return false if element is partially out of viewport (top)', () => {
    Object.defineProperty(element, 'getBoundingClientRect', {
      value: () => ({ top: -50, left: 100, bottom: 50, right: 200, width: 100, height: 100, x: -50, y: 100 }),
    });
    expect(isElementInViewport(element)).toBe(false);
  });

  test('should return false if element is partially out of viewport (bottom)', () => {
    Object.defineProperty(element, 'getBoundingClientRect', {
      value: () => ({ top: 450, left: 100, bottom: 550, right: 200, width: 100, height: 100, x: 450, y: 100 }),
    });
    expect(isElementInViewport(element)).toBe(false);
  });

  test('should return false if element is partially out of viewport (left)', () => {
    Object.defineProperty(element, 'getBoundingClientRect', {
      value: () => ({ top: 100, left: -50, bottom: 200, right: 50, width: 100, height: 100, x: 100, y: -50 }),
    });
    expect(isElementInViewport(element)).toBe(false);
  });

  test('should return false if element is partially out of viewport (right)', () => {
    Object.defineProperty(element, 'getBoundingClientRect', {
      value: () => ({ top: 100, left: 450, bottom: 200, right: 550, width: 100, height: 100, x: 100, y: 450 }),
    });
    expect(isElementInViewport(element)).toBe(false);
  });

  test('should return false for null element', () => {
    expect(isElementInViewport(null)).toBe(false);
  });
});