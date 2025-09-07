import { createElement, appendChildren } from './dom-manipulation-utils.js';

describe('DOM Manipulation Utilities', () => {
  let mockDocument;

  beforeEach(() => {
    // Mock document object for DOM manipulation
    mockDocument = {
      createElement: jest.fn((tagName) => ({
        tagName,
        attributes: {},
        children: [],
        setAttribute: jest.fn((key, value) => {
          mockDocument.createElement.mock.results[0].value.attributes[key] = value;
        }),
        appendChild: jest.fn((child) => {
          mockDocument.createElement.mock.results[0].value.children.push(child);
        }),
      })),
      createTextNode: jest.fn((text) => ({ nodeType: 3, textContent: text })),
    };

    // Replace global document with mock for testing
    Object.defineProperty(global, 'document', {
      value: mockDocument,
      writable: true,
    });
  });

  afterEach(() => {
    // Restore original document
    Object.defineProperty(global, 'document', {
      value: undefined,
      writable: true,
    });
  });

  describe('createElement', () => {
    it('should create an element with the given tag name', () => {
      const element = createElement('div');
      expect(mockDocument.createElement).toHaveBeenCalledWith('div');
      expect(element.tagName).toBe('div');
    });

    it('should set attributes on the element', () => {
      const element = createElement('div', { id: 'myId', class: 'myClass' });
      expect(element.attributes).toEqual({ id: 'myId', class: 'myClass' });
    });

    it('should append string children', () => {
      const element = createElement('div', {}, ['Hello', 'World']);
      expect(mockDocument.createTextNode).toHaveBeenCalledWith('Hello');
      expect(mockDocument.createTextNode).toHaveBeenCalledWith('World');
      expect(element.children.length).toBe(2);
      expect(element.children[0].textContent).toBe('Hello');
    });

    it('should append HTMLElement children', () => {
      const childElement = document.createElement('span');
      const element = createElement('div', {}, [childElement]);
      expect(element.children.length).toBe(1);
      expect(element.children[0].tagName).toBe('span');
    });
  });

  describe('appendChildren', () => {
    let parentElement;

    beforeEach(() => {
      parentElement = {
        appendChild: jest.fn(),
      };
    });

    it('should append string children to the parent', () => {
      appendChildren(parentElement, ['Hello', 'World']);
      expect(mockDocument.createTextNode).toHaveBeenCalledWith('Hello');
      expect(mockDocument.createTextNode).toHaveBeenCalledWith('World');
      expect(parentElement.appendChild).toHaveBeenCalledTimes(2);
    });

    it('should append HTMLElement children to the parent', () => {
      const childElement1 = document.createElement('span');
      const childElement2 = document.createElement('p');
      appendChildren(parentElement, [childElement1, childElement2]);
      expect(parentElement.appendChild).toHaveBeenCalledWith(childElement1);
      expect(parentElement.appendChild).toHaveBeenCalledWith(childElement2);
      expect(parentElement.appendChild).toHaveBeenCalledTimes(2);
    });
  });
});