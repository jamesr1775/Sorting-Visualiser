let allQuestions = {
    bubbleSort:{    
                    questions: ["Question 1", "Question 2"],
                    answers: [["answer 1", "answer 2", "answer 3", "answer 4"]]
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
    for(let i=0; i<currentQuestionsStruct.answers.length; i++){
        answerChoiceBlockHTML += `<div class= "col-6 col-xs-12">
                                    <input id="option-${i}" type="radio" class="answer-radio" name="answers" value="option-${i}">
                                    <label for="option-${i}">${currentQuestionsStruct.answers[i]}</label>
                                    </div>`
    }
}
$(document).on("click",'#answer-choices-block input[type=radio]', function() {
    alert($(this).val())
  });