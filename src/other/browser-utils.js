/**
 * Checks if the current environment is a browser.
 *
 * @returns True if in a browser environment, false otherwise.
 */
export function isBrowser() {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
}

/**
 * Scrolls to the top of the page or a specific element.
 *
 * @param element Optional. The element to scroll to. If not provided, scrolls to the top of the window.
 * @param behavior Optional. 'auto' or 'smooth' for scroll behavior. Defaults to 'smooth'.
 */
export function scrollToTop(element = window, behavior = 'smooth') {
    if (element) {
        element.scrollTo({ top: 0, behavior: behavior });
    }
}

/**
 * Gets the current scroll position of the window or an element.
 *
 * @param element Optional. The element to get scroll position from. Defaults to window.
 * @returns An object with scrollTop and scrollLeft properties.
 */
export function getScrollPosition(element = window) {
    if (element === window) {
        return {
            scrollTop: window.pageYOffset || document.documentElement.scrollTop,
            scrollLeft: window.pageXOffset || document.documentElement.scrollLeft
        };
    } else if (element instanceof HTMLElement) {
        return {
            scrollTop: element.scrollTop,
            scrollLeft: element.scrollLeft
        };
    }
    return { scrollTop: 0, scrollLeft: 0 };
}

/**
 * Checks if an element is currently in the viewport.
 *
 * @param element The HTMLElement to check.
 * @returns True if the element is in viewport, false otherwise.
 */
export function isInViewport(element) {
    if (!element || !isBrowser()) {
        return false;
    }
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
