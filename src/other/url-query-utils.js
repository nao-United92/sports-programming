/**
 * Parses the query string of a URL and returns an object with the parameters.
 * If a key appears multiple times, its values are collected into an array.
 * This implementation uses the built-in URLSearchParams for robust parsing.
 *
 * @param {string} url The URL or query string to parse.
 * @returns {Object} An object containing the query parameters.
 */
const getQueryParams = (url) => {
    const params = {};
    let queryString = '';

    const queryStringIndex = url.indexOf('?');
    if (queryStringIndex > -1) {
        queryString = url.substring(queryStringIndex + 1);
    } else if (!url.includes('=')) {
        // If no '?' and no '=', it's not a query string.
        return params;
    } else {
        // Assumes the whole string is a query string if no '?' but '=' is present.
        queryString = url;
    }

    if (!queryString) {
        return params;
    }

    const searchParams = new URLSearchParams(queryString);

    for (const key of new Set(searchParams.keys())) {
        const values = searchParams.getAll(key);
        params[key] = values.length > 1 ? values : values[0];
    }

    return params;
};

module.exports = {
    getQueryParams,
};