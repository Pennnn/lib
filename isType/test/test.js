var isType= require('../isType');
var expect = require('chai').expect;

describe('Array', function() {
  it('should return ture when value is a array object', function() {
    expect(isType.isArray([])).to.be.equal(true);

    expect(isType.isArray([1,2,3])).to.be.equal(true);

    expect(isType.isArray(new Array())).to.be.equal(true);

  });
  it('should return false when value is a not array object', function() {
    expect(isType.isArray(1)).to.be.equal(false);

    expect(isType.isArray({})).to.be.equal(false);

    var func = function() {};
    expect(isType.isArray(func)).to.be.equal(false);

    expect(isType.isArray(' ')).to.be.equal(false);	
  });
});

describe('String', function() {
  it('should return ture when value is a String', function() {
    expect(isType.isString('')).to.be.equal(true);

    expect(isType.isString('123456')).to.be.equal(true);

    expect(isType.isString(new String())).to.be.equal(true);

  });
  it('should return false when value is not a String', function() {
    expect(isType.isString(1)).to.be.equal(false);

    expect(isType.isString({})).to.be.equal(false);

    var func = function() {};
    expect(isType.isString(func)).to.be.equal(false);

    expect(isType.isString([])).to.be.equal(false);	
  });
});

describe('Number', function() {
  it('should return ture when value is a Number', function() {
    expect(isType.isNumber(123)).to.be.equal(true);

    expect(isType.isNumber(new Number())).to.be.equal(true);

    expect(isType.isNumber(new Number(123))).to.be.equal(true);

  });
  it('should return false when value is not a Number', function() {

    expect(isType.isNumber({})).to.be.equal(false);

    var func = function() {};
    expect(isType.isNumber(func)).to.be.equal(false);

    expect(isType.isNumber([])).to.be.equal(false);	
  });
});