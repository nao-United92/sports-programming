
export const template = (str, data) => {
  const regex = /<%=\s*(\w+)\s*%>/g;
  return str.replace(regex, (match, key) => {
    return data[key] || '';
  });
};
