const kebabToCamelCase = (str) => {
  return str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
};

export default kebabToCamelCase;
