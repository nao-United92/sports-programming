/**
 * Scrolls to a specific HTML element.
 * @param {string} elementId The ID of the element to scroll to.
 * @param {number} [offset=0] An offset from the top of the element.
 * @param {'auto'|'smooth'} [behavior='smooth'] The scroll behavior.
 */
const scrollToElement = (elementId, offset = 0, behavior = 'smooth') => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: behavior,
    });
  } else {
    console.warn(`Element with ID "${elementId}" not found.`);
  }
};

module.exports = { scrollToElement };