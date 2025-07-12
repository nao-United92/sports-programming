
/**
 * URLからJSONデータを取得します。
 * @param {string} url - データを取得するURL。
 * @returns {Promise<any>} - JSONデータで解決されるPromise。
 * @throws {Error} - ネットワークレスポンスがokでない場合にエラーをスローします。
 */
export async function getJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

/**
 * URLにJSONデータをPOSTします。
 * @param {string} url - データをPOSTするURL。
 * @param {object} data - POSTするデータ。
 * @returns {Promise<any>} - JSONレスポンスで解決されるPromise。
 * @throws {Error} - ネットワークレスポンスがokでない場合にエラーをスローします。
 */
export async function postJSON(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
