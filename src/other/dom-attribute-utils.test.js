import { getAttribute, getData, setData, hasData } from './dom-attribute-utils';

describe('getAttribute', () => {
  let element;

  beforeEach(() => {
    document.body.innerHTML = '<div id="testElement" data-test="value1" class="my-class"></div>';
    element = document.getElementById('testElement');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should return the value of an existing attribute', () => {
    expect(getAttribute(element, 'data-test')).toBe('value1');
    expect(getAttribute(element, 'id')).toBe('testElement');
    expect(getAttribute(element, 'class')).toBe('my-class');
  });

  test('should return null for a non-existing attribute', () => {
    expect(getAttribute(element, 'non-existent-attr')).toBeNull();
  });

  test('should return null for a null element', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    expect(getAttribute(null, 'data-test')).toBeNull();
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to getAttribute.', null);
    consoleWarnSpy.mockRestore();
  });

  test('should return null for an undefined element', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    expect(getAttribute(undefined, 'data-test')).toBeNull();
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to getAttribute.', undefined);
    consoleWarnSpy.mockRestore();
  });

  test('should return null for a non-HTMLElement object', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    expect(getAttribute({}, 'data-test')).toBeNull();
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to getAttribute.', {});
    consoleWarnSpy.mockRestore();
  });

  test('should return null if attributeName is null or undefined', () => {
    expect(getAttribute(element, null)).toBeNull();
    expect(getAttribute(element, undefined)).toBeNull();
  });
});

describe('getData', () => {
  let element;

  beforeEach(() => {
    document.body.innerHTML = '<div id="testElement" data-id="123" data-name="testName"></div>';
    element = document.getElementById('testElement');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should retrieve the value of an existing data attribute', () => {
    expect(getData(element, 'id')).toBe('123');
    expect(getData(element, 'name')).toBe('testName');
  });

  test('should return undefined for a non-existing data attribute', () => {
    expect(getData(element, 'nonExistent')).toBeUndefined();
  });

  test('should return null and warn for invalid element', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    expect(getData(null, 'id')).toBeNull();
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to getData.', null);
    consoleWarnSpy.mockRestore();
  });
});

describe('setData', () => {
  let element;

  beforeEach(() => {
    document.body.innerHTML = '<div id="testElement"></div>';
    element = document.getElementById('testElement');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should set a data attribute on an element', () => {
    setData(element, 'newId', '456');
    expect(element.dataset.newId).toBe('456');
  });

  test('should update an existing data attribute', () => {
    element.dataset.existing = 'oldValue';
    setData(element, 'existing', 'newValue');
    expect(element.dataset.existing).toBe('newValue');
  });

  test('should warn for invalid element and not set data', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    setData(null, 'id', '123');
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to setData.', null);
    consoleWarnSpy.mockRestore();
  });
});

describe('hasData', () => {
  let element;

  beforeEach(() => {
    document.body.innerHTML = '<div id="testElement" data-present="true" data-empty=""></div>';
    element = document.getElementById('testElement');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should return true for an existing data attribute', () => {
    expect(hasData(element, 'present')).toBe(true);
    expect(hasData(element, 'empty')).toBe(true);
  });

  test('should return false for a non-existing data attribute', () => {
    expect(hasData(element, 'nonExistent')).toBe(false);
  });

  test('should return false and warn for invalid element', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    expect(hasData(null, 'present')).toBe(false);
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to hasData.', null);
    consoleWarnSpy.mockRestore();
  });
});
