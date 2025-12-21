const snakeCase = str =>
  str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9_]+/g, '_')
    .replace(/^_|_$/g, '');

export default snakeCase;
