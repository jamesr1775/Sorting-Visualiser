let allQuestions = {
    bubbleSort:{    
                    questions: ["What is the average time complexity of the bubble sort algorithm with an array of length <em>n</em>?",
                                "What is the space complexity of the bubble sort algorithm with an array of length <em>n</em>?",
                                "The best case time complexity for bubble sort is O(<em>nlog(n)</em>)",
                                "Bubble sort can also be known as:",
                                "When asked  what is the best way to sort a million integers, who replied 'I think the bubble sort would be the wrong way to go'."
                                ],
                    answers: [["O(<em>n</em>)", "O(<em>log(n)</em>)", "O(<em>n<sup>2</sup></em>)", "O(<em>n*log(n)</em>)"],
                              ["O(<em>n</em>)", "O(<em>log(n)</em>)", "O(<em>n<sup>2</sup></em>)", "O(1)"],
                              ["True", "False"],
                              ["Comparison sort", "Sinking sort", "Insertion sort", "Odd-even sort"],
                              ["Barack Obama", "Dara Ó Briain", "Lebron James", "Alan Turing"],
                            ],
                    correctAnswers: ["option-2", "option-3", "option-1", "option-1", "option-0"], 
                    answerExplanations: ["Bubble sort iterates over the array of n elements effectively twice. The inner loop does have the optimization of <em>n-i-1</em> iterations but this still equates to a time complexity of O(<em>n</em>)*O(<em>n-i-1</em>) which simplifies to O(<em>n<sup>2</sup></em>)",
                                         "The original array is manipulated in place and only one temporary variable to do the swaps is needed so the space complexity is constant O(1)",
                                         "Another optimization can be added to the algorithm to check if any swaps occured during the first pass through the array. If none occured you can terminate the algorithm as the array is already sorted. Thus the best case time complexity would be <em>n<sup>2</sup></em>",
                                         "Bubble sort can be thought to bubble the smallest values to the top of the array, hence sinking sort sinks the largest values to the bottom of the array.",
                                         "In an interview with former Google CEO Eric Schmidt, Barack Obama replied to this question. See it <a href='https://youtu.be/m4yVlPqeZwo?t=1398' target='_blank'>here</a>"
                                        ],
                    userScore:[0, 0, 0, 0, 0]
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
        quizBlock.innerHTML = `<div id='question'>Question ${1}/${currentQuestionsStruct.questions.length}<br>${currentQuestionsStruct.questions[0]}</div>`
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
    navQuestionsBlock.innerHTML = `<button id="prev-question" class="btn btn-success button-text">Previous Question</button>
    <button id="next-question" class="btn btn-success button-text">Next Question</button>`
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
    quizBlock.innerHTML = `<div id='question'>Question ${questionsCounter + 1}/${currentQuestionsStruct.questions.length}<br>${currentQuestionsStruct.questions[questionsCounter]}</div>`
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
    let answerRevealBlockHTML = `<p><button class="btn btn-success button-text" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">Answer explanation</button></p>
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
        quizModalResultsHTML += `<tr><td>${currentQuestionsStruct.questions[i]}</td><td>${questionResult}</td></tr>`
    }
    let algorithm = document.getElementById("algo-header").innerHTML
    let percentCorrect = 100*(correctAnswerCounter/currentQuestionsStruct.questions.length)
    quizModalResultsHTML += `</table><p id="score-fraction">You scored ${percentCorrect}%.</p>`
    quizModalResults.innerHTML = quizModalResultsHTML
    quizModalHeader.innerHTML = `${algorithm} Quiz Results`
    $('#quiz-results').modal('show');
    let quizResultsBlock = document.getElementById("quiz-results-block")
    let quizResultsBlockHTML = `<button id="view-results" type="button" class="dashboard-btn btn btn-success button-text" aria-label="View Score Button">View Score</button>
    <button id="retake-quiz" type="button" class="dashboard-btn btn btn-success button-text" aria-label="Retake Quiz Button">Retake Quiz</button>`
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
    let answerRevealBlock = document.getElementById("answer-reveal-block")
    answerRevealBlock.innerHTML = ``
})