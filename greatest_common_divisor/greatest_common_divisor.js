function gcd(num1, num2) {
    if (num1 % num2 === 0) return num2;
    var r = num1 % num2;
    return gcd(num2, r);
}

module.exports = {
    gcd : gcd
};