/**
 * Parses a CSV string into an array of arrays.
 * @param {string} csvString The CSV string to parse.
 * @param {string} [delimiter=','] The delimiter character.
 * @returns {string[][]} An array of arrays representing the CSV data.
 */
export const csvToArray = (csvString, delimiter = ',') => {
  return csvString.split('\n').map(row => row.split(delimiter));
};

/**
 * Parses a CSV string into an array of objects.
 * @param {string} csvString The CSV string to parse.
 * @param {string} [delimiter=','] The delimiter character.
 * @returns {object[]} An array of objects representing the CSV data.
 */
export const csvToObjects = (csvString, delimiter = ',') => {
  const [headerLine, ...lines] = csvString.split('\n');
  const headers = headerLine.split(delimiter);
  return lines.map(line => {
    const values = line.split(delimiter);
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {});
  });
};
