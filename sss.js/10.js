// 1. 定義 checkAdmin 函數
function checkAdmin(role, callback) {
    if (role !== "admin") {
        // 如果不是管理員，回傳錯誤訊息給第一個參數
        callback("Access Denied", null);
    } else {
        // 如果是管理員，第一個參數傳 null (代表無錯誤)，第二個傳成功訊息
        callback(null, "Welcome, Administrator!");
    }
}

// 2. 測試狀況 A：身分不符 (錯誤情況)
console.log("--- 測試 A：一般使用者 ---");
checkAdmin("guest", (err, msg) => {
    if (err) {
        console.error("錯誤提示：", err); // 輸出: Access Denied
        return; // 這裡的 return 很重要，能確保後面不會執行
    }
    console.log(msg);
});

// 3. 測試狀況 B：身分符合 (成功情況)
console.log("\n--- 測試 B：管理員 ---");
checkAdmin("admin", (err, msg) => {
    if (err) {
        console.error("錯誤提示：", err);
        return;
    }
    console.log("成功訊息：", msg); // 輸出: Welcome, Administrator!
});