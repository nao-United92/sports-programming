/**
 * Safely adds an event listener to an HTMLElement.
 *
 * @param element The HTML element to attach the listener to.
 * @param eventType The type of event to listen for (e.g., 'click', 'mouseover').
 * @param listener The EventListener function to call when the event occurs.
 * @param options An optional object that specifies characteristics about the event listener.
 */
export function addEventListenerSafe(
    element,
    eventType,
    listener,
    options
) {
    if (element) {
        element.addEventListener(eventType, listener, options);
    } else {
        console.warn(`Attempted to add event listener to a null element for event type: ${eventType}`);
    }
}

/**
 * Safely removes an event listener from an HTMLElement.
 *
 * @param element The HTML element to remove the listener from.
 * @param eventType The type of event to remove the listener for.
 * @param listener The EventListener function to remove.
 * @param options An optional object that specifies characteristics about the event listener.
 */
export function removeEventListenerSafe(
    element,
    eventType,
    listener,
    options
) {
    if (element) {
        element.removeEventListener(eventType, listener, options);
    } else {
        console.warn(`Attempted to remove event listener from a null element for event type: ${eventType}`);
    }
}
