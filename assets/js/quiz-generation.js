
/**
 * Algorithms question and answers structure
 **/
let allQuestions = {
    bubbleSort:{    
                questions: ["What is the average time complexity of the bubble sort algorithm with an array of length <em>n</em>?",
                            "What is the space complexity of the bubble sort algorithm with an array of length <em>n</em>?",
                            "The best case time complexity for bubble sort is O(<em>nlog(n)</em>)",
                            "Bubble sort can also be known as:",
                            "When asked  what is the best way to sort a million integers, who replied 'I think the bubble sort would be the wrong way to go'."
                            ],
                answers: [["O(<em>n</em>)", "O(<em>log(n)</em>)", "O(<em>n<sup>2</sup></em>)", "O(<em>nlog(n)</em>)"],
                          ["O(<em>n</em>)", "O(<em>log(n)</em>)", "O(<em>n<sup>2</sup></em>)", "O(<em>1</em>)"],
                          ["True", "False"],
                          ["Comparison sort", "Sinking sort", "Insertion sort", "Odd-even sort"],
                          ["Barack Obama", "Dara Ó Briain", "Lebron James", "Alan Turing"],
                        ],
                correctAnswers: ["option-2", "option-3", "option-1", "option-1", "option-0"], 
                answerExplanations: ["Bubble sort iterates over the array of n elements effectively twice. The inner loop does have the optimization of <em>n-i-1</em>                                   iterations but this still equates to a time complexity of O(<em>n</em>)*O(<em>n-i-1</em>) which simplifies to O(<em>n<sup>2</sup></em>)",
                                     "The original array is manipulated in place and only one temporary variable to do the swaps is needed so the space complexity \
                                     is constant O(1)",
                                     "Another optimization can be added to the algorithm to check if any swaps occured during the first pass through the array. \
                                     If none occured you can terminate the algorithm as the array is already sorted. Thus the best case time complexity would be <em>n<sup>2</sup></em>",
                                     "Bubble sort can be thought to bubble the smallest values to the top of the array, hence sinking sort sinks the largest values to the bottom of the array.",
                                     "In an interview with former Google CEO Eric Schmidt, Barack Obama replied to this question. \
                                     See it <a href='https://youtu.be/m4yVlPqeZwo?t=1398' target='_blank'>here</a>"
                                    ],
                userScore:[0, 0, 0, 0, 0]
            },
    mergeSort:{    
                questions: ["What is the average time complexity of the merge sort algorithm with an array of length <em>n</em>?",
                            "What is the space complexity of the merge sort algorithm with an array of length <em>n</em> that uses an auxilary array?",
                            "The best case time complexity for merge sort algorithm is <em>O(n)</em>?",
                            "Merge sort was invented in 1945 by who:",
                            "Is merge sort preferred to sort arrays instead of linked lists?"
                        ],
                answers: [["O(<em>n</em>)", "O(<em>nlog(n/2)</em>)", "O(<em>n<sup>2</sup></em>)", "O(<em>nlog(n)</em>)"],
                          ["O(<em>n</em>)", "O(<em>log(n)</em>)", "O(<em>n<sup>2</sup></em>)", "O(<em>n<sup>2</sup>) - O(nlog(n))</em>"],
                          ["True", "False"],
                          ["Steve Wozniak", "Grace Hopper", "John von Neumann", "Steve Jobs"],
                          ["True", "False"],
                        ],
                correctAnswers: ["option-3", "option-0", "option-1", "option-2", "option-1"], 
                answerExplanations: ["For each recursive call to the merge sort recursive helper we are dividing the number of elements we want to sort in to two, \
                                     thus we have <em>log(n)</em> calls to the recursive helper. In each recursive call the do merge function iterates over its array which could be of length <em>n, n/2, n/4 etc.</em> and in time complexity analysis this will simplify to O(<em>n</em>). \
                                     Thus the time complexity of log(n) calls with a loop of length n is O(<em>nlog(n)</em>)",
                                     "In this algorithm because we create a copy of the original array we at the least have O(<em>n</em>) space complexity. Additionaly because of the recurion we have O(<em>log(n)</em>) calls on the call stack at worst. Thus the total time complexity could be O(<em>n</em>) + O(<em>log(n)</em>). Since the O(<em>n</em>) dominates we can simplify it to that.",
                                     "The best case, average case and worst case are all the same with a time complexity of O(<em>nlog(n)</em>). We also will divide the array in to two <em>log(n)</em> times and go through those sub array lengths of <em>n, n/2, n/4 etc</em>",
                                     "John von Neumann invented the algorithm in 1945.",
                                     "Merge sort is considered best for sorting linked lists because it is more efficient then other algorithms such as quick sort which performs poorly for linked lists due to slow random access for this data type."
                                    ],
                userScore:[0, 0, 0, 0, 0]
            },
    quickSort:{    
            questions: ["What is the average/best time complexity for the quick sort algorithm with an array of length <em>n</em>?",
                        "What is the space complexity of the quick sort algorithm with an array of length <em>n</em>?",
                        "The worst case time complexity for the quick sort algorithm is O(<em>n<sup>2</sup></em>)?",
                        "Quick sort was invented in 1959 by who:",
                        "Can using a second pivot element improve the efficiency of the quick sort algorithm?"
                        ],
            answers: [["O(<em>nlog(n)</em>)", "O(<em>n</em>)", "O(<em>n<sup>2</sup></em>)", "O(<em>nlog(n/2)</em>)"],
                      ["O(<em>n<sup>2</sup></em>)", "O(<em>n</em>)",  "O(<em>1</em>)", "O(<em>log(n)</em>)"],
                      ["True", "False"],
                      ["Bjarne Stroustrup", "Tony Hoare", "John von Neumann", "Bill Gates"],
                      ["True", "False"],
                    ],
            correctAnswers: ["option-0", "option-3", "option-0", "option-1", "option-0"], 
            answerExplanations: ["Like merge sort, the goal is to work with sub arrays half the size of the array the quickSortHelper is called on. \
                                 This on average should give us <em>log(n)</em> arrays to sort. Since the algorithm trys to sorts these arrays of lengths \
                                 <em>n, n/2, n/4 etc.</em>) the overall time complexity can be written as O(<em>nlog(n)</em>).",
                                 "The space complexity is O(<em>log(n)</em>). Quick sort algorithm sorts the array in place so no new arrays or sub arrays are needed to store values. Recursion is used however and at most we will have <em>log(n)</em> calls to the quickSortHelper on the stack at a given time.", 
                                 "The worst case time complexity is O(<em>n<sup>2</sup>). This occurs when the pivot value selected is consistently the largest or smallest number in the array / sub arrays being sorted, thus making the partition return an index of <em>n-1</em> elements to rerun the algorithm on.",
                                 "Tony Hoare invented the algorithm in 1959.",
                                 "In 2009, Vladimir Yaroslavskiy proposed a new version of quick sort that uses two pivots. The average time complexity of this algorithm is O(<em>0.8*nlog(n)</em>)."
                                ],
            userScore:[0, 0, 0, 0, 0]
        }
};

