function myConstructor(n, p, c) {
    this.name = n;
    this.profession = p;
    this.city = c;
    this.performSkill = function () {
        console.log(`${this.name} is performing their skill as a  ${this.profession}  in  ${this.city}`);
    };
}

let myFriend1 = new myConstructor("Amar", "Singer", "Goa");
let myFriend2 = new myConstructor("Akbar", "Chef", "Mumbai");
let myFriend3 = new myConstructor("Anthony", "Migician", "Kashmir");

myFriend1.performSkill.call(myFriend2);
myFriend2.performSkill.call(myFriend3);
myFriend3.performSkill.call(myFriend1);







