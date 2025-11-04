import { getDataAttribute, setDataAttribute } from './dom-data-utils.js';

describe('DOM Data Utilities', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  describe('getDataAttribute', () => {
    it('should return null if element is null or undefined', () => {
      expect(getDataAttribute(null, 'test')).toBeNull();
      expect(getDataAttribute(undefined, 'test')).toBeNull();
    });

    it('should return null if data attribute does not exist', () => {
      expect(getDataAttribute(element, 'nonExistent')).toBeNull();
    });

    it('should get the value of an existing data attribute', () => {
      element.setAttribute('data-test-id', '123');
      expect(getDataAttribute(element, 'testId')).toBe('123');
    });

    it('should handle camelCase conversion for data attributes', () => {
      element.setAttribute('data-user-name', 'JohnDoe');
      expect(getDataAttribute(element, 'userName')).toBe('JohnDoe');
    });
  });

  describe('setDataAttribute', () => {
    it('should not throw error if element is null or undefined', () => {
      expect(() => setDataAttribute(null, 'test', 'value')).not.toThrow();
      expect(() => setDataAttribute(undefined, 'test', 'value')).not.toThrow();
    });

    it('should set a new data attribute', () => {
      setDataAttribute(element, 'newAttr', 'newValue');
      expect(element.getAttribute('data-new-attr')).toBe('newValue');
    });

    it('should update an existing data attribute', () => {
      element.setAttribute('data-existing', 'oldValue');
      setDataAttribute(element, 'existing', 'updatedValue');
      expect(element.getAttribute('data-existing')).toBe('updatedValue');
    });

    it('should handle camelCase conversion for data attributes', () => {
      setDataAttribute(element, 'userId', '456');
      expect(element.getAttribute('data-user-id')).toBe('456');
    });
  });
});
