import { addEventListenerSafe, removeEventListenerSafe } from './event-listener-utils.js';

describe('event-listener-utils', () => {
  it('should add and remove an event listener', () => {
    const el = document.createElement('div');
    const listener = jest.fn();

    addEventListenerSafe(el, 'click', listener);
    el.click();
    expect(listener).toHaveBeenCalledTimes(1);

    removeEventListenerSafe(el, 'click', listener);
    el.click();
    expect(listener).toHaveBeenCalledTimes(1);
  });
});
