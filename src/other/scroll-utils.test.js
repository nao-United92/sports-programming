/**
 * @jest-environment jsdom
 */
import { smoothScrollTo } from './scroll-utils';

describe('smoothScrollTo', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    element.id = 'test-element';
    document.body.appendChild(element);
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test('指定された要素にスクロールする', () => {
    smoothScrollTo('#test-element');
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  test('カスタムオプションでスクロールする', () => {
    smoothScrollTo('#test-element', { behavior: 'auto', block: 'center' });
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'auto',
      block: 'center',
    });
  });

  test('存在しない要素に対しては何もしない', () => {
    smoothScrollTo('#non-existent-element');
    expect(window.HTMLElement.prototype.scrollIntoView).not.toHaveBeenCalled();
  });
});
