/**
 * Sets the text content of an HTML element.
 *
 * @param element The HTMLElement to set text content for.
 * @param text The text string to set.
 */
export function setTextContent(element, text) {
    if (element) {
        element.textContent = text;
    }
}

/**
 * Sets the inner HTML of an HTML element.
 *
 * @param element The HTMLElement to set inner HTML for.
 * @param html The HTML string to set.
 */
export function setInnerHtml(element, html) {
    if (element) {
        element.innerHTML = html;
    }
}

/**
 * Adds one or more CSS classes to an HTML element.
 *
 * @param element The HTMLElement to add classes to.
 * @param classes One or more class names (string) or an array of class names.
 */
export function addClass(element, classes) {
    if (element) {
        if (Array.isArray(classes)) {
            element.classList.add(...classes);
        } else {
            element.classList.add(classes);
        }
    }
}

/**
 * Removes one or more CSS classes from an HTML element.
 *
 * @param element The HTMLElement to remove classes from.
 * @param classes One or more class names (string) or an array of class names.
 */
export function removeClass(element, classes) {
    if (element) {
        if (Array.isArray(classes)) {
            element.classList.remove(...classes);
        } else {
            element.classList.remove(classes);
        }
    }
}

/**
 * Toggles a CSS class on an HTML element.
 *
 * @param element The HTMLElement to toggle the class on.
 * @param className The class name to toggle.
 * @param force Optional. If true, adds the class; if false, removes it.
 */
export function toggleClass(element, className, force) {
    if (element) {
        element.classList.toggle(className, force);
    }
}

/**
 * Sets multiple CSS styles on an HTML element.
 *
 * @param element The HTMLElement to apply styles to.
 * @param styles An object where keys are CSS property names (camelCase) and values are their values.
 */
export function setStyles(element, styles) {
    if (element) {
        for (const prop in styles) {
            if (styles.hasOwnProperty(prop)) {
                element.style[prop] = styles[prop];
            }
        }
    }
}
