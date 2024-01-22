// **Exercise #2**

// - ใช้ `findOne` ในการหาข้อมูล Document ของลูกค้าชื่อ `Zoe`
//db.pizzaOrders.findOne({ customer_name: "Zoe" });
// {
//     _id: ObjectId('65aed9119ee3e43d375d1dd4'),
//     size: 'medium',
//     total_price: 7901.57,
//     quantity: 6,
//     customer_name: 'Zoe',
//     credit_card_type: 'mastercard',
//     created_at: 2021-02-23T09:31:20.000Z
//   }

// จากนั้นให้ทำการ Transform ข้อมูลให้เหลือแค่ Property `total_price` และ `customer_name`
db.pizzaOrders.findOne(
  {
    customer_name: "Zoe",
  },
  { total_price: 1, customer_name: 1 }
);

//result>>>>>>>>>>>>>>>>
//   {
//     _id: ObjectId('65aed9119ee3e43d375d1dd4'),
//     total_price: 7901.57,
//     customer_name: 'Zoe'
//   }
