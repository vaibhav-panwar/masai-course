function validateString(string){
    const regex = /^[A-Z][a-z]*-\d{10}$/;
    if(regex.test(string)){
        return true
    }
    return false
}
console.log(validateString(process.argv[2]));