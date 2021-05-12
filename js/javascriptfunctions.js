var name = prompt("what is your name?");
function ask() {
    // console.log(name);
    if (name === null) {
        document.getElementById("wel").innerHTML = "welcome to the unkown continent!";
    } else {
        document.getElementById("wel").innerHTML = "welcome " + name + " to the unkown continent!";
    }
    //  in irder not to appear "null " on the screen
}
ask();
// ------------coding the hamburger menu----------
const togglebutton = document.getElementById("togglebutton");
const navilist = document.getElementById("navi-list");
togglebutton.addEventListener('click', () => {
    navilist.classList.toggle('active');

});

// ---------- calculate the result--------

var goodAnswers = 0;
function check() {
    //  in order to aim values of the inputs
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;

    //    aiming the correct values and give them grades
    if (q1 == "bgood1") { goodAnswers += 20 };
    if (q2 == "agood2") { goodAnswers += 20 };
    if (q3 == "cgood3") { goodAnswers += 20 };
    if (q4 == "bgood4") { goodAnswers += 20 };
    if (q5 == "cgood5") { goodAnswers += 20 };
    // console.log(goodAnswers);





}
//  ----------------------------change bgcolor of correct answers----
var correctanswers = document.getElementsByClassName("correct-answers");
//    aiming the paragraph parent tags which contain the input tags in order to change thier background colors
var donebtn = document.getElementById("donebtn").addEventListener('click', () => {

    for (var i = 0; i < correctanswers.length; i++) {
        correctanswers[i].style.backgroundColor = "green";


    }


    // ----------------------show the result----------
    switch (goodAnswers) {
        case 0:
            document.getElementById("result").innerHTML = "Good luck next time " + name + " your result is " + goodAnswers + "%!";
            goodAnswers = 0;
            break;
        case 20:
            document.getElementById("result").innerHTML = "Good luck next time " + name + " your result is " + goodAnswers + "%!";
            goodAnswers = 0;
            break;
        case 40:
            document.getElementById("result").innerHTML = "Good Job " + name + " your result is " + goodAnswers + "%!";
            goodAnswers = 0;
            break;
        case 60:
            document.getElementById("result").innerHTML = "Very good " + name + " your result is " + goodAnswers + "%!";
            goodAnswers = 0;
            break;
        case 80:
            document.getElementById("result").innerHTML = "Excellent " + name + " your result is " + goodAnswers + "%!";
            goodAnswers = 0;
            break;
        case 100:
            document.getElementById("result").innerHTML = "Awesome " + name + " your result is " + goodAnswers + "%!";
            goodAnswers = 0;
            break;

    }

});
//  ----------------function to reset everything when the close btn is clicked-------
var resetbtn = document.getElementsByClassName("answers");  //  to reset the inputs
function cancel() {

    goodAnswers = 0;     //  reset the grades
    for (var i = 0; i < correctanswers.length; i++) {
        correctanswers[i].style.backgroundColor = "";

    };                  // reset the bg color of the correctanswers
    var result = document.getElementById('result').innerHTML = '';     // in order to disappear the result

    document.getElementById('quiz-list').style.display = 'none';      //in order to close the quiz 

    for (var x = 0; x < resetbtn.length; x++) {
        resetbtn[x].checked = false;
    }                                                     // in order to reset the inputs
}

