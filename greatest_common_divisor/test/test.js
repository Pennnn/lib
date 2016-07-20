var expect = require('chai').expect;
var gcd = require('../greatest_common_divisor').gcd;

describe('greatest common divisor test', function() {
    it('小的数为最大公约数:', function () {
        expect(gcd(10, 5)).to.be.equal(5);
        expect(gcd(5, 10)).to.be.equal(5);
    });
    it('拥有最大公约数', function () {
        expect(gcd(9, 12)).to.be.equal(3);
    })
    it('没有最大公约数', function () {
        expect(gcd(17,5)).to.be.equal(1);
    });
});
