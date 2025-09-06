
export const fromEntries = (pairs) => {
  if (pairs === null || pairs === undefined) {
    return {};
  }

  const result = {};
  for (const [key, value] of pairs) {
    result[key] = value;
  }
  return result;
};
