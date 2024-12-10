function myConstructor(n, p, c) {
    this.name = n;
    this.profession = p;
    this.city = c;

    // Method for performing a skill
    this.performSkill = function () {
        console.log(`${this.name} is performing their skill as a ${this.profession} in ${this.city}`);
    };
}

// Create objects for each friend
let myFriend1 = new myConstructor("Amar", "Singer", "Goa");
let myFriend2 = new myConstructor("Akbar", "Chef", "Mumbai");
let myFriend3 = new myConstructor("Anthony", "Magician", "Kashmir");

// Borrowing skills using .call()

// Amar (Singer) borrows Akbar's (Chef) skill
myFriend1.performSkill.call(myFriend2);  // Amar performs as Chef

// Akbar (Chef) borrows Anthony's (Magician) skill
myFriend2.performSkill.call(myFriend3);  // Akbar performs as Magician

// Anthony (Magician) borrows Amar's (Singer) skill
myFriend3.performSkill.call(myFriend1);  // Anthony performs as Singer








