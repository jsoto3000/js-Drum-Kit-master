// alert("hello World");

/*
getElementsByClassName doesnt return an array, but a
HTMLCollection in most, or a NodeList is some browsers
(Mozilla ref). Both of these types are Array-Like,
(meaning that they have a length property and the
objects can be accessed via their index), but are not
strictly an Array or inherited from an Array. (meaning
other methods that can be performed on an Array cannot
be performed on these types)
*/

// var classButton = document.getElementsByClassName("drum");

var classButton = document.querySelectorAll(".drum");

var clickButton = function() {
    alert("I got clicked!");
};

for (var i = 0; i < classButton.length; i++) {
    classButton[i].addEventListener('click', clickButton, false);
}
