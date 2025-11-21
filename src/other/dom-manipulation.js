const addClass = (el, className) => {
  if (el && el.classList) {
    el.classList.add(className);
  }
};

const removeClass = (el, className) => {
  if (el && el.classList) {
    el.classList.remove(className);
  }
};

const toggleClass = (el, className) => {
  if (el && el.classList) {
    el.classList.toggle(className);
  }
};

const show = (el) => {
  if (el && el.style) {
    el.style.display = '';
  }
};

const hide = (el) => {
  if (el && el.style) {
    el.style.display = 'none';
  }
};

module.exports = { addClass, removeClass, toggleClass, show, hide };
