// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)
function Person(firstName, lastName, favoriteColor, favoriteNumber, family){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = [];
}
Person.prototype.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
};

//2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.

// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you adding an additional line of code to your Person constructor.
Person.prototype.addToFamily = function (familyMember){
    if (familyMember instanceof Person && !this.family.includes(familyMember)){
        this.family.push(familyMember)
    }
    return this.family.length;
}

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array. 

function map(fn){
    var newArray = [];
    for (var i = 0; i < this.length; i++){
        newArray.push(fn(this[i], i, this));
    }
    return newArray;
}

/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"
*/

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
};