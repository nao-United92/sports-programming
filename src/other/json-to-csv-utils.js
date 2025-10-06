

/**
 * Converts a JSON string to a CSV string.
 *
 * @param {string} json The JSON string to convert.
 * @param {object} [options] Optional options object.
 * @param {string} [options.delimiter=','] The delimiter to use.
 * @param {boolean} [options.header=true] Whether the CSV should have a header row.
 * @returns {string} Returns the CSV string.
 */
export const jsonToCsv = (json, options = {}) => {
  const { delimiter = ',', header = true } = options;
  const data = JSON.parse(json);
  if (!Array.isArray(data) || data.length === 0) {
    return '';
  }

  const headers = Object.keys(data[0]);
  let csv = '';

  if (header) {
    csv += headers.join(delimiter) + '\n';
  }

  data.forEach(obj => {
    const row = headers.map(h => obj[h]);
    csv += row.join(delimiter) + '\n';
  });

  return csv;
};

