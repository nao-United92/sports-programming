
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

/**
 * Simulates a file upload by accepting a File object and returning its content.
 * In a real application, this would send the file to a server.
 * @param {File} file The File object to "upload".
 * @returns {Promise<string>} A promise that resolves with the file's text content (for demonstration).
 */
export function uploadFile(file) {
  return readFileAsText(file);
}

/**
 * Sets up a drag-and-drop area for file uploads.
 * @param {HTMLElement} dropArea The DOM element to use as the drop area.
 * @param {Function} onDropCallback A callback function that receives an array of File objects when files are dropped.
 */
export function dragAndDropUpload(dropArea, onDropCallback) {
  if (!dropArea || !onDropCallback) {
    console.error('dragAndDropUpload: dropArea and onDropCallback are required.');
    return;
  }

  dropArea.addEventListener('dragover', (event) => {
    event.preventDefault(); // Prevent default to allow drop
    dropArea.classList.add('drag-over');
  });

  dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('drag-over');
  });

  dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.classList.remove('drag-over');

    const files = Array.from(event.dataTransfer.files);
    if (files.length > 0) {
      onDropCallback(files);
    }
  });
}
