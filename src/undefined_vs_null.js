console.log("加入變化以測試深度理解\n");
var x;
console.log(typeof x);
console.log(x === undefined);
console.log(typeof x === "undefined");
console.log(x == null);


console.log("測試對作用域的理解\n");
function test() {
    var y;
    if (typeof x === "undefined" && typeof y === "undefined") {
        return true;
    }
    return false;
}
var x;
console.log(test());
// Output: true
