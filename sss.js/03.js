// 1. 給定的資料陣列
const posts = [
    { id: 1, t: "A" }, 
    { id: 2, t: "B" }
];
// 2. 宣告一個空字串用來存放生成的 HTML
let html = "";
// 3. 使用 forEach 遍歷陣列
// post 代表目前處理的那個物件 (例如第一輪是 {id: 1, t: "A"})
posts.forEach(post => {
    // 使用樣板字串 (反引號) 與 ${} 語法來拼接字串
    // 把 post.t 的值放入 <div> 標籤中
    html += `<div>${post.t}</div>`;
});

// 4. 驗證結果
console.log("生成的 HTML 內容：");
console.log(html); 
// 預期輸出: <div>A</div><div>B</div>