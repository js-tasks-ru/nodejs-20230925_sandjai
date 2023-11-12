function sum(a, b) {

    if (ifNumber(a) && ifNumber(b)) {
        return a + b;
    } else throw new TypeError('Hello');
}

function ifNumber(item) {
    if ((typeof item === 'number') && (!isNaN(item))) {
        return true;
    } else return;
}



module.exports = sum;
