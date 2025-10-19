
const { getUrlParams } = require('./url-query-utils');

describe('getUrlParams', () => {
  test('クエリパラメータを持つURLを正しくパースすること', () => {
    const url = 'http://example.com?name=John&age=30';
    const params = getUrlParams(url);
    expect(params).toEqual({ name: 'John', age: '30' });
  });

  test('クエリパラメータがないURLの場合、空のオブジェクトを返すこと', () => {
    const url = 'http://example.com';
    const params = getUrlParams(url);
    expect(params).toEqual({});
  });

  test('値がないクエリパラメータを正しく処理すること', () => {
    const url = 'http://example.com?name=';
    const params = getUrlParams(url);
    expect(params).toEqual({ name: '' });
  });

  test('エンコードされた文字をデコードすること', () => {
    const url = 'http://example.com?query=%E3%83%86%E3%82%B9%E3%83%88';
    const params = getUrlParams(url);
    expect(params).toEqual({ query: 'テスト' });
  });
});
