$(function() {
    console.log("connected");

    var gameInfo = [

        {
            category: "Potent Potables",
            questions: [
            	{
                    q: "First brewed in Mexico in 1897, this beer is best known for its commercials, which feature a rather intriguing, worldly gentleman",
                    a: "What is Dos Equis?",
                    p: "$200"
                },

                {
                    q: "A 'White Russian' consists of 2 parts vodka, 1 part fresh cream, and 1 part this",
                    a: "What is coffee liquer?",
                    p: "$400"
                },

                {
                    q: "Once popular in the 1950's, this 'light liquor alternative', is making a comeback, with people all over Instagram posing with their #spritz",
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
                    q: "A staple in most woodshops, this type of sander consists of a revolving strip of abrasive that is used to smooth out and shape the edges of a project",
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

    var body = $("body");
    var board = $("#board");
    var correct = [];
    var incorrect = [];
    // var counter = $(1);

    // console.log("wut");






// var checkAnswer = function (a){
// 	a = input.val();
// 	if (a === input.val()){
// 		correct.push(a);
// 	} else if (a !== input.val()){
// 		incorrect.push(a);
// 		}
// 	}










var createModal = function(q) {
        var modal = $("<div>");
        modal.addClass("modal");
        modal.text(q.q);
        modal.css("display","none");
        
        var submit = $("<button>");
        submit.attr("id", "submit");
        submit.text("submit");
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
        xOut.text("x");
        xOut.click(function(){
        	modal.hide();
        })
        modal.append(xOut);

        board.append(modal);
        modal.fadeToggle("fast");
        console.log("clicked");

 // checkAnswer();
      console.log(q);  
    }



gameInfo.forEach(function(name){
	var rowDiv = $("<div>");
	rowDiv.addClass("category");
	rowDiv.text(name.category);
	board.append(rowDiv);
		name.questions.forEach(function(question){
			var cellDiv = $("<div>");
			cellDiv.addClass("q");
			cellDiv.text(question.p);
			cellDiv.on("click",function(){
				createModal(question);
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
