var a = {n:1};
var b = a;
a.x = a = {n:2};
// alert () 是瀏覽器內建的函式，無法在 Node.js 環境中直接使用。
//alert(a.x);
//alert(b.x);
console.log(a.x);
console.log(b.x);