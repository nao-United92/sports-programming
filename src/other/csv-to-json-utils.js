

/**
 * Converts a CSV string to a JSON string.
 *
 * @param {string} csv The CSV string to convert.
 * @param {object} [options] Optional options object.
 * @param {string} [options.delimiter=','] The delimiter to use.
 * @param {boolean} [options.header=true] Whether the CSV has a header row.
 * @returns {string} Returns the JSON string.
 */
export const csvToJson = (csv, options = {}) => {
  const { delimiter = ',', header = true } = options;
  const lines = csv.split('\n');
  const result = [];
  const headers = header ? lines[0].split(delimiter) : [];

  for (let i = header ? 1 : 0; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(delimiter);

    if (header) {
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
    } else {
      for (let j = 0; j < currentline.length; j++) {
        obj[j] = currentline[j];
      }
    }
    result.push(obj);
  }

  return JSON.stringify(result);
};

