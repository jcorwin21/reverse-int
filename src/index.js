module.exports = function reverse (n) {
    const str = '' + Math.abs(n);
    const arr = [...str];
    const rev = arr.reverse();
    const joined = rev.join('');
    return +joined;
}
