$(function() {
    console.log("connected");

    var gameInfo = [

        {
            category: "Potent Potables",
            questions: [
            	{
                    q: "First brewed in Mexico in 1897, this beer is best known for its commercials, which feature a rather intriguing, worldly gentleman",
                    a: "What is Dos Equis?"
                },

                {
                    q: "A 'White Russian' consists of 2 parts vodka, 1 part fresh cream, and 1 part this",
                    a: "What is coffee liquer?"
                },

                {
                    q: "Once popular in the 1950's, this 'light liquor alternative', is making a comeback, with people all over Instagram posing with their #spritz",
                    a: "What is Aperol?"
                }
            ]

        },

        {
            category: "A Galaxy Far Far Away",
            questions: [{
                    q: "'Help me Obi Wan Kenobi, you're my only hope!' is the first line by this royal.",
                    a: "Who is Princess Leia?"
                },

                {
                    q: "The first planet destroyed by the Death Star.",
                    a: "What is Alderaan?"
                },

                {
                    q: "The foggy, swamp-like place where Yoda lives.",
                    a: "What is the Degobah system?"

                }
            ]

        },

        {
            category: "Oh Say Can You 'Sea'",
            questions: [{
                    q: "This bird is commonly found near bodies of water. Don't feed them, or they might attack.",
                    a: "What is a seagull?"
                },

                {
                    q: "The stitching that binds two pieces of fabric together.",
                    a: "What is the seam?"
                },

                {
                    q: "A generic alternative to 'Happy Holidays!'",
                    a: "What is 'Season's Greetings!'?"
                }

            ]

        },

        {
            category: "What a Tool",
            questions: [{
                    q: "Commonly used by Ikea for their build-your-own furniture, it can also be referred to as a hex key.",
                    a: "What is an allen wrench?"
                },

                {
                    q: "A staple in most woodshops, this type of sander consists of a revolving strip of abrasive that is used to smooth out and shape the edges of a project",
                    a: "What is a belt sander?"
                },

                {
                    q: "An American brand, primarily known for its rotary tools.",
                    a: "What is Dremel?"
                }
            ]

        },

        {
            category: "American Psychos",
            questions: [{
                    q: "David Berkowitz terrorized New York City from 1976-1977, and is usually referred to by this moniker.",
                    a: "What is Son of Sam?"
                }, {
                    q: "Known as the 'Green River Killer', this man killed prostitutes and runaways in the Pacific Northwest from 1982-1998.",
                    a: "Who is Gary Ridgway?"
                },

                {
                    q: "The movies 'Psycho' and 'Silence of the Lambs' are loosely based on this real-life killer.",
                    a: "Who is Ed Gein?"
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










var createModal = function() {
        var modal = $("<div>");
        modal.addClass("modal");
        var submit = $("<button>");
        modal.append(submit);
        var input = $("<input>");
        input.attr({
        	type: "text",
        	name: "input",
        	value: ""
        })
        
        modal.append(input);
        modal.fadeToggle();
        console.log("clicked");

 // checkAnswer();
        
    }



gameInfo.forEach(function(name){
	var rowDiv = $("<div>");
	rowDiv.addClass("category");
	board.append(rowDiv);
		name.questions.forEach(function(question){
			var cellDiv = $("<div>");
			cellDiv.addClass("q");
			cellDiv.on("click",(createModal()));
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
