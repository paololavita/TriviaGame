$(document).ready(function(){
    $("#submit-button").hide();
    $("#start-button").click(function() {
        $("#start-button").hide();
        $("#submit-button").show();
        
        var number = 60;
        var intervalId;

        var questions = {
            questionsArray: [{
                question: "Who at William Osler is the most useless and biggest waste to the Ontario Taxpayer in general?",
                a: "Elio D",
                b: "John Go",
                c: "Janet M",
                d: "James M",
                e: "Joe C",
                f: "All the Above"

            // },
            // {
            //  question: "Question 2?",
            //  a: "1",
            //  b: "2",
            //  c: "3",
            //  d: "4",
            // },
            // {
            //  question: "Question 3?",
            //  a: "A",
            //  b: "B",
            //  c: "C",
            //  d: "D",
            // },
            // {
            //  question: "Question 4?",
            //  a: "W",
            //  b: "X",
            //  c: "Y",
            //  d: "Z",
            // },
            // {
            //  question: "Question 5?",
            //  a: "1",
            //  b: "2",
            //  c: "3",
            //  d: "4",
            // },
            // {
            //  question: "Question 6?",
            //  a: "A",
            //  b: "B",
            //  c: "C",
            //  d: "D",
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
            + "<div><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].d + " id = 'disable4' " + i + ">" + questions.questionsArray[i].d + "</div>"
            + "<div><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].e + " id = 'disable5' " + i + ">" + questions.questionsArray[i].e + "</div>"
            + "<div><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].f + " id = 'disable6' " + i + ">" + questions.questionsArray[i].f+ "</div><br>");
        }

        $("#submit-button").click(function(){
            function answerKey(){
                var answers = {
                    answersArray:
                    [{answer0: "1"},
                    {answer1: "C"},
                    {answer2: "X"},
                    {answer3: "4"},
                    {answer4: "Y"},
                    {answer5: "3"}]
                };

                var clickA = $("#disable1").click(function(){console.log($(this).attr("checked", true).val());});
                var clickB = $("#disable2").click(function(){console.log($(this).attr("checked", true).val());});
                var clickC = $("#disable3").click(function(){console.log($(this).attr("checked", true).val());});
                var clickD = $("#disable4").click(function(){console.log($(this).attr("checked", true).val());});
                
                console.log(answers[]);

                if( clickA === answers.answersArray.answer0){
                    console.log("correct");
                }
                else if ( clickA != answers.answersArray.answer0){
                    console.log("incorrect");
                }
            }
            answerKey();
        });

        run();
    })


})