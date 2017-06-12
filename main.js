$(function() {
    console.log("connected");

    //Game Categories, Questions and Dollar Values

    var gameInfo = [

        {
            category: "Potent Potables",
            questions: [{
                    q: "First brewed in Mexico in 1897, this beer is best known for its commercials, which feature a rather intriguing, worldly gentleman.",
                    a: "What is Dos Equis?",
                    p: "$200"
                },

                {
                    q: "A 'White Russian' consists of 2 parts vodka, 1 part fresh cream, and 1 part this.",
                    a: "What is coffee liquer?",
                    p: "$400"
                },

                {
                    q: "Once popular in the 1950's, this 'light liquor alternative', is making a comeback, with people all over Instagram posing with their #spritz.",
                    a: "What is Aperol?",
                    p: "$600"
                }
            ]

        },

        {
            category: "A Galaxy Far Far Away",
            questions: [{
                    q: "'Help me Obi Wan Kenobi, you're my only hope!' is the first line by this royal.",
                    a: "Who is Princess Leia?",
                    p: "$200"
                },

                {
                    q: "The first planet destroyed by the Death Star.",
                    a: "What is Alderaan?",
                    p: "$400"
                },

                {
                    q: "The foggy, swamp-like place where Yoda lives.",
                    a: "What is the Degobah system?",
                    p: "$600"

                }
            ]

        },

        {
            category: "Oh Say Can You 'Sea'",
            questions: [{
                    q: "This bird is commonly found near bodies of water. Don't feed them, or they might attack.",
                    a: "What is a seagull?",
                    p: "$200"
                },

                {
                    q: "The stitching that binds two pieces of fabric together.",
                    a: "What is the seam?",
                    p: "$400"
                },

                {
                    q: "A generic alternative to 'Happy Holidays!'",
                    a: "What is 'Season's Greetings!'?",
                    p: "$600"
                }

            ]

        },

        {
            category: "What a Tool",
            questions: [{
                    q: "Commonly used by Ikea for their build-your-own furniture, it can also be referred to as a hex key.",
                    a: "What is an allen wrench?",
                    p: "$200"
                },

                {
                    q: "A staple in most woodshops, this type of sander consists of a revolving strip of abrasive that is used to smooth out and shape the edges of a project.",
                    a: "What is a belt sander?",
                    p: "$400"
                },

                {
                    q: "An American brand, primarily known for its rotary tools.",
                    a: "What is Dremel?",
                    p: "$600"
                }
            ]

        },

        {
            category: "American Psychos",
            questions: [{
                    q: "David Berkowitz terrorized New York City from 1976-1977, and is usually referred to by this moniker.",
                    a: "What is Son of Sam?",
                    p: "$200"
                }, {
                    q: "Known as the 'Green River Killer', this man killed prostitutes and runaways in the Pacific Northwest from 1982-1998.",
                    a: "Who is Gary Ridgway?",
                    p: "$400"
                },

                {
                    q: "The movies 'Psycho' and 'Silence of the Lambs' are loosely based on this real-life killer.",
                    a: "Who is Ed Gein?",
                    p: "$600"
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
                console.log(correct.length);
                var win = $("<div>");
                win.addClass("modal");
                win.text("Nice job! You answered " + correct.length + "/15 questions correct! Are you ready for Double Becardy?");
                var dj = $("<button>");
                var djLink = $("a");
                djLink.attr("href", "./double.html");
                djLink.css("text-decoration", "none");
                djLink.text("Let's Go!");
                dj.append(djLink);
                win.append(dj);
                modal_container.append(win);
            } else {
                var lose = $("<div>");
                lose.addClass("modal");
                lose.text("Oh no! You only answered " + correct.length + "/15 questions correct. Want to try again?");
                var again = $("<button>");
                var tryAgain = $("a");
                tryAgain.attr("href", "./game.html");
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
        var input = $("input").val();
        if (input === q.a) {
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
        if (q === gameInfo[3].questions[1]) {
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
