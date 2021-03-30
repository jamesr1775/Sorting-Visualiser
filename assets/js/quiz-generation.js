let allQuestions = {
    bubbleSort:{    
                    questions: ["What is the time complexity of the bubble sort algorithm with an array of length <em>n</em>?",
                                "What is the space complexity of the bubble sort algorithm with an array of length <em>n</em>?"],
                    answers: [["O(<em>n</em>)", "O(<em>log(n)</em>)", "O(<em>n<sup>2</sup></em>)", "O(<em>n*log(n)</em>)"],
                              ["O(<em>n</em>)", "O(<em>log(n)</em>)", "O(<em>n<sup>2</sup></em>)", "O(1)"]
                            ],
                    correctAnswers: ["option-2", "option-3"], 
                    answerExplanations: ["Because it is", "Because why not"],
                    userScore:[0 , 0]
                }
}
let questionsCounter = 0
let currentQuestionsStruct = {}

export function getCurrentQuestionsStruct(currentSortAlgorithm){
    return  currentQuestionsStruct = allQuestions[currentSortAlgorithm]
}

export function addQuizQuestionsToHtml(currentAlgorithm){
    questionsCounter = 0
    let quizBlock = document.getElementById("question-block")
    let answerChoiceBlock = document.getElementById("answer-choices-block")
    let navQuestionsBlock = document.getElementById("nav-questions-block")
    if (currentAlgorithm==="bubbleSort"){
        quizBlock.innerHTML = `<div id='question'>${currentQuestionsStruct.questions[0]}</div>`
        let answerChoiceBlockHTML = `<div class="row">`
        for(let i=0; i<currentQuestionsStruct.answers[0].length; i++){
            answerChoiceBlockHTML += `<div class= "col-sm-6 col-xs-12">
                                      <input id="option-${i}" type="radio" name="answers" value="option-${i}">
                                      <label for="option-${i}">${currentQuestionsStruct.answers[0][i]}</label>
                                      </div>`
        }
        answerChoiceBlock.innerHTML = answerChoiceBlockHTML + `</div>`
        console.log("answerChoiceBlockHTML" + answerChoiceBlockHTML)
    }
    navQuestionsBlock.innerHTML = `<button id="prev-question">Previous Question</button>
    <button id="next-question">Next Question</button>`
}

$(document).on('click','#prev-question', function(){
    console.log("test1")
    if(questionsCounter != 0){
        questionsCounter -= 1
    }
    updateQuestionsDisplayed()
})
$(document).on('click','#next-question',function(){
    console.log("test2")

    if(questionsCounter < currentQuestionsStruct.questions.length - 1){
        questionsCounter += 1
    }
    updateQuestionsDisplayed()
});

function updateQuestionsDisplayed(){
    let quizBlock = document.getElementById("question-block")
    let answerChoiceBlock = document.getElementById("answer-choices-block")
    quizBlock.innerHTML = `<div id='question'>${currentQuestionsStruct.questions[questionsCounter]}</div>`
    let answerChoiceBlockHTML = `<div class="row">`
    for(let i=0; i<currentQuestionsStruct.answers[questionsCounter].length; i++){
        answerChoiceBlockHTML += `<div class= "col-sm-6 col-xs-12">
                                    <input id="option-${i}" type="radio" class="answer-radio" name="answers" value="option-${i}">
                                    <label for="option-${i}">${currentQuestionsStruct.answers[questionsCounter][i]}</label>
                                    </div>`
    }
    answerChoiceBlock.innerHTML = answerChoiceBlockHTML
}

$(document).on("click",'#answer-choices-block input[type=radio]', function() {
    let currentCorrectAnswer = currentQuestionsStruct.correctAnswers[questionsCounter]
    let answerRevealBlock = document.getElementById("answer-reveal-block")
    if($(this).val() === currentCorrectAnswer){
        alert("Correct!")
        currentQuestionsStruct.userScore[questionsCounter] = 1
    }
    else{
        alert("Wrong Answer!")
        currentQuestionsStruct.userScore[questionsCounter] = 0
    }
    answerSelectUpdate(currentCorrectAnswer)
    let answerRevealBlockHTML = `<p><button class="btn btn-success" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">Answer explanation</button></p>
    <div class="row"><div class="col-12"><div class="collapse multi-collapse" id="multiCollapseExample3">${currentQuestionsStruct.answerExplanations[questionsCounter]}</div></div></div>`
    answerRevealBlock.innerHTML = answerRevealBlockHTML
    if(questionsCounter === currentQuestionsStruct.questions.length - 1){
        presentUserQuizScore()
    }
});
function answerSelectUpdate(currentCorrectAnswer){
    console.log("answerSelectUpdate")
    let answers = document.getElementsByName("answers")
    console.log("answers" + answers)
    console.log("answers.length" + answers.length)
    for(let i=0; i< answers.length; i++){
        let radioAnswer = answers[i].getAttribute("value")
        console.log("answers[i] " + answers[i])
        console.log("radioAnswer " + radioAnswer)
        let selector = 'label[for=' + radioAnswer + ']';
        let label = document.querySelector(selector);
        if(radioAnswer === currentCorrectAnswer){
            label.classList.add("correct-answer")
        }
        else{
            label.classList.add("incorrect-answer")
        }
    }
}

function presentUserQuizScore(){
    let quizModalResults = document.getElementById("quiz-results-modal")
    let quizModalHeader = document.getElementById("quiz-header-modal")
    let quizModalResultsHTML = `<table id="results-table"><th>Question</th><th>Result</th></tr>`
    let correctAnswerCounter = 0
    for(let i=0; i<currentQuestionsStruct.questions.length; i++){
        let questionResult =  currentQuestionsStruct.userScore[i]? `<div class="text-center"><span class="check-mark">&#9989;</span></div>`: `<div class="text-center"><span class="cross-mark">&#9746;</span></div>`
        correctAnswerCounter += currentQuestionsStruct.userScore[i]
        quizModalResultsHTML += `<tr><td>${currentQuestionsStruct.questions}</td><td>${questionResult}</td></tr>`
    }
    let algorithm = document.getElementById("algo-header").innerHTML
    let percentCorrect = 100*(correctAnswerCounter/currentQuestionsStruct.questions.length)
    quizModalResultsHTML += `</table><p id="score-fraction">You scored ${percentCorrect}%.</p>`
    quizModalResults.innerHTML = quizModalResultsHTML
    quizModalHeader.innerHTML = `${algorithm} Quiz Results`
    $('#quiz-results').modal('show');
    let quizResultsBlock = document.getElementById("quiz-results-block")
    let quizResultsBlockHTML = `<button id="view-results" type="button" class="dashboard-btn btn btn-success" aria-label="View Score Button">View Score</button>
    <button id="retake-quiz" type="button" class="dashboard-btn btn btn-success" aria-label="Retake Quiz Button">Retake Quiz</button>`
    quizResultsBlock.innerHTML = quizResultsBlockHTML
}

$(document).on('click','#view-results',function(){
    $('#quiz-results').modal('show');
})

$(document).on('click','#retake-quiz',function(){
    questionsCounter = 0
    updateQuestionsDisplayed()
    for(let i=0; i<currentQuestionsStruct.userScore.length; i++){
        currentQuestionsStruct.userScore[i] = 0
    }
    let quizResultsBlock = document.getElementById("quiz-results-block")
    quizResultsBlock.innerHTML = ``
})