const getElementByIdSafe = (id) => {
  if (typeof id !== 'string' || id.length === 0) {
    throw new TypeError('Expected a non-empty string for the ID argument.');
  }
  // Check if `document` is defined to avoid errors in non-browser environments
  if (typeof document === 'undefined') {
    console.warn('`document` is not defined. Cannot retrieve DOM element.');
    return null;
  }
  return document.getElementById(id);
};

export default getElementByIdSafe;