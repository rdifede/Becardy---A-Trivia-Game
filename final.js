$(function() {
    console.log("connected!");

    var final = [

        {
            category: "Famous Last words",
            question: [{
                q: "Tell your sister, you were right.",
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
            category: "Emo Songs",
            question: [{
                q: "Vindicated, I am selfish I am wrong. I am right, I swear I'm right. Swear I knew it all along.",
                a: "Who is Dashboard Confessional?"
            }]

        }


    ]



    var body = $("body");
    var board = $("#board");
    var modal_container = $(".modal-container");
    var correct = [];
    var incorrect = [];





    var checkForWin = function() {
        var sum = (correct.length + incorrect.length);
        if (sum === 3) {
            if (correct.length > incorrect.length) {
                var win = $("<div>");
                win.addClass("modal");
                win.text("Congratulations! You are the Becardy Champion!");
                var back = $("<button>");
                back.attr("a", "./index.html");
                back.css("text-decoration", "none");
                back.text("Want to play again?");
                win.append(back);
                modal_container.append(win);
                win.toggle();
            } else {
                var lose = $("<div>");
                lose.addClass("modal");
                lose.text("Oh no! You were so close.");
                var tryAgain = $("<button>");
                tryAgain.attr("a", "./final.html");
                tryAgain.text("Try Again!");
                lose.append(tryAgain);
                modal_container.append(lose);
                lose.toggle();
            }
        }
    }

    var checkAnswer = function(q) {
        var input = $("input");
        if (input.val() === q.a) {
            correct.push(q);
        } else {
            incorrect.push(q);
        }
        console.log(incorrect.length);
    }


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
        modal.fadeToggle("fast");
    }



   var audio = function (){
   	var music = ("<embed>");
   	music.attr("src", "./jeopardy-theme-song.mp3");
   	$(this).play();

   }

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
                audio();

            });
        })
    })

















})
