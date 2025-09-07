import { getURLParam, setURLParam, removeURLParam } from './url-params-utils.js';

describe('URL Parameter Utilities', () => {
  let originalLocation;

  beforeEach(() => {
    originalLocation = window.location;
    Object.defineProperty(window, 'location', {
      writable: true,
      value: new URL('http://localhost/?param1=value1&param2=value2'),
    });
  });

  afterEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: originalLocation,
    });
  });

  describe('getURLParam', () => {
    it('should get the value of an existing parameter', () => {
      expect(getURLParam('param1')).toBe('value1');
    });

    it('should return null for a non-existent parameter', () => {
      expect(getURLParam('nonExistent')).toBeNull();
    });

    it('should get parameter from a specified URL', () => {
      const url = 'http://test.com/?key=val';
      expect(getURLParam('key', url)).toBe('val');
    });
  });

  describe('setURLParam', () => {
    it('should set a new parameter', () => {
      const newUrl = setURLParam('newParam', 'newValue');
      expect(newUrl).toBe('http://localhost/?param1=value1&param2=value2&newParam=newValue');
    });

    it('should update an existing parameter', () => {
      const newUrl = setURLParam('param1', 'updatedValue');
      expect(newUrl).toBe('http://localhost/?param1=updatedValue&param2=value2');
    });

    it('should set parameter in a specified URL', () => {
      const url = 'http://test.com/?key=val';
      const newUrl = setURLParam('newKey', 'newVal', url);
      expect(newUrl).toBe('http://test.com/?key=val&newKey=newVal');
    });
  });

  describe('removeURLParam', () => {
    it('should remove an existing parameter', () => {
      const newUrl = removeURLParam('param1');
      expect(newUrl).toBe('http://localhost/?param2=value2');
    });

    it('should not change URL if parameter does not exist', () => {
      const newUrl = removeURLParam('nonExistent');
      expect(newUrl).toBe('http://localhost/?param1=value1&param2=value2');
    });

    it('should remove parameter from a specified URL', () => {
      const url = 'http://test.com/?key=val&key2=val2';
      const newUrl = removeURLParam('key', url);
      expect(newUrl).toBe('http://test.com/?key2=val2');
    });
  });
});
