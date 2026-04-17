// 使用 IIFE (立即執行函數) 的標準語法：(function() { ... })();
(function() {
    // 內部定義區域變數
    const count = 100;
    
    // 執行時直接印出結果
    console.log("Count is: " + count);
})();

// 測試：驗證外部是否無法存取
try {
    console.log(count); 
} catch (e) {
    console.log("外部無法存取 count，驗證成功！"); 
    // 這裡會報錯 ReferenceError，因為 count 只存在於 IIFE 的作用域內
}