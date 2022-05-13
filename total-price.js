const product = [

    { name: 'Laptop', price: 50000, quentity: 10 },

    { name: 'phone', price: 30000, quentity: 8 },

    { name: 'watch', price: 2000, quentity: 20 },

    { name: 'shart', price: 5000, quentity: 25 }
]

//  let totalPrice = 0;
// for (const i of product) {

//     totalPrice = totalPrice + i.price;

// }
// console.log(totalPrice);
let cartTotal = 0;
for (const i of product) {
    console.log(i);
    const productTotal = i.price * i.quentity;
    console.log(productTotal)
    cartTotal = cartTotal + productTotal;
    console.log(cartTotal)


}
console.log('Total tk : ', cartTotal);