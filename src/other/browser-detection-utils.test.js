
import { isMobile, isTablet, isDesktop, getBrowserName, getOS } from './browser-detection-utils';

describe('Browser and Device Detection Utilities', () => {
  let userAgentSpy;

  beforeEach(() => {
    // Spy on navigator.userAgent and allow it to be mocked
    userAgentSpy = jest.spyOn(navigator, 'userAgent', 'get');
  });

  afterEach(() => {
    userAgentSpy.mockRestore();
  });

  describe('isMobile', () => {
    test('should return true for mobile user agents', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1');
      expect(isMobile()).toBe(true);

      userAgentSpy.mockReturnValue('Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36');
      expect(isMobile()).toBe(true);
    });

    test('should return false for non-mobile user agents', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36');
      expect(isMobile()).toBe(false);

      userAgentSpy.mockReturnValue('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36');
      expect(isMobile()).toBe(false);
    });
  });

  describe('isTablet', () => {
    test('should return true for tablet user agents', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (iPad; CPU OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/83.0.4103.88 Mobile/15E148 Safari/604.1');
      expect(isTablet()).toBe(true);

      userAgentSpy.mockReturnValue('Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36');
      expect(isTablet()).toBe(true);
    });

    test('should return false for non-tablet user agents', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36');
      expect(isTablet()).toBe(false);

      userAgentSpy.mockReturnValue('Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1');
      expect(isTablet()).toBe(false);
    });
  });

  describe('isDesktop', () => {
    test('should return true for desktop user agents', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36');
      expect(isDesktop()).toBe(true);

      userAgentSpy.mockReturnValue('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36');
      expect(isDesktop()).toBe(true);
    });

    test('should return false for mobile/tablet user agents', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1');
      expect(isDesktop()).toBe(false);

      userAgentSpy.mockReturnValue('Mozilla/5.0 (iPad; CPU OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/83.0.4103.88 Mobile/15E148 Safari/604.1');
      expect(isDesktop()).toBe(false);
    });
  });

  describe('getBrowserName', () => {
    test('should return Chrome', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36');
      expect(getBrowserName()).toBe('Chrome');
    });

    test('should return Firefox', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:100.0) Gecko/20100101 Firefox/100.0');
      expect(getBrowserName()).toBe('Firefox');
    });

    test('should return Safari', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Safari/605.1.15');
      expect(getBrowserName()).toBe('Safari');
    });

    test('should return Edge', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.50');
      expect(getBrowserName()).toBe('Edge');
    });

    test('should return IE', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko');
      expect(getBrowserName()).toBe('IE');
    });

    test('should return Unknown for unrecognized user agent', () => {
      userAgentSpy.mockReturnValue('CustomBrowser/1.0');
      expect(getBrowserName()).toBe('Unknown');
    });
  });

  describe('getOS', () => {
    test('should return Windows', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36');
      expect(getOS()).toBe('Windows');
    });

    test('should return macOS', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36');
      expect(getOS()).toBe('macOS');
    });

    test('should return Linux', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36');
      expect(getOS()).toBe('Linux');
    });

    test('should return Android', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36');
      expect(getOS()).toBe('Android');
    });

    test('should return iOS', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1');
      expect(getOS()).toBe('iOS');
    });

    test('should return Unknown for unrecognized OS', () => {
      userAgentSpy.mockReturnValue('Mozilla/5.0 (Unknown OS) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36');
      expect(getOS()).toBe('Unknown');
    });
  });
});
