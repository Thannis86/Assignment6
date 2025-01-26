I have achieved all the goals and all of the stretch goals.

I used stack overflow at multiple points for assistance and a lot of guesswork.

This project has been a giant pain for me. My original version on project 3 in comparison was half the lines I created for this and substancially less complicated.

However, I have learned a lot through a lot of the issues I was having.

The biggest issue I had was with the shop buttons. I didn't want to end up with 20 buying boxes at once, so my original goal was to do it like how I did my first cookie clicker where instead of creating multiple buttons, i would have the text adjust. However, to do this I pocketed the button function inside the fetch, which I can't do in react. So to counter this, I reframed how I was doing it and set a variable to an object that the fetch function would fill with the API information. However, I thought this may be against the spirit of the project, so I changed this to doing a conditional rendering box instead which is what i was initially trying to avoid. After going to a dozen websites, i got a reference point that I thought may work, but I still had to adjust. Because of how the data was being used and how the shops were setup, I had to add an extra 1 to the current shop to have only the next shop upgrade render.

The other big issue I had was with having multiple effects in a component click. I started creating a function as standard, and only the console log function would work for the shops, but the function I created in the app file wouldn't. There was a lot of playing around , including shoving the function into a const, until I figured out to put a () after the prop in the function. This wasn't a thought originally because when shoving the prop into onClick, I didn't need to add them.

For the save and load buttons, these were a lot simpler than i thought they would be and I basically just copied what I had done in my week 3 assignment, but simpler.

After sorting all this out, getting everything looking nicer, hitting all the goals and stretch goals, I decided to create an array for the first shop to differentiate better the text between each of the shops. However, getting to 8pm on Sunday, I decided I had had enough of this for now and couldn't be bothered and just switched some of the text around.
