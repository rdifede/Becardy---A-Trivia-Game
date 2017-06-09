$(function() {
    console.log("connected");

    var gameInfo = [

        {
            category: "Broadway Musicals",
            questions: [
            	{
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
                    q: "It takes two! In RENT, Mark & Joanne sing a duet this duet, named after their mutual lover.",
                    a: "What is 'The Tango Maureen'?",
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

    var body = $("body");
    var board = $("#board");
    var modal_container = $(".modal-container");
    var correct = [];
    var incorrect = [];





var checkForWin = function (){
	var sum = (correct.length + incorrect.length);
	if (sum === 15){
		if (correct.length > incorrect.length){
			var win = $("<div>");
			win.addClass("modal");
			win.text("Nice job! You answered " + correct.length + "/15 questions correct! Are you ready for Double Jeopardy?");
			var dj = $("<button>");
			dj.attr("a", "#");
			dj.css("text-decoration", "none");
			dj.text("Let's Go!");
			win.append(dj);
			modal_container.append(win);
			win.toggle();
		} else {
			var lose = $("<div>");
			lose.addClass("modal");
			lose.text("Oh no! You only answered " + correct.length +"/15 questions correct. Want to try again?");
			var tryAgain = $("<button>");
			tryAgain.attr("a", "./game.html");
			tryAgain.text("Try Again!");
			lose.append(tryAgain);
			modal_container.append(lose);
			lose.toggle();
		}
	} 
}

var checkAnswer = function (q){
	var input = $("input");
	if (input.val() === q.a){
		console.log(input.val());
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
        modal.css("display","none");
        
        var submit = $("<button>");
        submit.attr("id", "submit");
        submit.text("submit");
        submit.on("click", function(){
        	modal.remove();
        	c.off();
        	checkAnswer(q);
        	checkForWin();
        })
        modal.append(submit);
        
        var input = $("<input>");
        input.attr({
        	type: "text",
        	name: "input",
        	value: ""
        })
        modal.append(input);
        
        var xOut = $("<button>");
        xOut.attr("id", "x");
        xOut.text("close");
        xOut.click(function(){
        	modal.remove();
        })
        modal.append(xOut);

        modal_container.append(modal);
        modal.fadeToggle("fast");
        console.log("clicked");

      console.log(q);  
    }




gameInfo.forEach(function(name){
	var rowDiv = $("<div>");
	rowDiv.addClass("category");
	var title = $("<div>");
	title.addClass("category_title");
	title.text(name.category);
	rowDiv.append(title);
	board.append(rowDiv);
		name.questions.forEach(function(question){
			var cellDiv = $("<div>");
			cellDiv.addClass("q");
			cellDiv.text(question.p);
			cellDiv.on("click",function(){
				createModal(question,cellDiv);
			});
			rowDiv.append(cellDiv);
		})
})

console.log(board);



    


    //     var chooseQuestion = function (){
    //     	modal1.click(function(){
    //     	createModal();

    //     	})

    //  createBoard();   	
    // // console.log(chooseQuestion());

    //     };






})
