
const createStore = (storage) => ({
  get(key) {
    const item = storage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (e) {
      return item;
    }
  },
  set(key, value) {
    storage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    storage.removeItem(key);
  },
  clear() {
    storage.clear();
  },
});

export const localStore = createStore(window.localStorage);
export const sessionStore = createStore(window.sessionStorage);
