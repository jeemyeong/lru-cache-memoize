import LRU from 'lru-cache';

const memoize = (fn, { hasher = ((...args) => args.toString()), ...options } = {}) => {
  const cache = new LRU({ ...options });
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