const truncate = (str, maxLength, ellipsis = "...") => {
  if (typeof str !== "string") {
    throw new Error("Expected a string.");
  }
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength - ellipsis.length) + ellipsis;
};

module.exports = { truncate };
