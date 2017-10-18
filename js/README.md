# The Amazing Following Box Timer

Using the small box displayed, write the necessary code so that when the user clicks on the document (anywhere) the box begins to follow the mouse. As the box follows, a timer begins counting up from 1.

When the user clicks again on the screen, the box will stop following the mouse, and the timer within it will stop ticking. Once clicked again it continues as it was previously, on and on.

Parts of the code and further explanation are provided in main.js.


## Tips for Getting Started

As always plan and experiment before attempting to fully solve any aspect of the code. A few experiments you can try:

- Move the box to fixed coordinates (left/top) using the console
- Add the mousemove listener to the document's click listener and log the "event" variable
- Get the event.x and event.y properties and spit them into the console to see if they change

Once you have all three, try to put those together, then start on the timer:

- Can you put any number in the box?
- Create a timer that runs forever and see if you can output a test message the console
- Try to stop the timer in the console using clearInterval()

Take things step-by-step and test along the way using the console before committing to any code solution.


## Additional ("Advanced") Learning:

- Adjust the position of the box so that it's centered under the mouse. You will need to know the dimension of the box (compare clientHeight and offsetHeight for the box, are they the same? What about if you add a border to the box in CSS?)
- Consider that the box may end up outside the parameters of the page. Can you prevent that from happening if you know where the  (Even if you're not sure immediately, try drawing out an example on paper. Write a solution in comments and then see if you can turn the English explanation into code)
- Why it is that if a user clicks on the box directly, the document registers the click? Experiment with this by adding click events that spits some output into the console from both the box's click and the document's click. What do you observe?
