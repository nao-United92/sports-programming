/**
 * Attaches an event handler function for one or more events to the selected elements,
 * or to children of the selected elements, that satisfy a selector.
 * @param {HTMLElement} element The element to attach the event listener to (the parent).
 * @param {string} selector A string containing a selector expression to which the handler will be bound.
 * @param {string} eventType A string containing one or more DOM event types, such as 'click' or 'keydown'.
 * @param {Function} handler A function to execute when the event is triggered.
 */
export function delegate(element, selector, eventType, handler) {
  if (!element || !selector || !eventType || !handler) {
    console.error('delegate: Invalid arguments provided.');
    return;
  }

  element.addEventListener(eventType, function(event) {
    const target = event.target;
    const matchingElement = target.closest(selector);

    if (matchingElement && element.contains(matchingElement)) {
      handler.call(matchingElement, event);
    }
  });
}