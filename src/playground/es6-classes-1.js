class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi, my name is ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    // Override parent class getDescription method
    getDescription() {
        let description = super.getDescription()
        if (this.hasMajor()){
            description += ` ${this.name}'s major is ${this.major}.`
        }
        return description
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    hasHomeLocation() {
        return !!this.homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        if(this.hasHomeLocation()){
            greeting += ` I am visiting from ${this.homeLocation}.`
        }
        return greeting
    }
}

const traveller = new Traveller("Diego", 15, "Australia")

console.log(traveller.getGreeting())