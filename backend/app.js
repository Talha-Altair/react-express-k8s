const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const randomizer = require('./randomizer');
const faker = require('faker');

app.get('/', (req, res) => {

    let num = randomizer.get_random_num();

    var randomCard = faker.helpers.createCard();

    result = {
        "id": num,
        "data": {
            "name": randomCard.name,
            "username": randomCard.username,
            "email": randomCard.email,
            "phone": randomCard.phone,
        },
    }

    res.json(result);

});

app.listen(port, () => {

    console.log('Listening on port ' + port);

});