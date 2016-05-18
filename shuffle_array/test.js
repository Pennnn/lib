//参考博客: http://weizhifeng.net/node-js-exports-vs-module-exports.html
//结果应该接近于4.5 才说明随机算法是真正的随机
var shuffle = require('./index').shuffle;
var arr = [0,1,2,3,4,5,6,7,8,9];
var res = [0,0,0,0,0,0,0,0,0,0];
var t = 10000;
for(var i = 0; i < t; i++){
    var sorted = shuffle(arr.slice(0));
    sorted.forEach(function(o,i){
        res[i] += o;
    });
}

res = res.map(function(o){
    return o / t;
});

console.log(res);