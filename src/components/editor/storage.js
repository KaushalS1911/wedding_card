import localforage from 'localforage';

// Custom sessionStorage driver
const sessionStorageDriver = {
  _driver: 'customSessionStorageDriver',
  _support: () => Promise.resolve(typeof sessionStorage !== 'undefined'),
  _initStorage() {
    return Promise.resolve();
  },
  getItem(key) {
    return Promise.resolve(sessionStorage.getItem(key));
  },
  setItem(key, value) {
    sessionStorage.setItem(key, value);
    return Promise.resolve(value);
  },
  removeItem(key) {
    sessionStorage.removeItem(key);
    return Promise.resolve();
  },
  clear() {
    sessionStorage.clear();
    return Promise.resolve();
  },
  length() {
    return Promise.resolve(sessionStorage.length);
  },
  key(n) {
    return Promise.resolve(sessionStorage.key(n));
  },
  keys() {
    const keys = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      keys.push(sessionStorage.key(i));
    }
    return Promise.resolve(keys);
  },
  iterate(callback) {
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      const value = sessionStorage.getItem(key);
      callback(value, key, i);
    }
    return Promise.resolve();
  },
};

// In-memory fallback
const inMemoryStorage = {
  data: new Map(),
  async getItem(key) {
    return this.data.get(key);
  },
  async setItem(key, value) {
    this.data.set(key, value);
  },
  async removeItem(key) {
    this.data.delete(key);
  },
  async clear() {
    this.data.clear();
  },
};

// Register and use sessionStorage driver
let storage = localforage.createInstance({ name: 'my-app' });

(async () => {
  try {
    await localforage.defineDriver(sessionStorageDriver);
    await storage.setDriver('customSessionStorageDriver');
  } catch (err) {
    // If sessionStorage is not supported, use in-memory
    console.warn('Falling back to in-memory storage');
    storage = inMemoryStorage;
  }

  // Optional: Expose globally
  window.storage = storage;
})();

export { storage };
