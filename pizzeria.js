function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Removing database to not duplicate documents
db.dropDatabase();


// Province
for (let i = 1; i <= 5; i++) {
    db.province.insert({_id: i, name: `Province ${i}`});
}

// City 
for (let i = 1; i <= 15; i++) {
    let province = getRandomInt(5) + 1;
    db.city.insert({_id: i, name: `City ${i}`, province: `Province ${province}`, id_province: province});
}

// Product
const products = ['Pizza', 'Hamburger', 'Drink'];
const categories = ['Italian', 'American', 'Bullshit']
for (let i = 1; i <= 15; i++) {
    let product = products[getRandomInt(products.length-1)];
    db.product.insert({
        _id: i, 
        name: `${product} ${i}`, 
        type: product,
        description: `Description for ${product}`,
        image: 'https://picsum.photos/200/300',
        price: getRandomInt(100),
        category: product === 'Pizza' ? categories[getRandomInt(categories.length-1)] : '',
    });
}

// Shop
for (let i = 1; i <= 10; i++) {
    let province = getRandomInt(5) + 1;
    let city = getRandomInt(15) + 1;
    db.shop.insert({
        _id: i, 
        address: `Invented Street ${i}`,
        province: `Province ${province}`,
        city: `City ${city}`,
        id_province: province,
        id_city: city,
    });
}

// Employee
for (let i = 1; i <= 10; i++) {
    let shop = getRandomInt(10) + 1;
    db.employee.insert({
        _id: i, 
        name: `Employee ${i}`,
        surname: `Surname ${i}`,
        id_shop: shop,
        nif: `0000000Z`,
        phone: '999999999',
        job: i % 2 === 0 ? 'Kitchen' : 'Delivery'
    });
}

// Order 
for (let i = 1; i <= 20; i++) {
    let employee = getRandomInt(10) + 1;
    db.order.insert({
        _id: i,
        event_date: new Date(),
        type: i % 2 === 0 ? 'Takeaway' : 'Delivery',
        price: getRandomInt(100),
        id_shop: getRandomInt(10) + 1,
        delivered_at: i % 2 === 0 ? null : new Date(),
        id_employee: i % 2 === 0 ? null : employee,
        employee: i % 2 === 0 ? null : `Employee ${employee}`,
        products: Array.from({length: getRandomInt(13) + 1}, () => getRandomInt(15) + 1)
    });
}

// Client
for (let i = 1; i <= 15; i++) {
    let city = getRandomInt(15) + 1;
    let province = getRandomInt(5) + 1;
    db.client.insert({
        _id: i,
        name: `Client ${i}`,
        surname: `Surname ${i}`,
        address: `Invented Street ${i}`,
        postal_code: `00000`,
        city: `City ${city}`,
        id_city: city,
        province: `Province ${province}`,
        id_province: province,
        phone: '999999999',
        orders: Array.from({length: getRandomInt(3) + 1}, () => getRandomInt(20) + 1).map(idOrder => {
            return {
                id_order: idOrder,
                event_date: new Date(),
                price: getRandomInt(100)
            }
        })
    });
}