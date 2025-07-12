import { hasLocalStorage, hasSessionStorage, hasWebWorkers, hasGeolocation, hasFetchAPI } from './feature-detection-utils.js';

describe('feature-detection-utils', () => {
  it('should detect localStorage', () => {
    expect(hasLocalStorage()).toBe(true);
  });

  it('should detect sessionStorage', () => {
    expect(hasSessionStorage()).toBe(true);
  });

  it('should detect Web Workers', () => {
    global.Worker = jest.fn();
    expect(hasWebWorkers()).toBe(true);
    delete global.Worker;
    expect(hasWebWorkers()).toBe(false);
  });

  it('should detect Geolocation', () => {
    global.navigator.geolocation = {};
    expect(hasGeolocation()).toBe(true);
    delete global.navigator.geolocation;
    expect(hasGeolocation()).toBe(false);
  });

  it('should detect Fetch API', () => {
    global.fetch = jest.fn();
    expect(hasFetchAPI()).toBe(true);
    delete global.fetch;
    expect(hasFetchAPI()).toBe(false);
  });
});
