
/**
 * Fetches JSON data from a given URL.
 * @param {string} url The URL to fetch from.
 * @param {object} [options={}] Fetch API options.
 * @returns {Promise<object>} A promise that resolves with the JSON data.
 * @throws {Error} If the network request fails or the response is not OK.
 */
export async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
  }
  return response.json();
}

/**
 * Posts JSON data to a given URL.
 * @param {string} url The URL to post to.
 * @param {object} data The JavaScript object to send as JSON.
 * @param {object} [options={}] Fetch API options.
 * @returns {Promise<object>} A promise that resolves with the JSON response.
 * @throws {Error} If the network request fails or the response is not OK.
 */
export async function postJson(url, data, options = {}) {
  const defaultOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const mergedOptions = { ...defaultOptions, ...options };
  return fetchJson(url, mergedOptions);
}

/**
 * Puts JSON data to a given URL.
 * @param {string} url The URL to put to.
 * @param {object} data The JavaScript object to send as JSON.
 * @param {object} [options={}] Fetch API options.
 * @returns {Promise<object>} A promise that resolves with the JSON response.
 * @throws {Error} If the network request fails or the response is not OK.
 */
export async function putJson(url, data, options = {}) {
  const defaultOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const mergedOptions = { ...defaultOptions, ...options };
  return fetchJson(url, mergedOptions);
}

/**
 * Sends a DELETE request to a given URL.
 * @param {string} url The URL to delete.
 * @param {object} [options={}] Fetch API options.
 * @returns {Promise<object>} A promise that resolves with the JSON response (or empty object if no content).
 * @throws {Error} If the network request fails or the response is not OK.
 */
export async function deleteResource(url, options = {}) {
  const defaultOptions = {
    method: 'DELETE',
  };
  const mergedOptions = { ...defaultOptions, ...options };
  const response = await fetch(url, mergedOptions);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
  }
  // Attempt to parse JSON, but don't fail if there's no content (e.g., 204 No Content)
  try {
    return await response.json();
  } catch (e) {
    return {}; // Return empty object for no content responses
  }
}
