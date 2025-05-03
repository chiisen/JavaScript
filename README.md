# JavaScript
JavaScript 進階實戰開發

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

[undefined vs null](./docs/undefined_vs_null.md)
[undefined vs null(程式碼)](./src/undefined_vs_null.js)

[object Reference Assignment](./docs/objectReferenceAssignment.md)
[object Reference Assignment(程式碼)](./src/objectReferenceAssignment.js)

[用 get/set 控制網頁 session](./docs/session.md)
[用 get/set 控制網頁 session(程式碼)](./src/session.js)