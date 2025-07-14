
/**
 * Triggers a browser download for a given blob of data.
 * @param {BlobPart} data The data to download (e.g., a string, Blob, ArrayBuffer).
 * @param {string} fileName The name of the file to be downloaded.
 * @param {string} [mimeType='text/plain'] The MIME type of the data.
 */
export function downloadFile(data, fileName, mimeType = 'text/plain') {
  const blob = new Blob([data], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Reads a File object and returns its content as a text string.
 * @param {File} file The File object (from a file input).
 * @returns {Promise<string>} A promise that resolves with the file's text content.
 */
export function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

/**
 * Reads a File object and returns its content as a Base64 encoded Data URL.
 * @param {File} file The File object (from a file input).
 * @returns {Promise<string>} A promise that resolves with the file's content as a Data URL.
 */
export function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