/**
 * getCurrentQuestionsStruct(currentSortAlgorithm) will set the global
 * currentQuestionsStruct to the relevant algorithms questions.
 **/
let questionsCounter = 0;
let currentQuestionsStruct = {};
function getCurrentQuestionsStruct(currentSortAlgorithm){
    if(currentSortAlgorithm == "bubble-sort"){
        return  currentQuestionsStruct = allQuestions["bubbleSort"];
    } else if(currentSortAlgorithm == "merge-sort"){
        return  currentQuestionsStruct = allQuestions["mergeSort"];
    }else if(currentSortAlgorithm == "quick-sort"){
        return  currentQuestionsStruct = allQuestions["quickSort"];
    }else{
        return null;
    }
}

/**
 * addQuizQuestionsToHtml() adds the question and choices
 *  to the Take Quiz drop down.
 **/
function addQuizQuestionsToHtml(){
    questionsCounter = 0;
    let takeQuizBlock = document.getElementById("take-quiz-block");
    takeQuizBlock.innerHTML = `<button id="take-quiz-btn" class="btn btn-success button-text" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Take Quiz</button>`;

    // Remove answer and results block buttons and text as they are added later on when taking the quiz. 
    let quizResultsBlock = document.getElementById("quiz-results-block");
    quizResultsBlock.innerHTML = ``;
    let answerRevealBlock = document.getElementById("answer-reveal-block");
    answerRevealBlock.innerHTML = ``;

    // Update the question and the choices to the correct algorithm and question counter values.
    let quizBlock = document.getElementById("question-block");
    let answerChoiceBlock = document.getElementById("answer-choices-block");
    let navQuestionsBlock = document.getElementById("nav-questions-block");
    quizBlock.innerHTML = `<div id='question'>Question ${1}/${currentQuestionsStruct.questions.length}<br>${currentQuestionsStruct.questions[0]}</div>`;
    let answerChoiceBlockHTML = `<div class="row">`;
    for(let i=0; i<currentQuestionsStruct.answers[0].length; i++){
        answerChoiceBlockHTML += `<div class= "col-sm-6 col-xs-12">
                                    <input id="option-${i}" type="radio" name="answers" value="option-${i}">
                                    <label for="option-${i}">${currentQuestionsStruct.answers[0][i]}</label>
                                    </div>`;
    }
    answerChoiceBlock.innerHTML = answerChoiceBlockHTML + `</div>`;
    navQuestionsBlock.innerHTML = `<button id="prev-question" class="btn btn-success button-text">Previous Question</button>
    <button id="next-question" class="btn btn-success button-text">Next Question</button>`;
}

