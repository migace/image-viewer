let instance = null;

export const DEFAULT_KEY = 'images';
export const MAX_ITEMS = 10;

export class LocalStorageService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  get = (key = DEFAULT_KEY) => JSON.parse(localStorage.getItem(key)) || [];

  save = (key = DEFAULT_KEY, data) => {
    if (data.length < MAX_ITEMS) {
      localStorage.setItem(DEFAULT_KEY, JSON.stringify(data));
    }
  }

  overwrite = (key = DEFAULT_KEY, data) => {
    const current = this.get(key);

    this.save(key, Array.from(new Set([...current, data])));
  }

  remove = (key = DEFAULT_KEY, item) => {
    const data = this.get(key);
    const newData = data.filter((el) => el !== item);

    this.save(key, newData);
  }

  has = (key = DEFAULT_KEY, item) => this.get(key).includes(item);
}
