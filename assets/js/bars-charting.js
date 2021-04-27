
// Variables
let currentSortAlgorithm = "None";
let lastSortAlgorithm = "None";
let screenHeightMultiplier = 0.5;
let screenWidthMultiplier = 0.5;
let swapAnimations = [];
let lastSwapAnimationIdx = 0;
let flipColor = false;
let unpaused = true;
let animationCounter = 0;
let swapAnimationsPlayed = [];

/**
 * generateBarChart() will generate a new set of bars to be displayed in the graph
 * the number of which depends on the slider value.
 **/
function generateBarChart(){
    unpaused = true;
    let barChart = document.getElementById('bar-chart');
    let arraySize = $('#arraySize').val();
    let spacerContainer = '<div class="col-1"></div>';
    let allBars = "";
    swapAnimations = [];

    // Generate all bar divs inside a string literal.
    for(let i=0; i<arraySize; i++){
        let singleBar = '<div id="bar-' + i + '" class="single-bar"></div>';
        allBars += singleBar;
    }
    let barsContainerInnerHtml = `${allBars}`;
    barChart.innerHTML = barsContainerInnerHtml;
    let bars = document.getElementsByClassName("single-bar");
    let maxHeight = 0;
    let newBarWidth = ((barChart.clientWidth - 20 - ((bars.length )*2))/(arraySize));

    // Set new random heights to the bars in the barsContainer.
    for(let bar of bars){
        let newHeight = Math.ceil(Math.random() * screen.height*screenHeightMultiplier);
        if (newHeight > maxHeight){
            maxHeight = newHeight;
        }
        bar.style.height = newHeight + "px";
        bar.style.width = newBarWidth + "px";
    }
    barChart.setAttribute("style", "min-height:" + (screen.height*screenHeightMultiplier + 20) + "px");
}

/**
 * playAnimations(animations , animationIdx) takes in an array of animation data to be played
 * and which is retrieved from a selected sorting algorithm. The animationIdx is tracked as
 * when the animation is paused and started, the playAnimations can pick up where it left off.
 **/
function playAnimations(animations , animationIdx){
        let algorithmSpeed = 75 - $('#algorithmSpeed').val();
        let sortBarsId = document.getElementById("sortBars");
        let currentAnimation = animations;
        let currentBar = currentAnimation[0];
        let currentBarNewHeight = currentAnimation[1];
        let swapBar = currentAnimation[2];
        let swapColor = currentAnimation[3];
        let barInFinalPosition = currentAnimation[4];
        // Swap Bar colors animation to highlight two bars yellow and red
        if(swapColor){
            setTimeout(function() {
                if(flipColor){
                    setColor(currentBar, "red");
                    swapAnimationsPlayed[animationIdx] = true;
                }
                else{
                    setColor(currentBar, "yellow");
                    swapAnimationsPlayed[animationIdx] = true;
                }
                flipColor = !flipColor;
            }, algorithmSpeed*animationCounter);
        }
        // Swap Bar heights animation to swap a bars height to a new height.
        else if(swapBar){
            setTimeout(function() {
                setHeight(currentBar, currentBarNewHeight);
                swapAnimationsPlayed[animationIdx] = true;
            }, algorithmSpeed*animationCounter);
        }
        // Color bar blue if its in the correct position animation.
        else if(barInFinalPosition){
            setTimeout(function() {
                setColor(currentBar, "cornflowerblue");
                swapAnimationsPlayed[animationIdx] = true;
            }, algorithmSpeed*animationCounter);
        }
        // Otherwise Change bar back to default green color.
        else{
            setTimeout(function() {
                setColor(currentBar, "#198754");
                swapAnimationsPlayed[animationIdx] = true;
            }, algorithmSpeed*animationCounter);
        }
    animationCounter += 1;
    // If all animations played then we can enable the controls.
    if(animationIdx === swapAnimations.length - 1){
        setTimeout(function() {
            toggleControlButtons(false)
            sortBarsId.innerHTML = "Start Sorting";
        }, algorithmSpeed*animationCounter)
    }
}

/**
 * setHeight(barId, newHeight) sets a divs height with id barId to the newHeight variable.
 **/
function setHeight(barId, newHeight){
    let barOne =  $(barId);
    barOne.css("height", newHeight);
}

/**
 * setColor(barId, color) sets a divs background with id barId to the color variable.
 **/
function setColor(barId, color){
    let barOne =  $(barId);
    barOne.css("background", color);
}

/**
 * The loop and loopStep recursion calls play animations 
 * asynchronously so we are able to pause / not freeze the window.
 **/
function loopStep(swapAnimations, swapAnimationsIdx) {
    let currentAnimation = swapAnimations[swapAnimationsIdx];
    playAnimations(currentAnimation, swapAnimationsIdx);
}

function loop(swapAnimations, swapAnimationsIdx) {
    // If we have played all animations or we are paused stop looping.
    if (swapAnimationsIdx >= swapAnimations.length || unpaused === false){
        return;
    }
    loopStep(swapAnimations, swapAnimationsIdx);
    setTimeout(function() {
        loop(swapAnimations, swapAnimationsIdx);
    }, 0);
    swapAnimationsIdx++;
}

