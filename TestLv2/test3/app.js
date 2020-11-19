import "./Quiz.js";

let questionContainer = document.getElementById("question-container");
let fData = [];
fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
    .then((response)=>{
        return response.json();
    })
    .then((json)=>{
        let data = json.results;
        applyData(data);
        console.log(data);
        // takeData = data;
    })
var applyData = (data)=>{
    let num = 1;
    // let fData=[];
    let correctData = [];
    data.forEach((e) => {
        fData.push(`
            <quiz-template
            question="${e.question}"
            answer1="${e.incorrect_answers[0]}"
            answer2="${e.incorrect_answers[1]}"
            answer3="${e.incorrect_answers[2]}"
            answer4="${e.correct_answer}">
            </quiz-template>
        `);
        correctData.push(e.correct_answer);
        num++;
    });
}
// questionContainer.innerHTML = fData[0];
// console.log(takeData);