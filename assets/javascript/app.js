$(document).ready(function() {

    //variable for clock time
    var timeLeft = 46;

    // variables for end game screen
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //Empty variable used for timer count down
    var myCountDown;

    //hide end and game screen when web pages first loads
    $("#gameScreen").hide();
    $("#endScreen").hide();


    //set up count down functions

    // This function is taking time off the clock and displaying it to the user
    function countDown() {

        timeLeft--;

        $("#timer").html("<h3>" + timeLeft + " seconds </h3")

        if (timeLeft <= 0) {
            stop();
            $("#gameScreen").hide();
            $("#endScreen").show();

            scoreTally();


        }

    };

    //This function starts the count down
    function beginCountDown() {

        myCountDown = setInterval(countDown, 1000)
    };



    //This function stops the timer at 0
    function stop() {

        clearInterval(myCountDown)

    };



    //Start button function, changes displayed screen and starts the timer
    $("#startButton").click(function() {

        $("#startScreen").hide();
        $("#gameScreen").show();

        beginCountDown();


    });


    //Done button function displays end screen and runs scoreTally function
    $("#doneButton").click(function() {

        $("#gameScreen").hide();
        $("#endScreen").show();

        scoreTally();


    })



    //This function first checks which answer was checked for each question, then compares user answer to correct answer with if else conditions. Then displays results to user
    function scoreTally() {
        var answer1 = $('input:radio[name="Q1"]:checked').val();
        var answer2 = $('input:radio[name="Q2"]:checked').val();
        var answer3 = $('input:radio[name="Q3"]:checked').val();
        var answer4 = $('input:radio[name="Q4"]:checked').val();
        var answer5 = $('input:radio[name="Q5"]:checked').val();
        var answer6 = $('input:radio[name="Q6"]:checked').val();
        var answer7 = $('input:radio[name="Q7"]:checked').val();
        var answer8 = $('input:radio[name="Q8"]:checked').val();


        if (answer1 === undefined) {

            unanswered++;

        }

        else if (answer1 === "Cactus") {

            correct++;
        }
        else {

            incorrect++;
        }



        if (answer2 === undefined) {

            unanswered++;

        }

        else if (answer2 === "Big Cypress") {

            correct++;
        }
        else {

            incorrect++;
        }



        if (answer3 === undefined) {

            unanswered++;

        }

        else if (answer3 === "The White Album") {

            correct++;
        }
        else {

            incorrect++;
        }



        if (answer4 === undefined) {

            unanswered++;

        }

        else if (answer4 === "Dress") {

            correct++;
        }
        else {

            incorrect++;
        }


        if (answer5 === undefined) {

            unanswered++;

        }

        else if (answer5 === "1983") {

            correct++;
        }
        else {

            incorrect++;
        }



        if (answer6 === undefined) {

            unanswered++;

        }

        else if (answer6 === "Wilson") {

            correct++;
        }
        else {

            incorrect++;
        }



        if (answer7 === undefined) {

            unanswered++;

        }

        else if (answer7 === "Poster Nutbag") {

            correct++;
        }
        else {

            incorrect++;
        }



        if (answer8 === undefined) {

            unanswered++;

        }

        else if (answer8 === "Page") {

            correct++;
        }
        else {

            incorrect++;
        }







        $("#correct_score").text(correct);
        $("#incorrect_score").text(incorrect);
        $("#unanswered_score").text(unanswered);

    };













});
