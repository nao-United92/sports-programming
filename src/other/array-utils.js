/**
 * Checks if an array is empty.
 *
 * @param arr The array to check.
 * @returns True if the array is empty, false otherwise.
 */
export function isEmptyArray(arr) {
    return arr.length === 0;
}

/**
 * Returns the last element of an array.
 *
 * @param arr The array to get the last element from.
 * @returns The last element of the array, or undefined if the array is empty.
 */
export function lastElement(arr) {
    return arr[arr.length - 1];
}

/**
 * Removes a specific element from an array.
 *
 * @param arr The array to modify. This function returns a new array and does not modify the original.
 * @param element The element to remove.
 * @returns A new array with the element removed.
 */
export function removeElementFromArray(arr, element) {
    return arr.filter(item => item !== element);
}

/**
 * Shuffles an array in place using the Fisher-Yates (Knuth) shuffle algorithm.
 *
 * @param arr The array to shuffle.
 * @returns The shuffled array (modified in place).
 */
export function shuffleArray(arr) {
    let currentIndex = arr.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex],
            arr[currentIndex],
        ];
    }
    return arr;
}

/**
 * Returns a new array with duplicate values removed.
 *
 * @param arr The array to remove duplicates from.
 * @returns A new array with unique values.
 */
export function uniqueArray(arr) {
    return [...new Set(arr)];
}
