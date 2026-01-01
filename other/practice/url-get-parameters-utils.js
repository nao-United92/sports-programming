const getURLParameters = (url) => {
  const params = {};
  const parser = new URL(url);
  const searchParams = new URLSearchParams(parser.search);
  
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  
  return params;
};

module.exports = { getURLParameters };
