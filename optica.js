// Removing database to not duplicate documents
db.dropDatabase();

// Providers
db.provider.insert({_id:1, name: 'Provider1', phone: '+34 66666666', fax: '156163054444', nif: '20000000Y', address:{street: 'Fake Street 1', number: 1, floor: 1, city: 'Narnia', postal_code: 23456, country: 'Atlantis'}});
db.provider.insert({_id:2, name: 'Provider2', phone: '+34 66666665', fax: '156163054144', nif: '20000001Y', address:{street: 'Fake Street 2', number: 2, floor: 2, city: 'Narnia', postal_code: 23056, country: 'Atlantis'}});
db.provider.insert({_id:3, name: 'Provider3', phone: '+34 66666667', fax: '156163054244', nif: '20000002Y', address:{street: 'Fake Street 3', number: 3, floor: 3, city: 'New Narnia', postal_code: 23156, country: 'Atlantis'}});
db.provider.insert({_id:4, name: 'Provider4', phone: '+34 66666668', fax: '156163054344', nif: '20000003Y', address:{street: 'Fake Street 4', number: 4, floor: 4, city: 'Narnia', postal_code: 23256, country: 'Atlantis'}});
db.provider.insert({_id:5, name: 'Provider5', phone: '+34 66666669', fax: '156163054444', nif: '20000004Y', address:{street: 'Fake Street 5', number: 5, floor: 5, city: 'New Narnia', postal_code: 23356, country: 'Atlantis'}});
db.provider.insert({_id:6, name: 'Provider6', phone: '+34 66666660', fax: '156163054544', nif: '20000005Y', address:{street: 'Fake Street 6', number: 6, floor: 6, city: 'Narnia', postal_code: 23556, country: 'Atlantis'}});
db.provider.insert({_id:7, name: 'Provider7', phone: '+34 66666661', fax: '156163054644', nif: '20000006Y', address:{street: 'Fake Street 7', number: 7, floor: 7, city: 'New Narnia', postal_code: 23656, country: 'Atlantis'}});
db.provider.insert({_id:8, name: 'Provider8', phone: '+34 66666662', fax: '156163054744', nif: '20000007Y', address:{street: 'Fake Street 8', number: 8, floor: 8, city: 'New Narnia', postal_code: 23756, country: 'Atlantis'}});
db.provider.insert({_id:9, name: 'Provider9', phone: '+34 66666663', fax: '156163054844', nif: '20000008Y', address:{street: 'Fake Street 9', number: 9, floor: 9, city: 'Narnia', postal_code: 23856, country: 'Atlantis'}});
db.provider.insert({_id:10, name: 'Provider10', phone: '+34 66666664', fax: '156163014444', nif: '20000009Y', address:{street: 'Fake Street 10', number: 10, floor: 10, city: 'Narnia', postal_code: 23956, country: 'Atlantis'}});

// Client
for (let i = 1; i <= 15; i++) {
    if (i % 2 == 0) {
        db.client.insert({_id: i, name: `Customer ${i}`, address: `Fake Street ${i}, New Narnia`, phone: `+34 ${666666+i}`, email: `email${i}@email.email`, registration_date: new Date()});
    } else {
        db.client.insert({_id: i, name: `Customer ${i}`, address: `Fake Street ${i}, Narnia`, phone: `+34 ${666666+i}`, email: `email${i}@email.email`, registration_date: new Date(), recommended_by: i - 1});
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getRandomFloat(max, decimals=4) {
    return (Math.random() * max).toFixed(decimals);
}

// Glasses 
const frameTypes = ['floating', 'metal', 'paste']
for (let i = 1; i <= 25; i++) {
    db.glasses.insert({_id: i, id_provider: getRandomInt(10), id_client: getRandomInt(15), brand: `Brand${i}`,  lenses: [getRandomFloat(5), getRandomFloat(5)], frame: frameTypes[getRandomInt(frameTypes.length-1)], frame_color: 'red', glasses_color: 'none', price: getRandomFloat(300.43), sold_by: `Employee${i}`, sold_date: new Date()}); 
}