/**
 * checkIfSorted() returns a boolean as to whether the chart is sorted and the bars have updated their
 * colors to the correct position color.
 **/
function checkIfSorted(){
    let bars = document.getElementsByClassName("single-bar");
    for(let i=0; i< bars.length - 1; i++){
        let barOne = document.getElementById("bar-" + i);
        let barTwo = document.getElementById("bar-" + (i + 1));
        let checkBarOneColor = barOne.style.backgroundColor === "cornflowerblue"
        let checkBarTwoColor = barTwo.style.backgroundColor === "cornflowerblue"
        if(barOne.clientHeight <= barTwo.clientHeight && checkBarOneColor && checkBarTwoColor){
            continue
        }else{
            return false
        }
    }
    return true
}

/**
 * Start Sorting button pressed will retrieve an array of animations from 
 * the currently selected algorithm. Once started the button can be used
 * to pause the animations. If no algorithm is selected it will show
 * the error modal
 **/
$('#sortBars').click(function() {
    let sortBarsId = document.getElementById("sortBars");
    animationCounter = 0;
    let swapAnimationsIdx = 0;
    if(currentSortAlgorithm != "None"){
        // Check if we have animations to play otherwise get them for the selected algorithm.
        if(swapAnimations.length === 0 || lastSortAlgorithm != currentSortAlgorithm){
            unpaused = true
            if(currentSortAlgorithm === "bubble-sort"){
                swapAnimations = bubbleSortAlgorithm();
                lastSortAlgorithm = currentSortAlgorithm
            }
            else if(currentSortAlgorithm === "merge-sort"){
                swapAnimations = mergeSortAlgorithm();
                lastSortAlgorithm = currentSortAlgorithm
            }
            else if(currentSortAlgorithm ==="quick-sort"){
                swapAnimations = quickSortAlgorithm();
                lastSortAlgorithm = currentSortAlgorithm
            }
            else{
                event.preventDefault();
                $('#select-algorithm').modal('show');
            }  
            for(let i=0; i<swapAnimations.length; i++){
                swapAnimationsPlayed[i] = false;
            }
            sortBarsId.innerHTML = "Pause";
            toggleControlButtons(true)
        }
        // The pause button was pressed or we are already sorted so enter to enable buttons and update pause to start text 
        else if(unpaused || checkIfSorted()){
            unpaused = false;
            const highestId = window.setTimeout(() => {
                for (let i = highestId; i >= 0; i--) {
                    window.clearTimeout(i);
                }
            }, 0);
            sortBarsId.innerHTML = "Start Sorting";
            toggleControlButtons(false)
        }
        // The Start sorting button was pressed.
        else{
            unpaused = true;
            toggleControlButtons(true)
            while(swapAnimationsPlayed[swapAnimationsIdx] === true){
                swapAnimationsIdx++;
            }
            sortBarsId.innerHTML = "Pause";
        }
        loop(swapAnimations, swapAnimationsIdx);
    }
    // If no algorithm is selected , show modal.
    else{
        event.preventDefault();
        $('#select-algorithm').modal('show');
    }
});

/**
 * toggleControlButtons(state) will enable and disable the control 
 * buttons depending on the boolean value of the state variable.
 **/
function toggleControlButtons(state){
    $("#algorithmSpeed").prop("disabled",state);
    $("#generateBars").prop("disabled",state);
    $("#arraySize").prop("disabled",state);
    $("#selectAlgorithm").prop("disabled",state);
    if (state){
        $("#algorithmSpeedDiv").addClass("disabled-div");
        $("#arraySizeDiv").addClass("disabled-div")
    }else{
        $("#algorithmSpeedDiv").removeClass("disabled-div");
        $("#arraySizeDiv").removeClass("disabled-div")
    }
}

/**
 * Generate Chart Control Button
 **/
$('#generateBars').click(function() {
    let sortBarsId = document.getElementById("sortBars");
    sortBarsId.innerHTML = "Start Sorting";
    generateBarChart();
});

/**
 * Bubble Sort Select Control Button
 **/
$('#bubbleSortSelect').click(function() {
    let selectAlgorithm = document.getElementById('selectAlgorithm');
    selectAlgorithm.innerHTML = "Bubble Sort";
    currentSortAlgorithm = "bubble-sort";
    setupAlgorithmSelection(currentSortAlgorithm);
});

/**
 * Merge Sort Select Control Button
 **/
$('#mergeSortSelect').click(function() {
    let selectAlgorithm = document.getElementById('selectAlgorithm');
    selectAlgorithm.innerHTML = "Merge Sort";
    currentSortAlgorithm = "merge-sort";
    setupAlgorithmSelection(currentSortAlgorithm);
});

/**
 * Quick Sort Select Control Button
 **/
$('#quickSortSelect').click(function() {
    let selectAlgorithm = document.getElementById('selectAlgorithm');
    selectAlgorithm.innerHTML = "Quick Sort";
    currentSortAlgorithm = "quick-sort";
    setupAlgorithmSelection(currentSortAlgorithm);
});

