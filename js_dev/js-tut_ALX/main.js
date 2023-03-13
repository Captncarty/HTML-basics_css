const myHeading = document.querySelector('h1'); //refernce to <h1> element
myHeading.textContent = "hello world";
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('i love chocolate icecream');
} else {
    alert('chocolate is more fun');
}

document.querySelector("button").addEventListener("click", () => {
    alert("More chocolate fantasy!");
});