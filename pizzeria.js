function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

  
// Removing database to not duplicate documents
db.dropDatabase();




// Order
const productOptions = ['Pizza', 'Hamburger', 'Drink'];
const categories = ['Italian', 'American', 'Bullshit']
const types = ['Take away', 'Delivery'];
for (let i = 1; i <= 15; i++) {
    
    let type = types[getRandomInt(types.length)];    
    let products = [];

    for (let z = 1; z <= getRandomInt(5); z++) {
        let product = productOptions[getRandomInt(productOptions.length)];    

        products.push({
            type: product, 
            name: `${product} ${z}`,
            description: "No sense description",
            image_url: 'https://picsum.photos/200/300',
            prize: getRandomInt(20),
            category: product === 'Pizza' ? `Category ${getRandomInt(3)}` : null,
        });
    }

    db.order.insert({
        ordered_at: new Date(),
        type,
        prize: getRandomInt(100),
        delivery_date: type === 'Delivery' ? new Date() : null,
        client: {
            name: `Client ${i}`,
            id_client: generateUUID()
        },
        employee: {
            name: `Employee ${i}`,
            id_employee: generateUUID()
        },
        products
    });
}

// Client
for (let i = 1; i <= 10; i++) {
    db.client.insert({
        name: `Client ${i}`,
        surnames: `Surnames ${i}`,
        address: `Address ${i}`,
        postal_code: `Postal code ${i}`,
        province: `Province ${getRandomInt(20)}`,
        city: `City ${getRandomInt(50)}`,
    });
}

// Shop
for (let i = 1; i <= 10; i++) {
    
    let employees = [];
    for (let z = 1; z <= getRandomInt(5); z++) {
        employees.push({
            name: `Employee ${i}`,
            surnames: `Surname ${i}`,
            nif: `0000000Z`,
            phone: '999999999',
            job: i % 2 === 0 ? 'Kitchen' : 'Delivery'
        });
    }

    db.shop.insert({
        address: `Address ${i}`,
        postal_code: `Postal code ${i}`,
        province: `Province ${getRandomInt(20)}`,
        city: `City ${getRandomInt(50)}`,
        employees

    });
}