/**
 * hideOtherAlgorithmCodeAndInfo(currentSortAlgorithm) will hide the code block and
 * the algorithm information block for all algorithms except for the currentSortAlgorithm
 **/
function hideOtherAlgorithmCodeAndInfo(currentSortAlgorithm){
    let validAlgorithms = ["quick-sort", "bubble-sort", "merge-sort"];
    for(let algorithm of validAlgorithms){
        if (algorithm != currentSortAlgorithm){
            let algoInfoBlock = document.getElementById(algorithm + "-info-block");
            let codeBlock = document.getElementById( algorithm + "-pre");
            codeBlock.classList.add("display-none");
            algoInfoBlock.classList.add("display-none");
        }
    }
}

/**
 * showCurrentAlgorithmCodeAndInfo(currentSortAlgorithm) will show the code block and
 * the algorithm information block for only the currentSortAlgorithm
 **/
function showCurrentAlgorithmCodeAndInfo(currentSortAlgorithm){
    let containerBlock = document.getElementById(currentSortAlgorithm + "-pre");
    let codeBlock = document.getElementById(currentSortAlgorithm + "-code-block");
    let algoInfoBlock = document.getElementById(currentSortAlgorithm + "-info-block");
    algoInfoBlock.classList.remove("display-none");
    containerBlock.classList.remove("display-none");
    codeBlock.classList.remove("language-none");
    codeBlock.classList.add("language-js");
    Prism.highlightElement(codeBlock);
}

/**
 * setupAlgorithmSelection(currentSortAlgorithm )  sets up the 
 * code and algo info blocks and the quiz when an algorithm is chosen.
 **/
function setupAlgorithmSelection(currentSortAlgorithm){
    let currentQuestions = getCurrentQuestionsStruct(currentSortAlgorithm);
    showCurrentAlgorithmCodeAndInfo(currentSortAlgorithm);
    hideOtherAlgorithmCodeAndInfo(currentSortAlgorithm);
    addQuizQuestionsToHtml(currentSortAlgorithm);
    let infoBlockDiv = document.getElementById("algo-info-block");
    let codeBlockDiv = document.getElementById("code-block");
    codeBlockDiv.classList.add("code-block-div");
    infoBlockDiv.classList.add("algo-info-div");
}

/**
 * addCodeToHtml() sets up all the algorithms code and algo 
 * info blocks and on document ready.
 **/
function addCodeToHtml(){  
    let bSortCodeBlock = document.getElementById("bubble-sort-code-block");
    let mSortCodeBlock = document.getElementById("merge-sort-code-block");
    let qSortCodeBlock = document.getElementById("quick-sort-code-block");
    let bSortInfoBlock = document.getElementById("bubble-sort-info-block");
    let mSortInfoBlock = document.getElementById("merge-sort-info-block");
    let qSortInfoBlock = document.getElementById("quick-sort-info-block");
    bSortCodeBlock.innerHTML = `${getBubbleSortCodeString()}`;
    mSortCodeBlock.innerHTML = `${getMergeSortCodeString()}`;
    qSortCodeBlock.innerHTML = `${getQuickSortCodeString()}`;
    bSortInfoBlock.innerHTML = `${getBubbleSortInfoString()}`;
    mSortInfoBlock.innerHTML = `${getMergeSortInfoString()}`;
    qSortInfoBlock.innerHTML = `${getQuickSortInfoString()}`;
}

/**
 * Instructions modal help button.
 **/
$('#tutorial-close-btn').click(function() {
    let tutorialArrow = document.getElementById("tutorial-arrow");
    $("#tutorial-arrow").fadeIn( "slow" );
    tutorialArrow.classList.add("display-flex");
    tutorialArrow.classList.remove("display-none");
    setTimeout(function() {
        $("#tutorial-arrow").fadeOut( "slow" );
    }, 2000);
    setTimeout(function() {
        $("#tutorial-arrow").fadeOut( "slow" );
        tutorialArrow.classList.remove("display-flex");
    }, 2500);
});

/**
 * If bar chart div exists generate a bars in the chart and add the code and info to html but hidden.
 **/
if ($('#bar-chart').length > 0) {
    generateBarChart();
    addCodeToHtml(currentSortAlgorithm);
    $('#instructions').modal('show');
    var slider = document.getElementById("arraySize");
    slider.oninput = function() {
        generateBarChart();
    };
}

/**
 * On Window size event call the resizeBarChart() function.
**/
window.onresize = function(event) {
    resizeBarChart()        
};

/**
 * resizeBarChart() will adjust the width of the bars based on the current resolution of the window.
**/
function resizeBarChart(){
    let barChart = document.getElementById('bar-chart');
    let bars = document.getElementsByClassName("single-bar");
    let arraySize = $('#arraySize').val();
    let newBarWidth = ((barChart.clientWidth - 20 - ((bars.length )*2))/(arraySize));
    for(let bar of bars){
        bar.style.width = newBarWidth + "px";
    }
}