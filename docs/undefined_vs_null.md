## undefined vs null

1. **增加情境或問題**：
   ```javascript
   請檢視以下程式碼並回答問題：
   
   var x;
   if(typeof x === "undefined") {
     // 程式區塊
   }
   
   問題：
   1. 上述條件判斷會成立嗎？為什麼？
   2. 若將第一行改為 `let x = null;`，條件判斷結果會如何？
   3. 若完全不宣告變數 x，直接使用 `if(typeof x === "undefined")`，結果如何？
   ```

2. **加入變化以測試深度理解**：
   ```javascript
   var x;
   console.log(typeof x);
   console.log(x === undefined);
   console.log(typeof x === "undefined");
   console.log(x == null);
   
   請說明以上每行輸出結果及原因。
   ```

3. **測試對作用域的理解**：
   ```javascript
   function test() {
     var y;
     if(typeof x === "undefined" && typeof y === "undefined") {
       return true;
     }
     return false;
   }
   var x;
   console.log(test());
   
   這段程式碼會返回什麼？為什麼？
   ```

## 標準答案寫法建議

一個完整的答案應該包含：

1. **條件判斷結果**：清楚說明條件是否成立

2. **原理解釋**：解釋 JavaScript 中 `undefined`、變數宣告和 `typeof` 運算子的工作原理

3. **相關知識點**：提及 JavaScript 的變數提升、不同宣告方式（var/let/const）的差異、`undefined` vs `null` 等

4. **最佳實踐建議**：例如建議使用 `===` 而非 `==`，或現代 JavaScript 中偏好 `let/const` 而非 `var`

5. **程式碼輸出示例**：

```javascript
var x;
console.log(typeof x); // "undefined"
console.log(x === undefined); // true
console.log(typeof x === "undefined"); // true

// 變數不存在與 undefined 的區別
var y = undefined;
console.log(typeof y); // "undefined"
console.log(typeof z); // "undefined"，即使 z 未宣告
console.log(y); // undefined
console.log(z); // ReferenceError: z is not defined
```

這樣的題目設計和回答方式能夠更全面地測試應考者對 JavaScript 變數、型別和相關概念的深入理解。