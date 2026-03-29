const truncate = (str, len) => str.length > len ? str.slice(0, len) + '...' : str;

export { truncate };
