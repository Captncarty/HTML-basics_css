const button = document.querySelector('#butt');
const heading = document.querySelector('#head');

button.onclick = () => {
    const name = prompt('what is your name?');
    alert(`Hello ${name}, nice to see you!`);
    heading.textContent = `welcome ${name}`;
}