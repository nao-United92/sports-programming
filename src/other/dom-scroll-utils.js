const scrollToElement = (target, options = { behavior: 'smooth' }) => {
  let element;

  if (typeof target === 'string') {
    element = document.querySelector(target);
  } else if (target instanceof Element) {
    element = target;
  }

  if (element) {
    element.scrollIntoView(options);
    return true;
  }
  return false;
};

module.exports = { scrollToElement };