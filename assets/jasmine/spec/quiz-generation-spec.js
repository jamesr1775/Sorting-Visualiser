 
describe('TS_006_Quiz_Generation', function() {

    beforeEach(() => {
        setFixtures(`
                    <div class="container-fluid code-info-container-bg-color">
                        <div class="row">
                            <div class="col-1"></div>
                            <div id="code-block" class="col-lg-5 col-12 mt-5">
                                <pre id="bubble-sort-pre" class="display-none"><code id="bubble-sort-code-block">
                                </code></pre> 
                                <pre id="merge-sort-pre" class="display-none"><code id="merge-sort-code-block">
                                </code></pre>
                                <pre id="quick-sort-pre" class="display-none"><code id="quick-sort-code-block">
                                </code></pre>
                            </div>
                            <div id="algo-info-block" class="col-lg-5 col-12 mt-5">
                                <div id="bubble-sort-info-block" class="display-none"></div>
                                <div id="merge-sort-info-block" class="display-none"></div>
                                <div id="quick-sort-info-block" class="display-none"></div>
                            </div>
                            <div class="col-1"></div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <p id="take-quiz-block">
                        </p>
                        <div class="row">
                            <div class="col-1 d-none d-sm-block"></div>
                            <div class="col-10-sm col-12">
                                <div class="collapse multi-collapse" id="multiCollapseExample2">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-12">
                                                <div id="question-block"></div>
                                                <div id="answer-choices-block"></div>
                                            </div>
                                            <div class="col-12">
                                                <div id="nav-questions-block"></div>
                                            </div>
                                            <div class="col-12">
                                                <div id="answer-reveal-block"></div>
                                            </div>
                                            <div class="col-12">
                                                <div id="quiz-results-block"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-1 d-none d-sm-block"></div>
                        </div>
                    </div>
                    <div class="modal fade" id="question-result" tabindex="-1" role="dialog" aria-labelledby="question-result" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered " role="document">
                            <div class="modal-content">
                                <div id="question-modal-header">
                                </div>
                                <div id="question-modal-result" class="modal-body text-center">
                                </div>
                                <div id="question-modal-footer" class="modal-footer center-btn">
                                    <button type="button" class="btn btn-success  close-btn" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="quiz-results" tabindex="-1" role="dialog" aria-labelledby="select-algorithm" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered " role="document">
                            <div class="modal-content">
                                <div id="quiz-header-modal" class="modal-header">
                                    <h5 class="modal-title">Quiz Results:</h5>
                                </div>
                                <div id="quiz-results-modal" class="modal-body">

                                </div>
                                <div id="quiz-footer-modal" class="modal-footer center-btn">
                                    <button type="button" class="btn btn-success  close-btn" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>`)
        setStyleFixtures(`.correct-answer{
                            background: green !important;
                        }
                        .incorrect-answer{
                            background: red !important;
                        }`)

    });
    
    it('TC_001_Add_BubbleSort_Set_Questions', function() {
        let currentQuestions = getCurrentQuestionsStruct("bubble-sort")
        addQuizQuestionsToHtml("bubble-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            expect($("#question").html()).toContain(currentQuestions.questions[i])
            $("#next-question").click()
        }
        for(let i=currentQuestions.questions.length-1; i>=0; i--){
            expect($("#question").html()).toContain(currentQuestions.questions[i])
            $("#prev-question").click()
        }
    });
    it('TC_002_Add_MergeSort_Set_Questions', function() {
        let currentQuestions = getCurrentQuestionsStruct("merge-sort")
        addQuizQuestionsToHtml("merge-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            expect($("#question").html()).toContain(currentQuestions.questions[i])
            $("#next-question").click()
        }
        for(let i=currentQuestions.questions.length-1; i>=0; i--){
            expect($("#question").html()).toContain(currentQuestions.questions[i])
            $("#prev-question").click()
        }
    });
    it('TC_003_Add_QuickSort_Set_Questions', function() {
        let currentQuestions = getCurrentQuestionsStruct("quick-sort")
        addQuizQuestionsToHtml("quick-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            expect($("#question").html()).toContain(currentQuestions.questions[i])
            $("#next-question").click()
        }
        for(let i=currentQuestions.questions.length-1; i>=0; i--){
            expect($("#question").html()).toContain(currentQuestions.questions[i])
            $("#prev-question").click()
        }
    });

    it('TC_004_Add_BubbleSort_Set_Answers', function() {
        let currentQuestions = getCurrentQuestionsStruct("bubble-sort")
        addQuizQuestionsToHtml("bubble-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            let numAnswersChoices = currentQuestions.answers[i].length
            for(let j=0; j<numAnswersChoices; j++){
                expect($("label[for='"+ 'option-' + j +"']").html()).toEqual(currentQuestions.answers[i][j])
            }
            $("#next-question").click()
        }
        for(let i=currentQuestions.questions.length-1; i>=0; i--){
            let numAnswersChoices = currentQuestions.answers[i].length
            for(let j=0; j<numAnswersChoices; j++){
                expect($("label[for='"+ 'option-' + j +"']").html()).toEqual(currentQuestions.answers[i][j])
            }
            $("#prev-question").click()
        }
    });
    it('TC_005_Add_MergeSort_Set_Answers', function() {
        let currentQuestions = getCurrentQuestionsStruct("merge-sort")
        addQuizQuestionsToHtml("merge-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            let numAnswersChoices = currentQuestions.answers[i].length
            for(let j=0; j<numAnswersChoices; j++){
                expect($("label[for='"+ 'option-' + j +"']").html()).toEqual(currentQuestions.answers[i][j])
            }
            $("#next-question").click()
        }
        for(let i=currentQuestions.questions.length-1; i>=0; i--){
            let numAnswersChoices = currentQuestions.answers[i].length
            for(let j=0; j<numAnswersChoices; j++){
                expect($("label[for='"+ 'option-' + j +"']").html()).toEqual(currentQuestions.answers[i][j])
            }
            $("#prev-question").click()
        }
    });
    it('TC_006_Add_QuickSort_Set_Answers', function() {
        let currentQuestions = getCurrentQuestionsStruct("quick-sort")
        addQuizQuestionsToHtml("quick-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            let numAnswersChoices = currentQuestions.answers[i].length
            for(let j=0; j<numAnswersChoices; j++){
                expect($("label[for='"+ 'option-' + j +"']").html()).toEqual(currentQuestions.answers[i][j])
            }
            $("#next-question").click()
        }
        for(let i=currentQuestions.questions.length-1; i>=0; i--){
            let numAnswersChoices = currentQuestions.answers[i].length
            for(let j=0; j<numAnswersChoices; j++){
                expect($("label[for='"+ 'option-' + j +"']").html()).toEqual(currentQuestions.answers[i][j])
            }
            $("#prev-question").click()
        }
    });
    it('TC_007_BubbleSort_Check_Answer_Click', function() {
        let currentQuestions = getCurrentQuestionsStruct("bubble-sort")
        addQuizQuestionsToHtml("bubble-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            let numAnswersChoices = currentQuestions.answers[i].length
            for(let j=0; j<numAnswersChoices; j++){
                $("input[id='"+ 'option-' + j +"']").click()
                expect($("#answer-reveal-block").html()).toContain(currentQuestions.answerExplanations[i])
                if("option-" + j === currentQuestions.correctAnswers[i]){
                    expect($("#question-modal-result").html()).toContain("Correct!")
                    expect($("label[for='"+ 'option-' + j +"']")).toHaveClass('correct-answer')
                }
                else{
                    expect($("#question-modal-result").html()).toContain("Incorrect!")
                    expect($("label[for='"+ 'option-' + j +"']")).toHaveClass('incorrect-answer')
                }
            }
            $("#next-question").click()
        }
    });
    it('TC_008_MergeSort_Check_Answer_Click', function() {
        let currentQuestions = getCurrentQuestionsStruct("merge-sort")
        addQuizQuestionsToHtml("merge-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            let numAnswersChoices = currentQuestions.answers[i].length
            for(let j=0; j<numAnswersChoices; j++){
                $("input[id='"+ 'option-' + j +"']").click()
                expect($("#answer-reveal-block").html()).toContain(currentQuestions.answerExplanations[i])
                if("option-" + j === currentQuestions.correctAnswers[i]){
                    expect($("#question-modal-result").html()).toContain("Correct!")
                    expect($("label[for='"+ 'option-' + j +"']")).toHaveClass('correct-answer')
                }
                else{
                    expect($("#question-modal-result").html()).toContain("Incorrect!")
                    expect($("label[for='"+ 'option-' + j +"']")).toHaveClass('incorrect-answer')
                }
            }
            $("#next-question").click()
        }
    });
    it('TC_009_QuickSort_Check_Answer_Click', function() {
        let currentQuestions = getCurrentQuestionsStruct("quick-sort")
        addQuizQuestionsToHtml("quick-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            let numAnswersChoices = currentQuestions.answers[i].length
            for(let j=0; j<numAnswersChoices; j++){
                $("input[id='"+ 'option-' + j +"']").click()
                expect($("#answer-reveal-block").html()).toContain(currentQuestions.answerExplanations[i])
                if("option-" + j === currentQuestions.correctAnswers[i]){
                    expect($("#question-modal-result").html()).toContain("Correct!")
                    expect($("label[for='"+ 'option-' + j +"']")).toHaveClass('correct-answer')
                }
                else{
                    expect($("#question-modal-result").html()).toContain("Incorrect!")
                    expect($("label[for='"+ 'option-' + j +"']")).toHaveClass('incorrect-answer')
                }
            }
            $("#next-question").click()
        }
    });
    it('TC_010_RetakeQuiz_Btn', function() {
        let currentQuestions = getCurrentQuestionsStruct("quick-sort")
        addCodeToHtml()
        showCurrentAlgorithmCodeAndInfo("quick-sort")
        addQuizQuestionsToHtml("quick-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            $("#next-question").click()
        }
        $("input[id='"+ 'option-0' +"']").click()
        expect($("#retake-quiz")).toExist()

    });
    it('TC_011_ViewResults_Btn', function() {
        let currentQuestions = getCurrentQuestionsStruct("quick-sort")
        addCodeToHtml()
        showCurrentAlgorithmCodeAndInfo("quick-sort")
        addQuizQuestionsToHtml("quick-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            $("#next-question").click()
        }
        $("input[id='"+ 'option-0' +"']").click()
        expect($("#view-results")).toExist()
    });
    it('TC_012_QuizScore', function() {
        let currentQuestions = getCurrentQuestionsStruct("quick-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            currentQuestions.userScore[i] = 0    
        }
        addCodeToHtml()
        showCurrentAlgorithmCodeAndInfo("quick-sort")
        addQuizQuestionsToHtml("quick-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            $("#next-question").click()
        }
        $("input[id='"+ 'option-0' +"']").click()
        expect($("#score-fraction").text()).toEqual("You scored 20%.")
    });
    it('TC_013_Perfect_QuizScore', function() {
        let currentQuestions = getCurrentQuestionsStruct("quick-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            currentQuestions.userScore[i] = 0    
        }
        addCodeToHtml()
        showCurrentAlgorithmCodeAndInfo("quick-sort")
        addQuizQuestionsToHtml("quick-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
                $("input[id='"+ currentQuestions.correctAnswers[i] +"']").click()
            $("#next-question").click()
        }
        $("input[id='"+ currentQuestions.correctAnswers[currentQuestions.correctAnswers.length - 1] +"']").click()
        expect($("#score-fraction").text()).toEqual("You scored 100%.")
    });
    it('TC_014_Zero_QuizScore', function() {
        let currentQuestions = getCurrentQuestionsStruct("quick-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            currentQuestions.userScore[i] = 0    
        }
        addCodeToHtml()
        showCurrentAlgorithmCodeAndInfo("quick-sort")
        addQuizQuestionsToHtml("quick-sort")
        for(let i=0; i<currentQuestions.questions.length-1; i++){
            for(let j=0; j<currentQuestions.answers.length; j++ ){
                if("option-" + j != currentQuestions.correctAnswers[i]){
                    $("input[id='"+ 'option' + j +"']").click()
                    break
                }
            }
            $("#next-question").click()
        }
        let wrongChoice = "option-0" === currentQuestions.correctAnswers[currentQuestions.correctAnswers.length -1] ? "option-1" : "option-0"
        $("input[id='"+ wrongChoice +"']").click() 
        expect($("#score-fraction").text()).toEqual("You scored 0%.")
    });
});
