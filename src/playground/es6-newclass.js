class Person {
    constructor(name='Anonymous', age=0) {
        this.name = name;   
        this.age = age;
    }
    getGreeting() {
        // return 'Hi. I am ' + this.name;
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        return `${description} has ${this.major}`;
    }
}

class Traveler extends Person {
    constructor(name, age, major, city) {
        super(name, age, major);
        this.city = city
    }
    getDescription() {
        return `I am ${this.name}. I'm visiting ${this.city}`;
    }
}

const me = new Traveler('Jay Desai', 24, 'Computer Science', 'Peterborough');
console.log(me.getDescription());

const other = new Traveler ();
console.log(other.getDescription());