#!/usr/bin/node
//creating a constructor;
/* Pattern 1
function createPerson(name, age) {
    const obj = {};
    obj.name = name;
    obj.age = age;
    obj.align = () => {
        console.log(`I'm ${name}, ${age} yrs old!`);
    };
    return obj;
};

const comp = createPerson('Mike', 44);

comp.align(); */

//Pattern 2: Using this(refers to the object it's nested in!
function createPer(name, age) {
    this.name = name;
    this.age = age;
    this.align = () => {
        console.log(`I'm ${this.name}, ${this.age} yrs old!`);
    };
};

const comp = new createPer('Tammy', 27);

comp.align();
