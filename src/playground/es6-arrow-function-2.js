// If you are using ES6 we are not allowed to used the aruguments properties.
const add = function (a,b) {
    console.log(arguments)
    return a+b;
}

console.log(add(5,1,100))

const user = {
    name: 'Jay',
    cities: ['Peterborough', 'Toronto', ' Brampton'],
    printPlacedLived () {
        return  this.cities.map((city) => this.name + ' has lived in ' + city);
    }

};

console.log(user.printPlacedLived());

const multiplier = {
    //numbers in array
    //multiplerBy - single number
    //multiply  - return the all number in arrays after multiply with multiperBy 
    num: ['1', '2', '3'],
    multiplerBy: 5,
    multiply() {
        return this.num.map((number) => 'New Array is: ' + number * this.multiplerBy);
    }
};

console.log(multiplier.multiply());