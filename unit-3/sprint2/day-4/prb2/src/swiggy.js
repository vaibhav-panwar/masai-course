function UserInfo(name, location) {
    this.name = name;
    this.location = location;
}

function serveFood(food) {
    return `Serving ${food} to ${this.name} in ${this.location}`;
}

function serveIn(name, location, food) {
    let userInfo = new UserInfo(name, location);
    let message = serveFood.call(userInfo, food);
    return message;

}

function billNote(total) {
    return `${this.name}'s bill is INR ${total}`
}
function generateInVoice(name,location,quantity,price) {
    let userInfo = new UserInfo(name, location);
    let total = quantity*price;
    let message = billNote.call(userInfo,total);
    return message;
 }

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
