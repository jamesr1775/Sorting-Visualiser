let allQuestions = {
    bubbleSort:{    
                    questions: ["What is the time complexity of the bubble sort algorithm with an array of length <em>n</em>?",
                                "What is the space complexity of the bubble sort algorithm with an array of length <em>n</em>?"],
                    answers: [["O(<em>n</em>)", "O(<em>log(n)</em>)", "O(<em>n<sup>2</sup></em>)", "O(<em>n*log(n)</em>)"],
                              ["O(<em>n</em>)", "O(<em>log(n)</em>)", "O(<em>n<sup>2</sup></em>)", "O(1)"]
                            ],
                    correctAnswers: ["option-2", "option-3"], 
                    answerExplanations: ["Because it is", "Because why not"]
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
            answerChoiceBlockHTML += `<div class= "col-6 col-xs-12">
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
        answerChoiceBlockHTML += `<div class= "col-6 col-xs-12">
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
    }
    else{
        alert("Wrong Answer!")
    }
    answerSelectUpdate(currentCorrectAnswer)
    let answerRevealBlockHTML = `<p><button class="btn btn-success" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">Answer explanation</button></p>
    <div class="row"><div class="col-12"><div class="collapse multi-collapse" id="multiCollapseExample3">${currentQuestionsStruct.answerExplanations[questionsCounter]}</div></div></div>`
    answerRevealBlock.innerHTML = answerRevealBlockHTML
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