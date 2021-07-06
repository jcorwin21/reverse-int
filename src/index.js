module.exports = function reverse (n) {
    const str = '' + n;
    const arr = [...str];
    const rev = arr.reverse();
    const joined = rev.join('');
    return +joined;
}
