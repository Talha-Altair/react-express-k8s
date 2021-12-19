function get_random_num(){
    
    let num = Math.floor(Math.random() * 1000);

    result = {
        num: num
    }
    
    return result;
}

module.exports = { get_random_num };