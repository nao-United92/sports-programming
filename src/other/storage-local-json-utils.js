const setLocalStorageItem = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
    return true;
  } catch (error) {
    console.error(`Error setting localStorage item for key "${key}":`, error);
    return false;
  }
};

const getLocalStorageItem = (key) => {
  try {
    const serializedValue = localStorage.getItem(key);
    return serializedValue === null ? undefined : JSON.parse(serializedValue);
  } catch (error) {
    console.error(`Error getting or parsing localStorage item for key "${key}":`, error);
    return undefined;
  }
};

module.exports = { setLocalStorageItem, getLocalStorageItem };
