export const getLocalStorageItem = (key) => {
  if (typeof localStorage === 'undefined') {
    return null;
  }
  const item = localStorage.getItem(key);
  if (item === null) {
    return null;
  }
  try {
    return JSON.parse(item);
  } catch (e) {
    return item; // Return original string if JSON parsing fails
  }
};

export const setLocalStorageItem = (key, value) => {
  if (typeof localStorage === 'undefined') {
    return;
  }
  try {
    const serializedValue = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (e) {
    console.error('Error setting localStorage item:', e);
  }
};
