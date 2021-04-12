// import {bubbleSortAlgorithm, getBubbleSortCodeString, getBubbleSortInfoString} from './sortingAlgorithms/bubble-sort.js'
// import {mergeSortAlgorithm,  getMergeSortCodeString, getMergeSortInfoString} from './sortingAlgorithms/merge-sort.js'
// import {quickSortAlgorithm,  getQuickSortCodeString, getQuickSortInfoString} from './sortingAlgorithms/quick-sort.js'
// import {addQuizQuestionsToHtml, getCurrentQuestionsStruct} from './quiz-generation.js'

let currentSortAlgorithm = "None"
let screenHeightMultiplier = 0.5
let screenWidthMultiplier = 0.5
let swapAnimations = []
let lastSwapAnimationIdx = 0
let flipColor = false
let unpaused = true;
let animationCounter = 0
let swapAnimationsPlayed = []

function generateBarChart(){
    unpaused = true
    let barChart = document.getElementById('bar-chart')
    let arraySize = $('#arraySize').val()
    let spacerContainer = '<div class="col-1"></div>'
    let allBars = ""
    swapAnimations = []
    for(let i=0; i<arraySize; i++){
        let singleBar = '<div id="bar-' + i + '" class="single-bar"></div>'
        allBars += singleBar
    }
    let barsContainerInnerHtml = `${allBars}`
    barChart.innerHTML = barsContainerInnerHtml
    let bars = document.getElementsByClassName("single-bar");
    let maxHeight = 0
    let newBarWidth = ((barChart.clientWidth - 20 - ((bars.length )*2))/(arraySize))
    for(let bar of bars){
        let newHeight = Math.ceil(Math.random() * screen.height*screenHeightMultiplier)
        if (newHeight > maxHeight){
            maxHeight = newHeight
        }
        bar.style.height = newHeight + "px"
        bar.style.width = newBarWidth + "px"
    }
    barChart.setAttribute("style", "min-height:" + (maxHeight + 20) + "px");
}

function playAnimations(animations , animationIdx){
        let algorithmSpeed = 51 - $('#algorithmSpeed').val()
        let currentAnimation = animations
        let currentBar = currentAnimation[0]
        let currentBarNewHeight = currentAnimation[1]
        let swapBar = currentAnimation[2]
        let swapColor = currentAnimation[3]
        let barInFinalPosition = currentAnimation[4]
        if(swapColor){
            setTimeout(function() {
                if(flipColor){
                    setColor(currentBar, "red")
                    swapAnimationsPlayed[animationIdx] = true
                }
                else{
                    setColor(currentBar, "yellow")
                    swapAnimationsPlayed[animationIdx] = true                    
                }
                flipColor = !flipColor
            }, algorithmSpeed*animationCounter);
        }
        else if(swapBar){
            setTimeout(function() {
                setHeight(currentBar, currentBarNewHeight)
                swapAnimationsPlayed[animationIdx] = true
            }, algorithmSpeed*animationCounter);
        }
        else if(barInFinalPosition){
            setTimeout(function() {
                setColor(currentBar, "cornflowerblue")
                swapAnimationsPlayed[animationIdx] = true
            }, algorithmSpeed*animationCounter);
        }
        else{
            setTimeout(function() {
                setColor(currentBar, "#198754")
                swapAnimationsPlayed[animationIdx] = true
            }, algorithmSpeed*animationCounter);
        }
    animationCounter += 1
}

function setHeight(barId, newHeight){
    let barOne =  $(barId)
    barOne.css("height", newHeight) 
}

function setColor(barId, color){
    let barOne =  $(barId)
    barOne.css("background", color)
}

function loopStep(swapAnimations, swapAnimationsIdx) {
    let currentAnimation = swapAnimations[swapAnimationsIdx]
    playAnimations(currentAnimation, swapAnimationsIdx)
}

function loop(swapAnimations, swapAnimationsIdx) {
    if (swapAnimationsIdx >= swapAnimations.length || unpaused === false){
        return
    }
    loopStep(swapAnimations, swapAnimationsIdx);
    setTimeout(function() {
        loop(swapAnimations, swapAnimationsIdx)
    }, 0);
    swapAnimationsIdx++
}

