//Supercharging the website
//Using Js and Document Object API to alternate logos
const myImage = document.querySelector('img');
myImage.onclick = () => {
    const source = myImage.getAttribute('src');
    if (source === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/chrome-logo.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-logo.png');
    };
    console.log('Image changed successfully!');
};
//reference to HTML elements
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
//add fucntions to help set personalized greetings
//setUserName() sets a "prompt" dialog box that collects user's info
function setUserName() {
    const myName = prompt('please enter your name.');
    if (!myName) {
        setUserName(); //make it persistent to avoid Null string
        return;
    }
    localStorage.setItem('name', myName); //localstorage stores data in the browser and retrieve it later using "setItem"
    myHeading.textContent = `JS is super Cool, ${myName}`;
};
//Condition Block:  initialization of code to structure APP when it Loads
if (!localStorage.getItem('name')) { //!localStorage checks if name exist else initiates setUserName to creates new name
    setUserName();
} else {
    const storedName = localStorage.getItem('name'); //if it exist, uses getItem to retrieve and set the textContent
    myHeading.textContent = `Js is super cool, ${storedName}`;
};
//fix the function in 'onclick' event handler with <button>, setUserName runs when clicked, thus different name can be fixed
myButton.onclick = () => {
    setUserName();
};
//fixing NULL return, when no value is entered or cancelled!

