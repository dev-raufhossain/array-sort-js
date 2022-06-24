

var x = ["kalam", "babaul", "sanarul", "ripon", "muhin","asif", "zahidul"];
x.sort();
console.log(x);
var y = [90, 4 , 58, 34, 88, 23, 44, 76, 70, 12, 21, 43,];
y.sort(function(a, b){
    return a - b;
});
y.reverse();
console.log(y);
