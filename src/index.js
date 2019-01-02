import LRU from 'lru-cache';

const defaultOptions = {
  hasher: ((...args) => args.toString())
}

const memoize = (fn, options) => {
  const optionsWithDefault = {
    ...defaultOptions,
    ...options
  }
  const { 
    hasher 
  } = optionsWithDefault;
  const cache = new LRU({ ...optionsWithDefault});
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