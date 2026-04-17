// 1. 這是一串 JSON 格式的「字串」(注意它兩端有單引號包著，它現在只是文字)
const jsonStr = '{"title": "Post 1", "tags": ["js", "node"]}';

// 2. 邏輯：使用 JSON.parse() 把這串文字「解碼」成真正的 JavaScript 物件
let obj = JSON.parse(jsonStr);

// 3. 驗證：現在 obj 已經是活生生的物件了，我們可以像平常一樣用點符號或中括號
console.log("整個物件內容:", obj);

// 4. 題目要求：印出 tags 陣列中的「第二個」元素
// 陣列索引 (Index) 是從 0 開始，所以：
// [0] 是 "js"
// [1] 是 "node"
console.log("tags 陣列的第二個元素是:", obj.tags[1]);