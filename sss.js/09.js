// 1. 給定的原始陣列
const contents = [
    "Very long content here", 
    "Another Very long content here", 
    "3rd Very long content here"
];

// 2. 邏輯：使用 map 遍歷陣列，對每個字串進行處理
// 處理方式：取出 0 到 10 的位置，然後拼接 "..."
const summaries = contents.map(text => {
    // substring(start, end) 會從索引 start 取到 end (不含 end)
    return text.substring(0, 10) + "...";
});

// 3. 輸出結果
console.log("處理後的摘要：");
console.log(summaries);

/* 預期輸出:
[
  'Very long ...',
  'Another Ve...',
  '3rd Very l...'
]
*/