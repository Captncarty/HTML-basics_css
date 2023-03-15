/* when key is pressed the browser will call the function provided
and will pass a parameter containing info about the event
including particular key the User pressed */
//Method 1:
function keylog(event) {
    console.log(`User pressed this ${event.key}!`);
}

textBox.addEventListener('keydown', function(event));


//Method 2: Using anonymous funct
textBox.addEventListener('keydown', function (event) {
    console.log(`User pressed this ${event.key}.`);
    });


//writing arrow instead of function
textBox.addEventListener('keydown', (event) => {
    console.log(`User pressed this ${event.key}.`);
    });


//if function contains a single line, get rid of the curly brackets {}
textBox.addEventListener('keydown', (event) => console.log(`User pressed this "${event.key}".`));

//if function takes a single arg/parameter, omit the brackets ()
textBox.addEventListener('keydown', event => console.log(`User pressed this "${event.key}".`));
