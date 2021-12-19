const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const randomizer = require('./randomizer');

app.get('/', (req, res) => {

    let num = randomizer.get_random_num();

    res.json(num);

});

app.listen(port, () => {

    console.log('Listening on port ' + port);

});