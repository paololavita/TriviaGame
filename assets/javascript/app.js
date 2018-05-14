// use the 1-customer-object.html for the questions and answer section
$(document).ready(function(){
    $("#submit-button").hide();
    $("#start-button").click(function() {
        $("#start-button").hide();
        $("#submit-button").show();
        //$(this).parent().remove();

        // *** Timer that runs down to 0 ***
        var number = 60;
        var intervalId;

        var questions = {
            questionsArray: [{
                question: "What is the fastest bird on foot?",
                a: "Ostrich",
                b: "Sparrow",
                c: "Eagle",
                d: "Woodpecker",
                },
                {  
                question: "What special talent did Molly Ringwald have in The Breakfast Club?",
                a: "She had hundreds of clothes",
                b: "She ate sushi",
                c: "She could stick her tongue out past her nose",
                d: "She could apply lipstick with her breasts.",
                },
                {
                question: "In The Blues Brothers, what does SCMODS stand for? ",
                a: "Georgia",
                b: "State County Municipal Offender Data Systems",
                c: "Texas",
                d: "State County Municipal Offence Date System",
                },
                {
                question: "How many Nightmare On Elm Street movies were made in the 80's? ",
                a: "Four",
                b: "Three",
                c: "Six",
                d: "Five",
                },
                {
                question: "In Beverly Hills Cop, how does Axel Foley escape the police car that is sent to follow him?",
                a: "He craetes a distraction",
                b: "He steals the keys",
                c: "He puts a banana in its tailpipe",
                d: "He outruns it in a car chase",
            }]
        };

        function run() {
            intervalId = setInterval(decrement, 1000);
            function decrement() {
                number--;
                $("#timer").html("<div>Time Left on the Clock: " + number + "</div>");
                if (number === 0) {
                    stop();
                    alert("Unfortunately your time is up!");
                }
            }
            function stop() {
                clearInterval(intervalId);
                //$("#submit-button").hide();
                //$("#start-button").show();
            }
        }

        for(var i = 0; i < questions.questionsArray.length; i++){
            $("#questionQ").append("<div>" + questions.questionsArray[i].question + "</div><br>"
            + "<div><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].a + " id = 'disable1' " + i + ">" + questions.questionsArray[i].a + "</div>"
            + "<div><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].b + " id = 'disable2' " + i + ">" + questions.questionsArray[i].b + "</div>"
            + "<div><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].c + " id = 'disable3' " + i + ">" + questions.questionsArray[i].c + "</div>"
            + "<div><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].d + " id = 'disable4' " + i + ">" + questions.questionsArray[i].d + "</div><br>");
        }

                var clickA = $("#disable1").click(function(){console.log($(this).attr("checked", true).val());});
                var clickB = $("#disable2").click(function(){console.log($(this).attr("checked", true).val());});
                var clickC = $("#disable3").click(function(){console.log($(this).attr("checked", true).val());});
                var clickD = $("#disable4").click(function(){console.log($(this).attr("checked", true).val());});

        $("#submit-button").click(function(){

            answerKey();

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

                //var clickA = $("#disable1").click(function(){console.log($(this).attr("checked", true).val());});
                //var clickB = $("#disable2").click(function(){console.log($(this).attr("checked", true).val());});
                //var clickC = $("#disable3").click(function(){console.log($(this).attr("checked", true).val());});
                //var clickD = $("#disable4").click(function(){console.log($(this).attr("checked", true).val());});

                //console.log(answers.answersArray[].answer0);

                //if($(this).prop("checked") == true){

                    console.log(clickA.defaultValue);
                    console.log(clickB.defaultValue);
                    console.log(clickC.defaultValue);
                    console.log(clickD.defaultValue);

               // }


                
                //if( clickA.value === answers.answersArray[0]){
                    //console.log("correct");
                //}
                //else if ( clickA.value!== answers.answersArray[0]){
                    //console.log("incorrect");
                //}
            }
            
        });

        // Run the functions after start button click
        run();
    })


})