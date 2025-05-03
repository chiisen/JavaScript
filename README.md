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
[排序)](./src/sort.js)  

