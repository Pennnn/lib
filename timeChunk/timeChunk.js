function timeChunk(arr, fn , count) {
    var timer,
        length = arr.length;

    var start = function() {
        for(var i = 0; i < Math.min(count, length); i++) {
            var temp = arr.shift();
            typeof fn == 'function' && fn(temp);
        }
    }
    return function() {
        timer = setInterval(function () {
            if (arr.length === 0) {
                return clearInterval(timer);
            }
            start()
        }, 200);
    }
}

//test
var func = timeChunk([1,2,3,4], function(n) {
    console.log(n)
},1);
func();