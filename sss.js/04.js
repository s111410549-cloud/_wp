// 1. 建立一個空的物件，模擬 URL 參數容器
const params = {};

// 2. 動態新增一個鍵 (Key) 為 "id"，值 (Value) 為 99 的屬性
// 方式一：點符號新增 (最常用)
params.id = 99;

// 方式二：中括號新增 (當鍵名是變數時必須用這個)
// params["id"] = 99; 

// 3. 驗證結果
console.log("生成的 params 物件內容：");
console.log(params); // 預期輸出: { id: 99 }

// 4. 測試存取
console.log(`取得的 ID 是: ${params.id}`); // 輸出: 取得的 ID 是: 99