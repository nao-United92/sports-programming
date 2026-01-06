const isEmail = (str) => {
  if (typeof str !== 'string') {
    return false;
  }
  // A common regex for email validation.
  // Note: Comprehensive email regex is extremely complex and often not fully necessary for typical applications.
  // This one is a reasonable balance for most use cases.
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(str);
};

module.exports = isEmail;
