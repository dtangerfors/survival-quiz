// qa = { q1a: 0, q1b: 10, q1c: 0, q2a: 3, q2b: 3, q2c: 0 }
var quizAnswers = {};



//console.log("I'm alive")
window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector("body form");
    form.addEventListener('submit', submitAnswers)
    //console.log('DOM fully loaded and parsed');
    for (x = 1; x <= 5; x++) {
        //console.log(x)
        quizAnswers["q" + x + "a"] = 0;
        quizAnswers["q" + x + "b"] = 10;
        quizAnswers["q" + x + "c"] = 0;

        /*  "q" + x + "a"
         "q" + x + "b"
         "q" + x + "c" */
    }
    //console.table(quizAnswers)

    // 
});

function submitAnswers(event) {
    event.preventDefault()
    // skriv en foreach: Object.keys(quizAnswers).forEach
    // skapa en array questions = Object.keys(quiAnswers)
    // questions.forEach(question => {
    // question = "q1a" osv
    //  score += quizAnswers[question]
    // })
    // document.getElementById("q2a").checked få "q2a" osv från Object.keys
    // stega igenom alla frågor, quizAnswers[]
}

