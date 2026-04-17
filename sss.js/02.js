// 1. 題目給定的資料結構
const req = { 
    body: { 
        title: "JS教學", 
        content: "內容在此", 
        author: "Gemini" 
    } 
};

// 2. 題目要求：用「一行」程式碼從 req.body 中取出 title 和 content
const { title, content } = req.body;
// 3. 驗證結果
console.log("取出後的 title:", title);     // 輸出: JS教學
console.log("取出後的 content:", content); // 輸出: 內容在此