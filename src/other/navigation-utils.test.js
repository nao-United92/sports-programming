
import {
  reloadPage,
  redirectTo,
  getHash,
  setHash,
  updateUrlQuery,
} from './navigation-utils';

describe('navigation-utils', () => {
  // Store original window.location and window.history
  const originalLocation = window.location;
  const originalHistory = window.history;

  let mockLocation;
  let mockHistory;

  beforeEach(() => {
    // Mock window.location
    mockLocation = {
      reload: jest.fn(),
      href: '',
      hash: '',
      assign: jest.fn(),
    };
    Object.defineProperty(window, 'location', {
      writable: true,
      value: mockLocation,
    });

    // Mock window.history
    mockHistory = {
      pushState: jest.fn(),
    };
    Object.defineProperty(window, 'history', {
      writable: true,
      value: mockHistory,
    });

    // Mock window.open
    jest.spyOn(window, 'open').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore original window.location and window.history
    Object.defineProperty(window, 'location', {
      writable: true,
      value: originalLocation,
    });
    Object.defineProperty(window, 'history', {
      writable: true,
      value: originalHistory,
    });
    jest.restoreAllMocks();
  });

  describe('reloadPage', () => {
    it('should call window.location.reload without forceGet', () => {
      reloadPage();
      expect(mockLocation.reload).toHaveBeenCalledWith(false);
    });

    it('should call window.location.reload with forceGet', () => {
      reloadPage(true);
      expect(mockLocation.reload).toHaveBeenCalledWith(true);
    });
  });

  describe('redirectTo', () => {
    it('should redirect to the specified URL in the same tab', () => {
      redirectTo('https://example.com');
      expect(mockLocation.href).toBe('https://example.com');
      expect(window.open).not.toHaveBeenCalled();
    });

    it('should redirect to the specified URL in a new tab', () => {
      redirectTo('https://example.com', true);
      expect(window.open).toHaveBeenCalledWith('https://example.com', '_blank');
      expect(mockLocation.href).toBe(''); // Should not change href for new tab
    });
  });

  describe('getHash', () => {
    it('should return the current hash', () => {
      mockLocation.hash = '#testHash';
      expect(getHash()).toBe('#testHash');
    });

    it('should return an empty string if no hash', () => {
      mockLocation.hash = '';
      expect(getHash()).toBe('');
    });
  });

  describe('setHash', () => {
    it('should set the hash with # if not present', () => {
      setHash('newHash');
      expect(mockLocation.hash).toBe('#newHash');
    });

    it('should set the hash if # is already present', () => {
      setHash('#anotherHash');
      expect(mockLocation.hash).toBe('#anotherHash');
    });

    it('should set an empty hash', () => {
      setHash('');
      expect(mockLocation.hash).toBe('#'); // Browser behavior for empty hash
    });
  });

  describe('updateUrlQuery', () => {
    // Mock window.location.href for URL parsing
    beforeEach(() => {
      Object.defineProperty(window.location, 'href', {
        writable: true,
        value: 'http://localhost/?param1=value1',
      });
    });

    it('should add a new query parameter', () => {
      updateUrlQuery({ param2: 'value2' });
      expect(mockHistory.pushState).toHaveBeenCalledWith(
        {},
        '',
        'http://localhost/?param1=value1&param2=value2'
      );
    });

    it('should update an existing query parameter', () => {
      updateUrlQuery({ param1: 'newValue' });
      expect(mockHistory.pushState).toHaveBeenCalledWith(
        {},
        '',
        'http://localhost/?param1=newValue'
      );
    });

    it('should handle multiple query parameters', () => {
      updateUrlQuery({ param1: 'updated', param3: 'new' });
      expect(mockHistory.pushState).toHaveBeenCalledWith(
        {},
        '',
        'http://localhost/?param1=updated&param3=new'
      );
    });

    it('should remove a query parameter if value is empty string', () => {
      updateUrlQuery({ param1: '' });
      expect(mockHistory.pushState).toHaveBeenCalledWith(
        {},
        '',
        'http://localhost/?param1='
      );
    });
  });
});
