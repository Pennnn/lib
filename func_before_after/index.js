Function.prototype.before = function(beforeFn) {
    var self = this;
    return function() {
        beforeFn.apply(this, arguments);
        return self.apply(this, arguments);
    }
}

Function.prototype.after = function(afterFn) {
    var self = this;
    return function() {
        var ret = self.apply(this, arguments);
        afterFn.apply(this, arguments);
        return ret;
    }
};

//@test
function test() {
    console.log(2);
}
test = test.before(function () {
    console.log(1);
});

test(); // 1 2

test = test.after(function() {
    console.log(3);
})

test(); // 1 2 3