/**
 * previous and next question buttons to navigate through the questions in the selected quiz .
 **/
$(document).on('click','#prev-question', function(){
    if(questionsCounter != 0){
        questionsCounter -= 1;
    }
    updateQuestionsDisplayed();
});

$(document).on('click','#next-question',function(){
    let answerRevealBlock = document.getElementById("answer-reveal-block");
    answerRevealBlock.innerHTML = ``;
    if(questionsCounter < currentQuestionsStruct.questions.length - 1){
        questionsCounter += 1;
    }
    updateQuestionsDisplayed();
});

/**
 * updateQuestionsDisplayed() changes the question to that
 * retrieved using the questions counter
 **/
function updateQuestionsDisplayed(){
    let quizBlock = document.getElementById("question-block");
    let answerChoiceBlock = document.getElementById("answer-choices-block");
    quizBlock.innerHTML = `<div id='question'>Question ${questionsCounter + 1}/${currentQuestionsStruct.questions.length}<br>${currentQuestionsStruct.questions[questionsCounter]}</div>`;
    let answerChoiceBlockHTML = `<div class="row">`;
    for(let i=0; i<currentQuestionsStruct.answers[questionsCounter].length; i++){
        answerChoiceBlockHTML += `<div class= "col-sm-6 col-xs-12">
                                    <input id="option-${i}" type="radio" class="answer-radio" name="answers" value="option-${i}">
                                    <label for="option-${i}">${currentQuestionsStruct.answers[questionsCounter][i]}</label>
                                    </div>`;
    }
    answerChoiceBlock.innerHTML = answerChoiceBlockHTML;
}

/**
 * One of the questions answer choices is clicked. Provides the 
 * correct answer, answer explanation drop down. If we are at the last 
 * question then the results are shown.
 **/
$(document).on("click",'#answer-choices-block input[type=radio]', function() {
    let currentCorrectAnswer = currentQuestionsStruct.correctAnswers[questionsCounter];
    let answerRevealBlock = document.getElementById("answer-reveal-block");
    let questionModalResult = document.getElementById("question-modal-result");
    if($(this).val() === currentCorrectAnswer){
        questionModalResult.innerHTML = `Correct!  <span class="check-mark">&#9989;</span>`;
        currentQuestionsStruct.userScore[questionsCounter] = 1;
    }
    else{
        questionModalResult.innerHTML = `Incorrect!  <span class="cross-mark">&#9746;</span>`;
        currentQuestionsStruct.userScore[questionsCounter] = 0;
    }
    answerSelectUpdate(currentCorrectAnswer);
    let answerRevealBlockHTML = `<p><button class="btn btn-success button-text" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">Answer explanation</button></p>
    <div class="row"><div class="col-12"><div class="collapse multi-collapse answer-reveal-text" id="multiCollapseExample3">${currentQuestionsStruct.answerExplanations[questionsCounter]}</div></div></div>`;
    answerRevealBlock.innerHTML = answerRevealBlockHTML;

    // If final answer pressed, show the user their score otherwise the current question result modal.
    if(questionsCounter === currentQuestionsStruct.questions.length - 1){
        presentUserQuizScore();
    }else{
        $('#question-result').modal('show');
    }
});

