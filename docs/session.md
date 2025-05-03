要解決「用 get/set 控制網頁 session」的問題，我需要使用 JavaScript 建立一個能夠管理網頁 session 的解決方案。

在 JavaScript 中，有幾種方式可以處理網頁 session：

1. 使用 sessionStorage
2. 使用 localStorage 
3. 使用 Cookies
4. 使用自定義的 getter 和 setter 方法

最符合題目中「get/set」控制的方式是使用 JavaScript 的 getter 和 setter 語法，結合 sessionStorage 來管理 session 資料。

以下是一個簡潔的解決方案：

```javascript
// 建立一個 Session 類別來管理網頁 session
class Session {
  constructor() {
    // 可以根據需要初始化
  }
  
  // 使用 getter 方法取得 session 資料
  get(key) {
    return sessionStorage.getItem(key);
  }
  
  // 使用 setter 方法設定 session 資料
  set(key, value) {
    sessionStorage.setItem(key, value);
    return true;
  }
  
  // 移除指定的 session 資料
  remove(key) {
    sessionStorage.removeItem(key);
    return true;
  }
  
  // 清除所有 session 資料
  clear() {
    sessionStorage.clear();
    return true;
  }
}

// 建立 session 管理實例
const session = new Session();

// 使用範例
session.set('username', 'john_doe');
session.set('isLoggedIn', 'true');

console.log(session.get('username')); // 輸出: john_doe
console.log(session.get('isLoggedIn')); // 輸出: true

// 移除特定資料
session.remove('isLoggedIn');

// 清除所有資料
// session.clear();
```

另一種更進階的方法是使用 JavaScript 的 Object.defineProperty 或是 ES6 的 Proxy 來實現更複雜的 get/set 行為：

```javascript
// 使用 Proxy 建立更強大的 session 管理
const sessionHandler = {
  get: function(target, prop) {
    return sessionStorage.getItem(prop);
  },
  
  set: function(target, prop, value) {
    sessionStorage.setItem(prop, value);
    return true;
  },
  
  deleteProperty: function(target, prop) {
    sessionStorage.removeItem(prop);
    return true;
  }
};

const sessionManager = new Proxy({}, sessionHandler);

// 使用範例
sessionManager.userId = "12345";
sessionManager.theme = "dark";

console.log(sessionManager.userId); // 輸出: 12345
console.log(sessionManager.theme); // 輸出: dark

// 移除屬性
delete sessionManager.theme;
```

這兩種方法都實現了「用 get/set 控制網頁 session」的功能，但第二種方法使用 Proxy 的方式可以提供更自然的對象屬性存取方式，使用起來更為直觀。

答案：使用 JavaScript 的 getter/setter 方法結合 sessionStorage 或使用 Proxy 物件來控制網頁 session，可以實現符合題目要求的「get/set 控制網頁 session」功能。