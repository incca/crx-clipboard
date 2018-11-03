if (typeof chrome === 'undefined') {
  window.chrome = null;
}

export const getValue = (key: string) => {
  if (chrome && chrome.storage) {
    return new Promise((resolve) => {
      chrome.storage.local.get(key, (value) => {
        resolve(value[key] ? JSON.parse(value[key]) : undefined);
      });
    });
  } else {
    const value = window.localStorage.getItem(key);
    return Promise.resolve(value ? JSON.parse(value) : undefined);
  }
}

export const setValue = (key: string, value: any) => {
  if (value === null || value === undefined) {
    return Promise.resolve(true);
  }
  const valueStr = JSON.stringify(value);
  if (chrome && chrome.storage) {
    return new Promise((resolve) => {
      chrome.storage.local.set({[key]: valueStr}, () => resolve(true));
    });
  } else {
    window.localStorage.setItem(key, valueStr);
    return Promise.resolve(true);
  }
};

export const remove = (key: string) => {
  if (chrome && chrome.storage) {
    return new Promise((resolve) => {
      chrome.storage.local.remove(key, () => resolve(true));
    });
  } else {
    window.localStorage.removeItem(key);
    return Promise.resolve(true);
  }
}

export const clear = () => {
  if (chrome && chrome.storage) {
    return new Promise((resolve) => {
      chrome.storage.local.clear(() => resolve(true));
    });
  } else {
    window.localStorage.clear();
    return Promise.resolve(true);
  }
};

export const STORAGE_KEY = {
  RECENT: 'recentData',
};
