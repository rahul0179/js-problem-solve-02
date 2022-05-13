const phones = [
    { name: 'Samsung S5', price: 40000, camera: 10, storage: 32 },
    { name: 'Mi note7', price: 20000, camera: 10, storage: 32 },
    { name: 'Walton S3', price: 22000, camera: 8, storage: 16 },
    { name: 'Oppo A2', price: 35000, camera: 8, storage: 32 },
    { name: 'Nokia S71', price: 26000, camera: 10, storage: 16 },
    { name: 'Htc hino', price: 40000, camera: 12, storage: 32 }

]
console.log(phones.length);

let cheapest = phones[0];
for (const phone of phones) {

    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}

console.log(cheapest);