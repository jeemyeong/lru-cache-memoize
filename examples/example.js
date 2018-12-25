const memoize = require('../lib').default;

const add = num => console.log(num) || num+1;
const memoAdd = memoize(add, {max: 2});
memoAdd(1); // Cache Miss (with logging 1)
memoAdd(1); // Cache Hit
memoAdd(2); // Cache Miss (with logging 2)
memoAdd(2); // Cache Hit
memoAdd(1); // Cache Hit
memoAdd(3); // Cache Miss (with logging 3)
memoAdd(1); // Cache Hit
memoAdd(2); // Cache Miss (with logging 2)