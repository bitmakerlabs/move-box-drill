// The box element in the interface
var box = document.getElementById('box');

// A clock in seconds
var secs = 0;

// Holds the running timer instance. Set back to null when you stop the timer
var timer = null;

// A function that gets the x and y position of the mouse when the mousemove event fires
// Assign the mouse x and y (found in the "event" object) to the left and top CSS values of the box
// Consider that the x and y coordinates are just int numbers and don't include a unit in 'px'
var movebox = function() {




}

// Add a listener that allows for a 'click' anywhere in the document
// When the click is heard, if the timer is NOT already running:
//  - Create a running interval timer to update the box every 1 second
//  - Attach a listener for 'mousemove' within the document (movebox)
// If it is already running:
//  - Stop the timer and set it back to null
//  - Remove the running mousemove event
// Note, you can equate the keyword value null to being !true, ie: !timer is true if null
addEventListener('click', function() {




});

// Advanced: Move the box up and left so that it's center with the mouse cursor
// Advanced: Try to keep the box from going off the screen by checking it's coordinates
// Advanced: Why does the click event for the document worth when we click the box? Experiment
