// 1. 定義 calculateTotal 函數
// cart: 商品價格陣列, discountFunc: 處理折扣的 callback 函數
function calculateTotal(cart, discountFunc) {
    // 使用 reduce 將陣列中的所有數字相加
    // acc 是累加器, cur 是目前處理的數字
    let sum = cart.reduce((acc, cur) => acc + cur, 0);
    
    // 將計算好的總和 sum 傳入 discountFunc 處理，並回傳結果
    return discountFunc(sum);
}

// 2. 測試資料：商品價格 [100, 200, 300]
const myCart = [100, 200, 300];

// 3. 呼叫函數並傳入匿名函數 (邏輯：總價 - 50)
const finalPrice = calculateTotal(myCart, function(total) {
    return total - 50;
});

// 4. 輸出結果
console.log("原始總價: 600");
console.log("折價後總價:", finalPrice); // 預期輸出: 550