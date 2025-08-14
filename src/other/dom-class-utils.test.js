import { toggleClass } from './dom-class-utils';

describe('toggleClass', () => {
  let element;

  beforeEach(() => {
    document.body.innerHTML = '<div id="testElement" class="initial-class"></div>';
    element = document.getElementById('testElement');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should add a class if it does not exist', () => {
    toggleClass(element, 'new-class');
    expect(element.classList.contains('new-class')).toBe(true);
  });

  test('should remove a class if it exists', () => {
    element.classList.add('existing-class');
    toggleClass(element, 'existing-class');
    expect(element.classList.contains('existing-class')).toBe(false);
  });

  test('should add a class when force is true and class does not exist', () => {
    toggleClass(element, 'forced-class', true);
    expect(element.classList.contains('forced-class')).toBe(true);
  });

  test('should keep a class when force is true and class exists', () => {
    element.classList.add('forced-class');
    toggleClass(element, 'forced-class', true);
    expect(element.classList.contains('forced-class')).toBe(true);
  });

  test('should remove a class when force is false and class exists', () => {
    element.classList.add('forced-class');
    toggleClass(element, 'forced-class', false);
    expect(element.classList.contains('forced-class')).toBe(false);
  });

  test('should keep a class removed when force is false and class does not exist', () => {
    toggleClass(element, 'forced-class', false);
    expect(element.classList.contains('forced-class')).toBe(false);
  });

  test('should warn and return if a non-HTMLElement is provided', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    toggleClass(null, 'some-class');
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to toggleClass.', null);

    toggleClass(undefined, 'some-class');
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to toggleClass.', undefined);

    toggleClass({}, 'some-class');
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to toggleClass.', {});

    consoleWarnSpy.mockRestore();
  });
});
