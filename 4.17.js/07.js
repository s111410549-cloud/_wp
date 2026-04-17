// 1. 定義包含物件的陣列
const users = [
    { name: "Alice", age: 25 }, 
    { name: "Bob", age: 17 }
];

// 2. 使用 filter 搭配箭頭函數
// 這裡的 user 代表陣列中的每一個物件， age 屬性做判斷
const adults = users.filter(user => user.age >= 18);

// 3. 輸出結果
console.log(adults); 
