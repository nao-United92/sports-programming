
import { insertAfter, prependChild, wrapElement, unwrapElement } from './dom-advanced-utils';

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
