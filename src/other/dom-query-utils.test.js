// src/other/dom-query-utils.test.js

const { querySelector } = require('./dom-query-utils');

describe('DOM Query Utils', () => {
  let mockElement;
  let mockDocument;

  beforeEach(() => {
    // Mock a simple DOM structure
    mockElement = {
      id: 'test-id',
      className: 'test-class',
      tagName: 'DIV',
      children: [],
      querySelector: jest.fn(),
    };

    mockDocument = {
      querySelector: jest.fn(),
    };

    // Set up default mock behavior
    mockDocument.querySelector.mockImplementation((selector) => {
      if (selector === '#test-id') return mockElement;
      if (selector === '.test-class') return mockElement;
      if (selector === 'div') return mockElement;
      return null;
    });

    mockElement.querySelector.mockImplementation((selector) => {
      if (selector === '.child-class') return { tagName: 'SPAN', className: 'child-class' };
      return null;
    });

    // Temporarily replace global document for testing
    Object.defineProperty(global, 'document', {
      value: mockDocument,
      writable: true,
    });
  });

  afterEach(() => {
    // Restore original document
    Object.defineProperty(global, 'document', {
      value: undefined, // Or original document if saved
      writable: true,
    });
  });

  test('should return the element for a valid ID selector', () => {
    expect(querySelector('#test-id')).toBe(mockElement);
    expect(mockDocument.querySelector).toHaveBeenCalledWith('#test-id');
  });

  test('should return the element for a valid class selector', () => {
    expect(querySelector('.test-class')).toBe(mockElement);
    expect(mockDocument.querySelector).toHaveBeenCalledWith('.test-class');
  });

  test('should return the element for a valid tag selector', () => {
    expect(querySelector('div')).toBe(mockElement);
    expect(mockDocument.querySelector).toHaveBeenCalledWith('div');
  });

  test('should return null if no element matches the selector', () => {
    expect(querySelector('#non-existent')).toBeNull();
    expect(mockDocument.querySelector).toHaveBeenCalledWith('#non-existent');
  });

  test('should return null for an empty selector string', () => {
    expect(querySelector('')).toBeNull();
    expect(mockDocument.querySelector).not.toHaveBeenCalledWith('');
  });

  test('should return null for non-string selector input', () => {
    expect(querySelector(null)).toBeNull();
    expect(querySelector(undefined)).toBeNull();
    expect(querySelector(123)).toBeNull();
    expect(mockDocument.querySelector).not.toHaveBeenCalled();
  });

  test('should search within a provided context element', () => {
    const contextElement = {
      querySelector: jest.fn().mockReturnValue({ tagName: 'P' }),
    };
    expect(querySelector('.child-class', contextElement)).toEqual({ tagName: 'P' });
    expect(contextElement.querySelector).toHaveBeenCalledWith('.child-class');
    expect(mockDocument.querySelector).not.toHaveBeenCalled(); // Should not call document.querySelector
  });

  test('should return null if context is invalid', () => {
    expect(querySelector('.selector', null)).toBeNull();
    expect(querySelector('.selector', 123)).toBeNull();
    expect(mockDocument.querySelector).not.toHaveBeenCalled();
  });

  test('should return null if context.querySelector is not a function', () => {
    const invalidContext = { querySelector: 'not a function' };
    expect(querySelector('.selector', invalidContext)).toBeNull();
    expect(mockDocument.querySelector).not.toHaveBeenCalled();
  });

  test('should handle errors during querySelector call', () => {
    mockDocument.querySelector.mockImplementation(() => {
      throw new Error('Invalid selector');
    });
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(querySelector('invalid[selector]')).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    consoleErrorSpy.mockRestore();
  });
});