/**
 * answerSelectUpdate(currentCorrectAnswer) styles the correct
 * and incorrect answers green and red
 **/
function answerSelectUpdate(currentCorrectAnswer){
    let answers = document.getElementsByName("answers");
    for(let i=0; i< answers.length; i++){
        let radioAnswer = answers[i].getAttribute("value");
        let selector = 'label[for=' + radioAnswer + ']';
        let label = document.querySelector(selector);
        if(radioAnswer === currentCorrectAnswer){
            label.classList.add("correct-answer");
        }
        else{
            label.classList.add("incorrect-answer");
        }
    }
}

/**
 * presentUserQuizScore() builds a table of questions and results
 * and adds it to a modal that it shows. The retake quiz and view results
 * buttons are also displayed
 **/
function presentUserQuizScore(){
    let quizModalResults = document.getElementById("quiz-results-modal");
    let quizModalHeader = document.getElementById("quiz-header-modal");
    let quizModalResultsHTML = `<table id="results-table"><th class="text-center pl-3 pr-3">Question</th><th class="text-center pl-3 pr-3">Result</th></tr>`;
    let correctAnswerCounter = 0;

    // Build uo table with questions and results.
    for(let i=0; i<currentQuestionsStruct.questions.length; i++){
        let questionResult =  currentQuestionsStruct.userScore[i]? `<div class="text-center"><span class="check-mark">&#9989;</span></div>`: `<div class="text-center"><span class="cross-mark">&#9746;</span></div>`;
        correctAnswerCounter += currentQuestionsStruct.userScore[i];
        quizModalResultsHTML += `<tr><td> ${currentQuestionsStruct.questions[i]} </td><td> ${questionResult} </td></tr>`;
    }

    let algorithm = document.getElementById("algo-header").innerHTML;
    let percentCorrect = 100*(correctAnswerCounter/currentQuestionsStruct.questions.length);
    quizModalResultsHTML += `</table><p id="score-fraction"><br>You scored ${percentCorrect}%.</p>`;
    quizModalResults.innerHTML = quizModalResultsHTML;
    quizModalHeader.innerHTML = `${algorithm} Quiz Results`;

    // Show modal of results to user
    $('#quiz-results').modal('show');

    // Add a retake quiz and view results button.
    let quizResultsBlock = document.getElementById("quiz-results-block");
    let quizResultsBlockHTML = `<button id="view-results" type="button" class="dashboard-btn btn btn-success button-text" aria-label="View Score Button">View Score</button>
    <button id="retake-quiz" type="button" class="dashboard-btn btn btn-success button-text" aria-label="Retake Quiz Button">Retake Quiz</button>`;
    quizResultsBlock.innerHTML = quizResultsBlockHTML;
}


/**
 * View Results button pressed. Show overall results modal.
 **/
$(document).on('click','#view-results',function(){
    $('#quiz-results').modal('show');
});

/**
 * Retake Quiz button pressed. Reset quiz.
 **/
$(document).on('click','#retake-quiz',function(){
    questionsCounter = 0;
    updateQuestionsDisplayed();
    for(let i=0; i<currentQuestionsStruct.userScore.length; i++){
        currentQuestionsStruct.userScore[i] = 0;
    }
    let quizResultsBlock = document.getElementById("quiz-results-block");
    quizResultsBlock.innerHTML = ``;
    let answerRevealBlock = document.getElementById("answer-reveal-block");
    answerRevealBlock.innerHTML = ``;
});