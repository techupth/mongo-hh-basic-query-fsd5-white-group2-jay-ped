// **Exercise #1**
// {
//     size: "small",
//     total_price: 8535.91,
//     quantity: 15,
//     customer_name: "Ced",
//     credit_card_type: null,
//     created_at: "2021-07-18T10:02:12Z",
//   }

// - ใช้ `findOne` ในการหาข้อมูล Document ของลูกค้าชื่อ `Cherlyn`
db.pizzaOrders.findOne({ customer_name: "Cherlyn" });

// - ใช้ `find` ในการหาข้อมูล Document ทั้งหมดที่จ่ายเงินด้วย Credit Card ของ `mastercard`
db.pizzaOrders.find({ credit_card_type: "mastercard" });

// - ใช้ `find` ในการหาข้อมูล Document ทั้งหมดที่สั่ง Pizza ขนาด `medium` โดย Limit จำนวนข้อมูลแค่ 5 Documents
db.pizzaOrders.find({ size: "medium" }).limit(5);
