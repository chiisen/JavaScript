# JavaScript
JavaScript 進階實戰開發

---

# 讓 code-runner 輸出到 Terminal
GitHub Copilot 只有 `#terminalLastCommand`  
無法取得 【輸出】視窗的訊息  
所以調整 `code-runner.runInTerminal`  
方便分析錯誤，不用複製貼上，省麻煩。  

## 設定預設終端機
```shell
terminal.integrated.defaultProfile
```
`Command Prompt` 是 `cmd.exe`  
`PowerShell` 是 `PowerShell 7.5.1`  

---

## 常見問題

**1. var、let、const 有什麼差別？什麼時候該用哪個？**

- `var`：有*函式作用域*（function scope），會發生*變數提升*（hoisting），可以重複宣告，容易造成預期外的行為。
- `let`：有*區塊作用域*（block scope），不會被重複宣告，也會提升但不會初始化（TDZ，暫時性死區）。
- `const`：同樣有*區塊作用域*，宣告時必須初始化，且不能重新賦值（但如果是物件或陣列，內容還是可以改變）。

**建議：**
- 盡量用 `let` 或 `const`，只有在需要變數重複宣告或兼容舊程式碼時才用 `var`。

---

**2. 什麼是閉包（Closure）？請舉例說明。**

- *閉包*是指函式可以「記住」並存取自己定義時的作用域（Scope），即使這個函式是在其原本作用域外被呼叫。
- 常見用途：實現資料私有、工廠函式、回呼等。

**範例：**
```javascript
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```
這裡 `counter` 函式就是一個閉包，能存取 `makeCounter` 作用域內的 `count` 變數。

---

**3. == 和 === 有什麼不同？**

- `==`（寬鬆等於）：比較時會進行*型別轉換*，只要值相等就回傳 `true`。
- `===`（嚴格等於）：*不會型別轉換*，必須型別和值都相等才回傳 `true`。

**範例：**
```javascript
0 == '0'     // true
0 === '0'    // false
null == undefined // true
null === undefined // false
```
建議在實務上盡量使用 `===`，避免型別轉換造成的 bug。

---

[undefined vs null](./docs/undefined_vs_null.md)  
[undefined vs null(程式碼)](./src/undefined_vs_null.js)  

[object Reference Assignment](./docs/objectReferenceAssignment.md)  
[object Reference Assignment(程式碼)](./src/objectReferenceAssignment.js)  

[用 get/set 控制網頁 session](./docs/session.md)  
[用 get/set 控制網頁 session(程式碼)](./src/session.js)  

## 排序
```
var arr = [32,9,46,81,20,69];
var sort_arr= arr.sort(function(a, b){ return a - b; });
console.log(sort_arr); // [9, 20, 32, 46, 69, 81]
```
這是因為 arr.sort(function(a, b){ return a - b; }) 會將陣列依照數值由小到大排序。  
[排序](./src/sort.js)  


