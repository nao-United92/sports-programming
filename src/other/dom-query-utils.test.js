import { querySelector, querySelectorAll } from './dom-query-utils.js';

describe('DOM Query Utilities', () => {
  let mockDocument;
  let mockElement;

  beforeEach(() => {
    mockElement = {
      querySelector: jest.fn(),
      querySelectorAll: jest.fn(),
    };

    mockDocument = {
      querySelector: jest.fn(),
      querySelectorAll: jest.fn(),
    };

    Object.defineProperty(global, 'document', {
      value: mockDocument,
      writable: true,
    });
  });

  afterEach(() => {
    Object.defineProperty(global, 'document', {
      value: undefined,
      writable: true,
    });
  });

  describe('querySelector', () => {
    it('should call document.querySelector by default', () => {
      querySelector('.test');
      expect(mockDocument.querySelector).toHaveBeenCalledWith('.test');
    });

    it('should call parent.querySelector if parent is provided', () => {
      querySelector('.test', mockElement);
      expect(mockElement.querySelector).toHaveBeenCalledWith('.test');
      expect(mockDocument.querySelector).not.toHaveBeenCalled();
    });

    it('should return the result of querySelector', () => {
      const expectedElement = { id: 'myElement' };
      mockDocument.querySelector.mockReturnValue(expectedElement);
      expect(querySelector('#myElement')).toBe(expectedElement);
    });
  });

  describe('querySelectorAll', () => {
    it('should call document.querySelectorAll by default', () => {
      querySelectorAll('.test');
      expect(mockDocument.querySelectorAll).toHaveBeenCalledWith('.test');
    });

    it('should call parent.querySelectorAll if parent is provided', () => {
      querySelectorAll('.test', mockElement);
      expect(mockElement.querySelectorAll).toHaveBeenCalledWith('.test');
      expect(mockDocument.querySelectorAll).not.toHaveBeenCalled();
    });

    it('should return the result of querySelectorAll', () => {
      const expectedElements = [{ id: 'el1' }, { id: 'el2' }];
      mockDocument.querySelectorAll.mockReturnValue(expectedElements);
      expect(querySelectorAll('.myClass')).toBe(expectedElements);
    });
  });
});
