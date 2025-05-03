const { LocalStorage } = require('node-localstorage');
global.sessionStorage = new LocalStorage('./session_data');
// {./session_data}：session 資料儲存的資料夾路徑，可自行更換。

// 建立一個 Session 類別來管理網頁 session
class Session {
    constructor() {
        // 可以根據需要初始化
    }

    // 使用 getter 方法取得 session 資料
    get(key) {
        return sessionStorage.getItem(key);
    }

    /*
    你在 Node.js 執行時，sessionStorage 只存在於瀏覽器環境，Node.js 沒有這個物件。
    如果要在 Node.js 測試這段程式，可以用 npm 套件模擬 sessionStorage，例如 node-localstorage。
    安裝套件：
    npm install node-localstorage
    */

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



// 使用 Proxy 建立更強大的 session 管理
const sessionHandler = {
    get: function (target, prop) {
        return sessionStorage.getItem(prop);
    },

    set: function (target, prop, value) {
        sessionStorage.setItem(prop, value);
        return true;
    },

    deleteProperty: function (target, prop) {
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