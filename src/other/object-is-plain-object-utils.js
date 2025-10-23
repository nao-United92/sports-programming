export const isPlainObject = (value) => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const proto = Object.getPrototypeOf(value);

  // Objects with a null prototype (e.g., Object.create(null)) are plain objects.
  if (proto === null) {
    return true;
  }

  // Check if the prototype is the base Object.prototype
  // This filters out arrays, functions, Dates, RegExps, and custom class instances.
  return proto === Object.prototype;
};