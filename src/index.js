import { LRUMap } from 'lru_map'

const memoize = (fn, { hasher = ((...args) => args.toString()), max = 100 } = {}) => {
  const cache = new LRUMap(max);
  return (...args) => {
    const key = hasher(...args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
};

export default memoize;