var slider = document.getElementById("arraySize");
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    generateBarChart()
}
$('#sortBars').click(function() {
    let sortBarsId = document.getElementById("sortBars")
    animationCounter = 0
    let swapAnimationsIdx = 0
    if(currentSortAlgorithm != "None"){
        if(swapAnimations.length === 0){
            if(currentSortAlgorithm === "bubble-sort"){
                swapAnimations = bubbleSortAlgorithm();
            }
            else if(currentSortAlgorithm === "merge-sort"){
                swapAnimations = mergeSortAlgorithm();
            }
            else if(currentSortAlgorithm ==="quick-sort"){
                swapAnimations = quickSortAlgorithm();
            }
            else{
                event.preventDefault();
                $('#select-algorithm').modal('show');
            }  
            for(let i=0; i<swapAnimations.length; i++){
                swapAnimationsPlayed[i] = false
            }
            sortBarsId.innerHTML = "Pause"
        }
        else if(unpaused){
            unpaused = false
            const highestId = window.setTimeout(() => {
                for (let i = highestId; i >= 0; i--) {
                    window.clearTimeout(i);
                }
            }, 0);
            sortBarsId.innerHTML = "Start Sorting"
        }
        else{
            unpaused = true
            while(swapAnimationsPlayed[swapAnimationsIdx] === true){
                    swapAnimationsIdx++
            }
            sortBarsId.innerHTML = "Pause"
        }
        loop(swapAnimations, swapAnimationsIdx)
    }
    else{
        event.preventDefault();
        $('#select-algorithm').modal('show');
    }
})
$('#generateBars').click(function() {
    let sortBarsId = document.getElementById("sortBars")
    sortBarsId.innerHTML = "Start Sorting"
    generateBarChart();
});
$('#bubbleSortSelect').click(function() {
    let selectAlgorithm = document.getElementById('selectAlgorithm')
    selectAlgorithm.innerHTML = "Bubble Sort"
    currentSortAlgorithm = "bubble-sort"
    setupAlgorithmSelection(currentSortAlgorithm)

})
$('#mergeSortSelect').click(function() {
    let selectAlgorithm = document.getElementById('selectAlgorithm')
    selectAlgorithm.innerHTML = "Merge Sort"
    currentSortAlgorithm = "merge-sort"
    setupAlgorithmSelection(currentSortAlgorithm)
})
$('#quickSortSelect').click(function() {
    let selectAlgorithm = document.getElementById('selectAlgorithm')
    selectAlgorithm.innerHTML = "Quick Sort"
    currentSortAlgorithm = "quick-sort"
    setupAlgorithmSelection(currentSortAlgorithm)
})
function hideOtherAlgorithmCode(currentSortAlgorithm){
    let validAlgorithms = ["quick-sort", "bubble-sort", "merge-sort"]
    for(let algorithm of validAlgorithms){
        if (algorithm != currentSortAlgorithm){
            let algoInfoBlock = document.getElementById(algorithm + "-info-block")
            let codeBlock = document.getElementById( algorithm + "-pre")
            codeBlock.classList.add("display-none")
            algoInfoBlock.classList.add("display-none")
        }
    }
}
function showCurrentAlgorithmCode(currentSortAlgorithm){
    let containerBlock = document.getElementById(currentSortAlgorithm + "-pre")
    let codeBlock = document.getElementById(currentSortAlgorithm + "-code-block")
    let algoInfoBlock = document.getElementById(currentSortAlgorithm + "-info-block")
    console.log("algoInfoBlock" +algoInfoBlock )
    console.log("currentSortAlgorithm " +currentSortAlgorithm )
    algoInfoBlock.classList.remove("display-none")
    containerBlock.classList.remove("display-none")
    codeBlock.classList.remove("language-none")
    codeBlock.classList.add("language-js")
    Prism.highlightElement(codeBlock)
}

function setupAlgorithmSelection(currentSortAlgorithm){
    let currentQuestions = getCurrentQuestionsStruct(currentSortAlgorithm)
    showCurrentAlgorithmCode(currentSortAlgorithm)
    hideOtherAlgorithmCode(currentSortAlgorithm)
    addQuizQuestionsToHtml(currentSortAlgorithm)
    let infoBlockDiv = document.getElementById("algo-info-block")
    let codeBlockDiv = document.getElementById("code-block")
    codeBlockDiv.classList.add("code-block-div")
    infoBlockDiv.classList.add("algo-info-div")
}

$(document).ready(function() {
    generateBarChart()
    addCodeToHtml(currentSortAlgorithm)
    $('#instructions').modal('show');
});
function addCodeToHtml(){  
    let bSortCodeBlock = document.getElementById("bubble-sort-code-block")
    let mSortCodeBlock = document.getElementById("merge-sort-code-block")
    let qSortCodeBlock = document.getElementById("quick-sort-code-block")
    let bSortInfoBlock = document.getElementById("bubble-sort-info-block")
    let mSortInfoBlock = document.getElementById("merge-sort-info-block")
    let qSortInfoBlock = document.getElementById("quick-sort-info-block")
    bSortCodeBlock.innerHTML = `${getBubbleSortCodeString()}`
    mSortCodeBlock.innerHTML = `${getMergeSortCodeString()}`
    qSortCodeBlock.innerHTML = `${getQuickSortCodeString()}`
    bSortInfoBlock.innerHTML = `${getBubbleSortInfoString()}`
    mSortInfoBlock.innerHTML = `${getMergeSortInfoString()}`
    qSortInfoBlock.innerHTML = `${getQuickSortInfoString()}`
}

$('#tutorial-close-btn').click(function() {
    let tutorialArrow = document.getElementById("tutorial-arrow")
    $("#tutorial-arrow").fadeIn( "slow" )
    tutorialArrow.classList.add("display-flex")
    tutorialArrow.classList.remove("display-none")
    setTimeout(function() {
        $("#tutorial-arrow").fadeOut( "slow" )
    }, 2000);
    setTimeout(function() {
        $("#tutorial-arrow").fadeOut( "slow" )
            tutorialArrow.classList.remove("display-flex")
    }, 2500);

})