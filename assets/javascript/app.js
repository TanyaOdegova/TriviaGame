var number = 300;
var intervalId;
var myListofQuestions = [
    {
        question: "1. What object must be caught in order to end a Quidditch match?",
        choices: [" The Golden Snitch", " Sickle", " Bludger", " Galleon"],
        correctChoice: "The Golden Snitch"
    },
    {
        question: "2. Dumbledore has a scar above his left knee that is a perfect map of what?",
        choices: [" Diagonal Alley", " Hogwarts", " London Underground", " Fordidden Forest"],
        correctChoice: "London Underground"
    },
    {
        question: "3. Where do wizards go when they want to deposit money?",
        choices: [" Hogsmeade", " Godric’s Hollow", " Bogrod Vault", " Gringott’s"],
        correctChoice: "Gringott’s"
    },
    {
        question: "4. What does Hagrid name his baby dragon?",
        choices: [" Fluffy", " Norbert", " Fang", " Hermes"],
        correctChoice: "Norbert"
    },
    {
        question: "5. What is Harry’s Blood Status?",
        choices: [" Half-Blood", " Mud-Blood", " Muggle-Born", " Pure-blood"],
        correctChoice: "Half-Blood"
    },
    {
        question: "6. What monster lives in the Chamber of Secrets?",
        choices: [" Basilisk", " Nagini", " Aragog", " Salazar"],
        correctChoice: "Basilisk"
    },
    {
        question: "7. What is Hermione's middle name?",
        choices: [" Norma", " Jean", " Susan", " Alice"],
        correctChoice: "Jean"
    },
    {
        question: "8. What are corpses that have been bewitched to do a Dark wizard's bidding?",
        choices: [" Thestrals", " Nargles", " Inferi", " Dementors"],
        correctChoice: "Inferi"
    },
    {
        question: "9. Minerva McGonagall taught this subject?",
        choices: [" Defence Against the Dark Arts", " Apparition", " History of Magic", " Transfiguration"],
        correctChoice: "Transfiguration"
    }

];


function startGame() {
    $("#startGameButton").toggleClass("hidden");
    $("#gameWrapper").toggleClass("hidden");

    //display all questions
    myQuestion = "";
    myListofQuestions.forEach(function (obj, idx) {

        myQuestion = myQuestion + "<p class='bold'>" + obj.question + "</p>";

        obj.choices.forEach(function (choice) {
            myQuestion = myQuestion + "<input type='radio' name=" + idx + " value=" + choice + ">" + choice + "<br>";

            console.log(myQuestion);

        })

    })

    $("#myForm").append(myQuestion);

    run();

}

function gradeMe() {

    stop();

    var numCorrectAnswers = 0;
    var unanswered = 0;
    var incorrect = 0;

    //show choice
    for (var i = 0; i < myListofQuestions.length; i++) {

        var isItChecked = $("input[name =" + i + "]:checked").val();
        //alert(isItChecked);

        if (isItChecked === myListofQuestions[i].correctChoice) {
            numCorrectAnswers++;
        } else if (isItChecked === "undefined") {
            unanswered++;
        } else {
            incorrect++;
        }
    }


    $("#correct").html(numCorrectAnswers);
    $("#incorrect").html(incorrect);
    $("#unanswered").html(unanswered);
    $("#resultsWrapper").toggleClass("hidden");
    $("#gameWrapper").toggleClass("hidden");

}

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;

    $("#showNumber").html(number);
    if (number === 0) {
        gradeMe();
    }
}

function stop() {
    clearInterval(intervalId);
}

function playAgain() {
    $("#gameWrapper").toggleClass("hidden");
    $("#resultsWrapper").toggleClass("hidden");

    //write out questions
    myQuestion = "";
    myListofQuestions.forEach(function (obj, idx) {

        myQuestion = myQuestion + "<p class='bold'>" + obj.question + "</p>";

        obj.choices.forEach(function (choice) {
            myQuestion = myQuestion + "<input type='radio' name=" + idx + " value=" + choice + ">" + choice + "<br>";

            console.log(myQuestion);
        })

    })

    run();


}