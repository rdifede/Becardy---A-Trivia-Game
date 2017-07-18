$(function() {
    console.log("connected!");

    //Game Categories & Questions

    var final = [

        {
            category: "Famous Last Words",
            question: [{
                q: "'Tell your sister, you were right.'",
                a: "Who is Darth Vader?"
            }]

        },

        {
            category: "Name That Game",
            question: [{
                q: "'It's a zany action, it's a crazy contraption, the fun is catching, its' this board game.",
                a: "What is Mousetrap?"
            }]

        },

        {
            category: "Emo Forever",
            question: [{
                q: "'Vindicated, I am selfish I am wrong. I am right, I swear I'm right. Swear I knew it all along.'",
                a: "Who is Dashboard Confessional?"
            }]

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
        if (sum === 1) {
            if (correct.length > incorrect.length) {
                var win = $("<div>");
                win.addClass("modal");
                win.text("Congratulations! You are the Becardy Champion!");
                win.css("color", "mediumspringgreen");
                win.css("font-size", "45px");
                var goBack = $("<button>");
                var back = $("a");
                back.attr("href", "./index.html");
                back.css("text-decoration", "none");
                back.text("Want to play again?");
                goBack.append(back);
                win.append(goBack);
                modal_container.append(win);
            } else {
                var lose = $("<div>");
                lose.addClass("modal");
                lose.text("Oh no! You were so close.");
                var again = $("<button>");
                var tryAgain = $("a");
                tryAgain.attr("href", "./final.html");
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
        console.log(incorrect.length);
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
            $("#jeopardy").get(0).pause();
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
        modal.fadeToggle("fast");
    }


    //This function creates my game board!


    final.forEach(function(name) {
        var rowDiv = $("<div>");
        rowDiv.addClass("category");
        var title = $("<div>");
        title.addClass("category_title");
        title.text(name.category);
        rowDiv.append(title);
        board.append(rowDiv);
        name.question.forEach(function(question) {

            rowDiv.on("click", function() {
                createModal(question, rowDiv);
                $("#jeopardy").get(0).play();

            });
        })
    })

















})
