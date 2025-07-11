/**
 * Checks if an object has no enumerable own properties.
 *
 * @param obj The object to check.
 * @returns True if the object is empty, false otherwise.
 */
export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

/**
 * Deeply merges two or more objects into a new object.
 * Properties in later objects overwrite properties in earlier objects.
 *
 * @param target The target object to merge into.
 * @param sources One or more source objects to merge.
 * @returns A new object with merged properties.
 */
export function deepMerge(target, ...sources) {
    const output = { ...target };

    sources.forEach(source => {
        if (source && typeof source === 'object') {
            for (const key in source) {
                if (source.hasOwnProperty(key)) {
                    if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key]) && typeof output[key] === 'object' && output[key] !== null && !Array.isArray(output[key])) {
                        output[key] = deepMerge(output[key], source[key]);
                    } else {
                        output[key] = source[key];
                    }
                }
            }
        }
    });

    return output;
}

/**
 * Returns an array of a given object's own enumerable string-keyed property names.
 *
 * @param obj The object whose own enumerable string-keyed properties are to be returned.
 * @returns An array of strings that represent the given object's own enumerable string-keyed properties.
 */
export function getObjectKeys(obj) {
    return Object.keys(obj);
}

/**
 * Returns an array of a given object's own enumerable string-keyed property values.
 *
 * @param obj The object whose own enumerable string-keyed property values are to be returned.
 * @returns An array of values that represent the given object's own enumerable string-keyed property values.
 */
export function getObjectValues(obj) {
    return Object.values(obj);
}
