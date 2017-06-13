# Becardy---A-Trivia-Game
## My first project as a student with General Assembly. The assignment was to create a game, so I chose to model mine after my favorite game show, Jeopardy!

### Approach:
My approach for this game was to create an interactive trivia game with a smooth user experience to make for an enjoyable game, and paying tribute to classic Jeopardy without simply creating a copy.  

### Technologies:
I used jQuery to create almost everything you see on the pages. I have a nested forEach to create my board, which calls the createModal function. I opted to use modals for my questions because they are smoother and less cumbersome than alerts, and I was able to customize them to match the flow of my styling. 

The createModal function creates the modals for each question on the board (drawing data from my giant nested array of objects), and also: removes the event listener from the box (so that questions cannot be answered twice), calls the checkAnswer function to determine if the answer given is correct (again referencing the corresponding answer in my array), removes the modal once the answer has been submitted, and checks to see if the game has been won (if all 15 questions have been answered, it will display the amount right out of 15 and either give you a link to the next round or a link to try again). In Final Becardy, the submit button also turns off the music that is triggered by clicking on the category.

As each question is submitted, all correct answers are pushed into a correct array, and all incorrect answers are pushed to an incorrect array. It is the length of these two arrays that is compared in the checkForWin function. 

I used flexbox for my CSS styling and I found it only slighty easier to manipulate as my game board is a grid. However, styling was one of my major challenges in this game as I still haven't full grasped all of the different hierarchical rules. All in all I believe I was able to achieve the look I was going for, but I do hope to gain more knowledge of flexbox as I continue through WDI.

### Important App Info:
Though this page is responsive to smaller screen sizes, due to the nature of the game board and modals, it is best played with the browser window at 800px or larger.


