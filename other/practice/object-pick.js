const pick = (obj, keys) => keys.reduce((acc, key) => (key in obj && (acc[key] = obj[key]), acc), {});

export { pick };
