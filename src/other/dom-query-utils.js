// src/other/dom-query-utils.js

/**
 * Safely retrieves a single DOM element matching a CSS selector.
 *
 * @param {string} selector The CSS selector string.
 * @param {Document | HTMLElement} [context=document] The context element to search within.
 * @returns {HTMLElement | null} The first matching element, or null if not found.
 */
const querySelector = (selector, context = document) => {
  if (typeof selector !== 'string' || selector === '') {
    return null;
  }
  if (!context || typeof context.querySelector !== 'function') {
    return null;
  }
  try {
    return context.querySelector(selector);
  } catch (error) {
    console.error('Error querying selector:', selector, error);
    return null;
  }
};

module.exports = {
  querySelector,
};