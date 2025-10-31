const getURLParameters = (url) => {
  try {
    // A dummy base is needed for relative URLs like '/test?a=1'
    const searchParams = new URL(url, 'https://dummy.base').searchParams;
    // Using Object.fromEntries will cause the last value to win for duplicate keys.
    return Object.fromEntries(searchParams.entries());
  } catch (e) {
    // If URL parsing fails completely, return an empty object.
    return {};
  }
};

module.exports = { getURLParameters };
