const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
//keydown returns keys pressed
textBox.addEventListener('keydown', event => output.textContent = `You pressed "${event.key}".`);
