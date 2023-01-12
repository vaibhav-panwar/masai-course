function getData(data) {
    let lprom = new Promise(function(resolve,reject){
        if(data%2===0 && typeof(data)==Number){
            resolve = "even"
        }
        else if(data%2!==0 && typeof(data)==Number){
            resolve = "odd";
        }
        else{
            reject = "error";
        }  
    })
    return lprom;
}

export default getData
