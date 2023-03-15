#!/usr/bin/node

//Setting a prototype using object.create()
/*
const perPrototype = {
    greet() {
        console.log(`give it a try!`);
    },
};

const getPro = Object.create(perPrototype);

getPro.greet();
*/

//Setting a prototype using Constructor
//create Object Prototype
const testPrototype = {
    grp() {
        console.log(`${this.name} is the owner of Tesla`);
    },
};

//create a constructor:
function test(name) {
    this.name = name;
};

//Assign prototype to constructor to prototype:
Object.assign(test.prototype, testPrototype);

//construct object:
const collide = new test('Musk');

//using the prototype toget the method:
collide.grp();
