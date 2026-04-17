// 1. 定義原始陣列
const task = ["Task", "Completed"];

// 2. 使用 setTimeout 設定延遲執行
// 第一個參數是箭頭函數，第二個參數是 2000 毫秒 (2秒)
setTimeout(() => {
    // 使用 join(" ") 將陣列中的元素用空格串接起來
    const result = task.join(" ");
    
    // 輸出結果
    console.log(result); // 2 秒後輸出: "Task Completed"
}, 2000);

// 3. 額外測試：印出一行文字確認它是非同步執行的
console.log("計時開始，請等待 2 秒...");