const getByPath = (obj, path) => path.split(/[.[\]]/).filter(Boolean).reduce((acc, key) => acc?.[key], obj);

export { getByPath };
