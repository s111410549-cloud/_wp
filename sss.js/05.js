// 1. 定義 fetchData 函數
// id: 要抓取的資料編號, callback: 處理結果的回呼函數
function fetchData(id, callback) {
    // 2. 邏輯：在函數內根據傳入的 id 建立一個資料物件
    const data = { 
        id: id, 
        status: "success" 
    };

    // 3. 執行：呼叫 callback
    // 按照 Node.js 慣例：第一個參數傳錯誤 (null 代表沒錯誤)，第二個傳資料
    callback(null, data);
}

// 4. 驗證執行
fetchData(99, (err, result) => {
    if (err) {
        console.error("發生錯誤：", err);
        return;
    }
    
    console.log("成功抓取資料：");
    console.log(result); // 預期輸出: { id: 99, status: 'success' }
});