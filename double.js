$(function() {
    console.log("connected");

    //Game Categories, Questions and Dollar Values

    var gameInfo = [

        {
            category: "Broadway Musicals",
            questions: [{
                    q: "This hit musical features a young girl trying to be one of the 'nicest kids in town'.",
                    a: "What is Hairspray?",
                    p: "$600"
                },

                {
                    q: "Lori Singer was holding out for hero in the movie that inspired this 1998 musical",
                    a: "What is Footloose?",
                    p: "$800"
                },

                {
                    q: "It takes two! In RENT, Mark & Joanne sing this duet, named after their mutual lover.",
                    a: "What is the Tango Maureen?",
                    p: "$1000"
                }
            ]

        },

        {
            category: "Pride and Prejudice",
            questions: [{
                    q: "The first pride parade was actually a riot outside of this now-famous watering hole in New York City’s Greenwich Village.",
                    a: "What is the Stonewall Inn?",
                    p: "$600"
                },

                {
                    q: "‘Coming out is the most political thing you can do’ is quote from this man, the first openly gay elected official in California.",
                    a: "Who is Harvey Milk?",
                    p: "$800"
                },

                {
                    q: "This symbol, once used by the Nazis as a badge to identify gay men, has been recently taken back and has become a symbol of power for the movement.",
                    a: "What is the pink triange?",
                    p: "$1000"

                }
            ]

        },

        {
            category: "It's Rhyme Time!",
            questions: [{
                    q: "A dirigible for a primate.",
                    a: "What is a chimp blimp?",
                    p: "$600"
                },

                {
                    q: "A sorceror snowstorm.",
                    a: "What is a wizard blizzard?",
                    p: "$800"
                },

                {
                    q: "A fish tank filled with this chemical, atomic number 56.",
                    a: "What is a barium aquarium?",
                    p: "$1000"
                }

            ]

        },

        {
            category: "Quotes from Film",
            questions: [{
                    q: "'I love the smell of napalm in the morning.'",
                    a: "What is Apocalypse Now?",
                    p: "$600"
                },

                {
                    q: "'Greed, for lack of a better word, is good.'",
                    a: "What is Wall Street?",
                    p: "$800"
                },

                {
                    q: "'Carpe diem. Seize the day, boys. Make your lives extraordinary.'",
                    a: "What is Dead Poets Society?",
                    p: "$1000"
                }
            ]

        },

        {
            category: "Remarkable Women",
            questions: [{
                    q: "She won the Nobel Prize in 1903 & 1911 for her significant contributions to the field of science. Specifically, her discovery of Radon.",
                    a: "Who is Marie Curie?",
                    p: "$600"
                }, {
                    q: "Self described herself as a ’black, lesbian, mother, warrior, poet’, she published nearly 20 pieces of literature, all themed around her myriad of life experiences.",
                    a: "Who is Audre Lorde?",
                    p: "$800"
                },

                {
                    q: "Mae Jamison is an engineer, physician and NASA astronaut, that is best known for being the first this",
                    a: "What is African-American woman in space.",
                    p: "$1000"
                }

            ]

        }

    ]


    //Global Variables - variables I need to use more than once in multiple places

    var body = $("body");
    var board = $("#board");
    var modal_container = $(".modal-container");
    var correct = [];
    var incorrect = [];



 /*/This function, fired inside the createModal function by the submit button,
    checks to see if all of the questions have been answered, and if so, the conditional checks if you've won or lost/*/

    var checkForWin = function() {
        var sum = (correct.length + incorrect.length);
        if (sum === 15) {
            if (correct.length > incorrect.length) {
                var win = $("<div>");
                win.addClass("modal");
                win.text("Nice job! You answered " + correct.length + "/15 questions correct! Are you ready for Final Becardy?");
                var final = $("<button>");
                var finalLink = $("a");
                finalLink.attr("href", "./final.html");
                finalLink.css("text-decoration", "none");
                finalLink.text("Let's Go!");
                final.append(finalLink);
                win.append(final);
                modal_container.append(win);
            } else {
                var lose = $("<div>");
                lose.addClass("modal");
                lose.text("Oh no! You only answered " + correct.length + "/15 questions correct. Want to try again?");
                var again = $("<button>");
                var tryAgain = $("a");
                tryAgain.attr("href", "./double.html");
                tryAgain.css("text-decoration", "none");
                tryAgain.text("Try Again!");
                again.append(tryAgain);
                lose.append(again);
                modal_container.append(lose);
            }
        }
    }


/*/This function, fired inside the createModal function by the submit button, checks to see if the 
    answer entered is correct by comparing it to the information in the array /*/

    var checkAnswer = function(q) {
        var input = $("input");
        if (input.val() === q.a) {
            correct.push(q);
        } else {
            incorrect.push(q);
        }
    }



/*/This function creates all the modals! It takes two parameters, the question and the cell 
clicked on by the user. It calls the checkAnswer, checkForWin, and dailyDouble functions within it./*/

    var createModal = function(q, c) {
        var modal = $("<div>");
        modal.addClass("modal");
        modal.text(q.q);
        modal.css("display", "none");

        var submit = $("<button>");
        submit.attr("id", "submit");
        submit.text("submit");
        submit.on("click", function() {
            c.off();
            checkAnswer(q);
            modal.remove();
            checkForWin();

        })


        var input = $("<input>");
        input.attr({
            type: "text",
            name: "input",
            value: ""
        })
        modal.append(input);
        modal.append(submit);

        var xOut = $("<button>");
        xOut.attr("id", "x");
        xOut.text("close");
        xOut.click(function() {
            modal.remove();
        })
        modal.append(xOut);

        modal_container.append(modal);
        dailyDouble(q);
        modal.fadeToggle("fast");
    }



//This function creates my game board!

    gameInfo.forEach(function(name) {
        var rowDiv = $("<div>");
        rowDiv.addClass("category");
        var title = $("<div>");
        title.addClass("category_title");
        title.text(name.category);
        rowDiv.append(title);
        board.append(rowDiv);
        name.questions.forEach(function(question) {
            var cellDiv = $("<div>");
            cellDiv.addClass("q");
            cellDiv.text(question.p);
            cellDiv.on("click", function() {
                createModal(question, cellDiv);
            });
            rowDiv.append(cellDiv);
        })
    })

// This function creates a Daily Double modal for the questions designated as Daily Doubles!

    var dailyDouble = function(q) {
        if (q === gameInfo[2].questions[2] || q === gameInfo[1].questions[1]) {
            var double = $("<div>");
            double.animate({
            height: "400px",
            width: "600px",
            }, 'fast');
            double.addClass("double");
            double.text("DAILY DOUBLE!");
            var go = $("<button>");
            go.text("Ready?");
            go.on("click", function() {
                double.remove();
            })
            double.append(go);
            modal_container.append(double);
        }

    }



})
