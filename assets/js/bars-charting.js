import {bubbleSortAlgorithm, getBubbleSortCodeString, getBubbleSortInfoString} from './sortingAlgorithms/bubble-sort.js'
import {mergeSortAlgorithm} from './sortingAlgorithms/merge-sort.js'
import {addQuizQuestionsToHtml, getCurrentQuestionsStruct} from './quiz-generation.js'

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
    console.log('barChart.style.width ' + barChart.clientWidth)
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
        console.log('animationCounter ' + animationCounter)
        let algorithmSpeed = 51 - $('#algorithmSpeed').val()
        console.log('algorithmSpeed ' + algorithmSpeed)
        let currentAnimation = animations
        let currentBar = currentAnimation[0]
        let currentBarNewHeight = currentAnimation[1]
        let swapBar = currentAnimation[2]
        let swapColor = currentAnimation[3]
        let barInFinalPosition = currentAnimation[4]
        console.log('currentBar: ' + currentBar  + ' newHeight: ' + currentBarNewHeight + ' swapBar: ' + swapBar)
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
                setColor(currentBar, "royalblue")
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
            if(currentSortAlgorithm === "bubbleSort"){
                swapAnimations = bubbleSortAlgorithm();
            }
            else if(currentSortAlgorithm === "mergeSort"){
                swapAnimations = mergeSortAlgorithm();
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
            console.log("swapAnimationsPlayed:" + swapAnimationsPlayed)
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
    currentSortAlgorithm = "bubbleSort"
    let currentQuestions = getCurrentQuestionsStruct(currentSortAlgorithm)
    addCodeToHtml(currentSortAlgorithm)
    addQuizQuestionsToHtml(currentSortAlgorithm)
    console.log("currentSortAlgorithm:" + currentSortAlgorithm)
    let codeBlock = document.getElementById("algo-code-block")
    let codeBlockDiv = document.getElementById("code-block")
    let infoBlockDiv = document.getElementById("algo-info-block")
    codeBlock.classList.remove("language-none")
    codeBlock.classList.add("language-js")
    codeBlockDiv.classList.add("code-block-div")
    infoBlockDiv.classList.add("algo-info-div")
    Prism.highlightElement(codeBlock)
})
$('#mergeSortSelect').click(function() {
    let selectAlgorithm = document.getElementById('selectAlgorithm')
    selectAlgorithm.innerHTML = "Merge Sort"
    currentSortAlgorithm = "mergeSort"
})
$('#quickSortSelect').click(function() {
    let selectAlgorithm = document.getElementById('selectAlgorithm')
    selectAlgorithm.innerHTML = "Quick Sort"
    currentSortAlgorithm = "quickSort"
})
$(document).ready(function() {
    generateBarChart()
});

function addCodeToHtml(currentAlgorithm){  
    console.log("currentAlgorithm" + currentAlgorithm)
    let codeBlock = document.getElementById("algo-code-block")
    let algoInfoBlock = document.getElementById("algo-info-block")
    let codeString = ``
    let codeInfoString = ``
    if (currentAlgorithm==="bubbleSort"){
        codeString = getBubbleSortCodeString()
        codeInfoString = getBubbleSortInfoString()
    }
    codeBlock.textContent = `${codeString}`
    algoInfoBlock.innerHTML = `${codeInfoString}`
}
