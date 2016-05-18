var throttle = function (fn, interval) {
    var timer,
        isFirstCall = true;
    return function () {
        var args = arguments,
            self = this;
        if (isFirstCall) {
            fn.apply(self, args);
            return isFirstCall = false;
        }
        if (timer) return;
        timer = setTimeout(function () {
            clearTimeout(timer);
            fn.apply(self, args);
            timer = null;
        }, interval);
    }
}

var timerFunc = {
    throttle: throttle
}

module.exports = timerFunc;