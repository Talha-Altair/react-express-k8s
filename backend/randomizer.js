function get_random_num(){
    
    let num = Math.floor(Math.random() * 10000);

    result = {
        num: num,
        status: "success"
    }
    
    return result;
}

module.exports = { get_random_num };