const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    let num = get_random_num();

    res.json(num);

});

app.listen(port, () => {

    console.log('Listening on port ' + port);

});

function get_random_num(){
    
    let num = Math.floor(Math.random() * 1000);

    result = {
        num: num
    }
    
    return result;
}