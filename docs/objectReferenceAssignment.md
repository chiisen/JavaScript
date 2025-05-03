程式執行結果如下：

```javascript
var a = {n:1};
var b = a;
a.x = a = {n:2};
alert(a.x);
alert(b.x);
```

**執行流程解析：**

1. `var a = {n:1};`
   - a 指向物件 `{n:1}`

2. `var b = a;`
   - b 也指向同一個物件 `{n:1}`

3. `a.x = a = {n:2};`
   - 這行有兩個動作，賦值運算是從右到左：
     - 先執行 `a = {n:2}`，此時 a 指向新的物件 `{n:2}`，b 仍指向原本的 `{n:1}`
     - 然後將 `{n:2}` 指派給「原本 a（即 b 指向的物件）」的屬性 x，所以 b 指向的物件變成 `{n:1, x: {n:2}}`

4. `alert(a.x);`
   - a 現在指向 `{n:2}`，這個物件沒有 x 屬性，所以結果是 `undefined`

5. `alert(b.x);`
   - b 指向 `{n:1, x: {n:2}}`，所以 b.x 是 `{n:2}`，alert 會顯示 `[object Object]`

---

## **最終答案**

```
undefined
[object Object]
```

---

**補充說明**：  
如果你用 `console.log(b.x)` 會看到 `{ n: 2 }`，但 `alert` 會顯示 `[object Object]`。
