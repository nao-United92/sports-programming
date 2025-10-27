export function toCamelCase(str) {
  return str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
}

export function toSnakeCase(str) {
  return str.replace(/([A-Z])/g, "_" + "$1").toLowerCase();
}

export function toKebabCase(str) {
  return str.replace(/([A-Z])/g, "-" + "$1").toLowerCase();
}