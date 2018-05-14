// use the 1-customer-object.html for the questions and answer section
$(document).ready(function(){
	$("#submit-button").hide();
	$("#start-button").click(function() {
		$("#start-button").hide();
		$("#submit-button").show();
		// $(this).parent().remove();

		// *** Timer that runs down to 0 ***
		var number = 5000;
		var intervalId;

		var questions = {
			questionsArray: [{
				question: "1) What is the fastest bird on foot?",
				a: "Ostrich",
				b: "Sparrow",
				c: "Eagle",
				d: "Woodpecker",
			},
			{
			question: "2) How long is one regular term for a U.S. Representative?",
			a: "3 years",
			b: "2 years",
			c: "4 years",
			d: "5 years",
			// },
			// {
			// 	question: "3) Which of the following states is not on the Gulf of Mexico?",
			// 	a: "Georgia",
			// 	b: "Alabama",
			// 	c: "Texas",
			// 	d: "Mississippi",
			// },
			// {
			// 	question: "4) What white, puffy clouds are known as 'fair weather' clouds?",
			// 	a: "Cumulus",
			// 	b: "Cumulonimbus",
			// 	c: "Stratus",
			// 	d: "Cirrus",
			// },
			// {
			// 	question: "5) Between 1455 and 1485, the War of the Roses took place in what country?",
			// 	a: "France",
			// 	b: "England",
			// 	c: "Germany",
			// 	d: "Spain",
			// },
			// {
			// 	question: "6) It's three fifteen PM. What is the degree difference between the hour hand and minute hand?",
			// 	a: "0 degrees",
			// 	b: "6 degrees",
			// 	c: "7.5 degrees",
			// 	d: "90 degrees",
			}]
		};

		function run() {
			intervalId = setInterval(decrement, 1000);
			function decrement() {
				number--;
				$("#timer").html("<div>Time Left on the Clock: " + number + "</div>");
				if (number === 0) {
					stop();
					alert("Time Up!");
				}
			}
			function stop() {
				clearInterval(intervalId);
			}
		}

		for(var i = 0; i < questions.questionsArray.length; i++){
			$("#questionQ").append("<div>" + questions.questionsArray[i].question + "</div><br>"
			+ "<div><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].a + " id = 'disable1' " + i + ">" + questions.questionsArray[i].a + "</div>"
			+ "<div><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].b + " id = 'disable2' " + i + ">" + questions.questionsArray[i].b + "</div>"
			+ "<div><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].c + " id = 'disable3' " + i + ">" + questions.questionsArray[i].c + "</div>"
			+ "<div><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].d + " id = 'disable4' " + i + ">" + questions.questionsArray[i].d + "</div><br>");
		}

		$("#submit-button").click(function(){
			function answerKey(){
				var answers = {
					answersArray:
					[{answer0: "Ostrich"},
					 {answer1: "2 years"},
					 {answer2: "Georgia"},
					 {answer3: "Cumulus"},
					 {answer4: "England"},
					 {answer5: "7.5 degrees"}]
				};
				var clickA = $("#disable1").click(function(){console.log($(this).attr("checked", true).val());});
				var clickB = $("#disable2").click(function(){console.log($(this).attr("checked", true).val());});
				var clickC = $("#disable3").click(function(){console.log($(this).attr("checked", true).val());});
                var clickD = $("#disable4").click(function(){console.log($(this).attr("checked", true).val());});
                
                //var test = ($(clickA).value);
                
                //console.log(test);
                
                if( $(clickA).value === answers.answersArray[0].answer0){
                    
                    console.log("correct");
				}
				else if ( clickB === answers.answersArray[0].answer0){
					console.log("correct");
				}
				else if ( clickC === answers.answersArray[0].answer0){
					console.log("correct");
				}
				else if ( clickD === answers.answersArray[0].answer0){
					console.log("correct");
				}
				else {
					console.log("incorrect");
				}

			}
			answerKey();
		});

		// Run the functions after start button click
		run();
	})


})
