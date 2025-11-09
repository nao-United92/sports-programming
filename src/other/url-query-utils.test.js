const { getQueryParams } = require('./url-query-utils');

describe('URL Query Utilities', () => {
    describe('getQueryParams', () => {
        it('should parse a simple query string from a full URL', () => {
            const url = 'https://example.com?name=John&age=30';
            expect(getQueryParams(url)).toEqual({ name: 'John', age: '30' });
        });

        it('should handle multiple values for the same key by creating an array', () => {
            const url = 'https://example.com?a=1&a=2&b=3';
            expect(getQueryParams(url)).toEqual({ a: ['1', '2'], b: '3' });
        });

        it('should handle keys with empty values and keys without values', () => {
            // URLSearchParams treats '?c' as a key 'c' with an empty string value.
            const url = 'https://example.com?a=&b=2&c';
            expect(getQueryParams(url)).toEqual({ a: '', b: '2', c: '' });
        });

        it('should correctly decode URL-encoded characters', () => {
            const url = 'https://example.com?q=%E3%83%86%E3%82%B9%E3%83%88&lang=ja';
            expect(getQueryParams(url)).toEqual({ q: 'テスト', lang: 'ja' });
        });

        it('should return an empty object for URLs without a query string', () => {
            const url = 'https://example.com/path/page';
            expect(getQueryParams(url)).toEqual({});
        });

        it('should handle just a query string without a base URL', () => {
            const queryString = 'name=Jane&hobbies=reading&hobbies=coding';
            expect(getQueryParams(queryString)).toEqual({ name: 'Jane', hobbies: ['reading', 'coding'] });
        });

        it('should handle complex cases with more than two same-key values', () => {
            const url = '?a=1&a=2&a=3&b=4';
            expect(getQueryParams(url)).toEqual({ a: ['1', '2', '3'], b: '4' });
        });

        it('should return an empty object for an empty string input', () => {
            expect(getQueryParams('')).toEqual({});
        });
    });
});