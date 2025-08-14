/**
 * 指定されたURLまたはクエリ文字列からクエリパラメータをオブジェクトとして取得します。
 * 引数が指定されない場合は、現在のURLのクエリパラメータを使用します。
 * @param {string} [input] - クエリパラメータを取得するURLまたはクエリ文字列。指定されない場合はwindow.location.searchを使用。
 * @returns {Object<string, string>} クエリパラメータのキーと値のペアを含むオブジェクト。
 */
export function getQueryParams(input) {
  const params = {};
  let queryString = '';

  if (input) {
    // inputが完全なURLの場合
    if (input.startsWith('http://') || input.startsWith('https://')) {
      try {
        const urlObj = new URL(input);
        queryString = urlObj.search;
      } catch (e) {
        // 無効なURLの場合は空の文字列
        queryString = '';
      }
    } else if (input.startsWith('#')) {
      // inputがハッシュの場合、クエリパラメータではないので空
      queryString = '';
    } else {
      // それ以外の場合は、クエリ文字列として扱う（例: "?name=Alice&age=30" または "name=Alice&age=30"）
      queryString = input;
    }
  } else {
    // inputが指定されない場合はwindow.location.searchを使用
    queryString = window.location.search;
  }

  // クエリ文字列からハッシュ部分を取り除く
  const hashIndex = queryString.indexOf('#');
  if (hashIndex !== -1) {
    queryString = queryString.substring(0, hashIndex);
  }

  if (queryString) {
    const urlParams = new URLSearchParams(queryString);
    for (const [key, value] of urlParams.entries()) {
      params[key] = value;
    }
  }
  return params;
}