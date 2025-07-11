/**
 * Sets a cookie.
 *
 * @param name The name of the cookie.
 * @param value The value of the cookie.
 * @param days Optional. The number of days until the cookie expires. If 0 or negative, it's a session cookie.
 * @param path Optional. The path for which the cookie is valid. Defaults to '/'.
 */
export function setCookie(name, value, days, path = '/') {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=${path}`;
}

/**
 * Gets the value of a cookie.
 *
 * @param name The name of the cookie to get.
 * @returns The value of the cookie, or null if not found.
 */
export function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}

/**
 * Deletes a cookie.
 *
 * @param name The name of the cookie to delete.
 * @param path Optional. The path for which the cookie was set. Defaults to '/'.
 */
export function deleteCookie(name, path = '/') {
    document.cookie = `${name}=; Max-Age=-99999999; path=${path}`;
}
