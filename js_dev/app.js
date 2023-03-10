'use strict';

//event handler: a way to run a javascript function when an event happens on the page

const switcher = document.querySelector('.btn'); 
//document.querySelector; This function uses CSS selectors
//add handler for the 'click' event
//add a listener for the 'click' event
//And define an event handler function to be executed when click occurs

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    //toggle; modify  <body> element's class attribute (automatically adds or removes either themes classes)

    //updating label to show correct theme
    const ClassName = document.body.className;
    if(ClassName == 'light-theme') {
        this.textContent = 'Dark';
    } else {
        this.textContent = 'Light';
    }
    //Console Message; hidden from the webpage, readable in developer tools, Helpful in seeing result
    console.log('current class name: ' + ClassName);

    //recreate

});

/*var Button=document.getElementById('Button');
Clear all previous hover classes 
Button.classList.remove('HoverClass1','HoverClass2');
Set the desired hover class
Button.classList.add('HoverClass2'); */