import { getCookie, setCookie, deleteCookie } from './cookie-utils.js';

describe('cookie-utils', () => {
  let cookies = {};

  Object.defineProperty(document, 'cookie', {
    get: jest.fn(() => {
      return Object.keys(cookies).map(key => `${key}=${cookies[key]}`).join('; ');
    }),
    set: jest.fn((cookieString) => {
      const parts = cookieString.split('; ').map(s => s.trim());
      const [name, value] = parts[0].split('=');
      
      let cookieData = { value: value };

      parts.slice(1).forEach(part => {
        if (part.startsWith('expires=')) {
          cookieData.expires = part.substring('expires='.length);
        } else if (part.startsWith('path=')) {
          cookieData.path = part.substring('path='.length);
        }
      });

      if (cookieData.expires && new Date(cookieData.expires) < new Date()) {
        delete cookies[name];
      } else {
        cookies[name] = cookieData;
      }
    }),
    configurable: true,
  });

  beforeEach(() => {
    cookies = {}; // Clear cookies before each test
  });

  test('setCookie and getCookie', () => {
    setCookie('test', 'value');
    expect(getCookie('test')).toBe('value');
  });

  test('setCookie with expiration', () => {
    setCookie('test', 'value', { days: 1 });
    expect(document.cookie).toContain('test=value'); // Check if the cookie is set
  });

  test('setCookie with path', () => {
    setCookie('test', 'value', { path: '/' });
    expect(document.cookie).toContain('test=value'); // Check if the cookie is set
  });

  test('deleteCookie', () => {
    setCookie('test', 'value');
    deleteCookie('test');
    expect(getCookie('test')).toBe(null);
  });

  test('getCookie for non-existent cookie', () => {
    expect(getCookie('nonexistent')).toBe(null);
  });

  test('setCookie with expiration and path', () => {
    setCookie('test_exp_path', 'value_exp_path', { days: 7, path: '/testpath' });
    expect(document.cookie).toContain('test_exp_path=value_exp_path');
    expect(document.cookie).toContain('path=/testpath');
  });

  test('setCookie without expiration (session cookie)', () => {
    setCookie('test_session', 'value_session');
    expect(document.cookie).toContain('test_session=value_session');
    expect(document.cookie).toContain('path=/');
  });

  test('setCookie with 0 days expiration (delete immediately)', () => {
    setCookie('test_delete', 'value_delete', { days: 0 });
    expect(document.cookie).not.toContain('test_delete');
  });
});
