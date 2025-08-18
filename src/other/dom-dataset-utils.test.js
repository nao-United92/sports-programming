import { setData, getData, removeData } from './dom-dataset-utils';

describe('DOM Dataset Utilities', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
  });

  describe('setData', () => {
    it('should set a data attribute', () => {
      setData(element, 'userId', '123');
      expect(element.getAttribute('data-user-id')).toBe('123');
    });
  });

  describe('getData', () => {
    it('should get a data attribute', () => {
      element.setAttribute('data-user-id', '123');
      expect(getData(element, 'userId')).toBe('123');
    });

    it('should return undefined if the attribute does not exist', () => {
      expect(getData(element, 'nonExistent')).toBeUndefined();
    });
  });

  describe('removeData', () => {
    it('should remove a data attribute', () => {
      element.setAttribute('data-user-id', '123');
      removeData(element, 'userId');
      expect(element.hasAttribute('data-user-id')).toBe(false);
    });

    it('should not throw an error if the attribute does not exist', () => {
      expect(() => removeData(element, 'nonExistent')).not.toThrow();
    });
  });
});
