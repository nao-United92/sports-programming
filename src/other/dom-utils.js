/**
 * Selects a single HTML element by a CSS selector.
 *
 * @param selector The CSS selector string.
 * @param parent Optional. The parent element to search within. Defaults to document.
 * @returns The first matching HTMLElement, or null if not found.
 */
export function selectElement(selector, parent = document) {
    return parent.querySelector(selector);
}

/**
 * Selects all HTML elements matching a CSS selector.
 *
 * @param selector The CSS selector string.
 * @param parent Optional. The parent element to search within. Defaults to document.
 * @returns A NodeListOf<HTMLElement> containing all matching elements.
 */
export function selectAllElements(selector, parent = document) {
    return parent.querySelectorAll(selector);
}

/**
 * Creates a new HTML element with optional attributes and children.
 *
 * @param tagName The tag name of the element to create (e.g., 'div', 'span').
 * @param attributes Optional. An object of attribute key-value pairs.
 * @param children Optional. An array of child Node or string.
 * @returns The newly created HTMLElement.
 */
export function createElement(tagName, attributes = {}, children = []) {
    const element = document.createElement(tagName);
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element.setAttribute(key, attributes[key]);
        }
    }
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            element.appendChild(child);
        }
    });
    return element;
}

/**
 * Appends a child element to a parent element.
 *
 * @param parent The parent HTMLElement.
 * @param child The child HTMLElement or Node to append.
 * @returns The appended child element.
 */
export function appendChild(parent, child) {
    if (parent && child) {
        parent.appendChild(child);
    }
    return child;
}

/**
 * Removes an element from the DOM.
 *
 * @param element The HTMLElement to remove.
 */
export function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}
