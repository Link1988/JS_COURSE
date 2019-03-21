function Person (name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}

var person = new Person('Pedro');

console.log(person.getName());