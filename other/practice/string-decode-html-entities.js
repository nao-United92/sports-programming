const decodeHTMLEntities = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  const entities = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#x22;': '"', // Double quote
    '&#x27;': "'", // Apostrophe
    '&#x2F;': '/', // Slash
    '&apos;': "'", // Non-standard but commonly used apostrophe
    // Add more as needed
  };

  let decodedStr = str;
  for (const entity in entities) {
    if (Object.prototype.hasOwnProperty.call(entities, entity)) {
      const regex = new RegExp(entity, 'g');
      decodedStr = decodedStr.replace(regex, entities[entity]);
    }
  }
  return decodedStr;
};

module.exports = { decodeHTMLEntities };
