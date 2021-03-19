import {bubbleSortAlgorithm} from './sortingAlgorithms/bubble-sort.js'
import {mergeSortAlgorithm} from './sortingAlgorithms/merge-sort.js'

let currentSortAlgorithm = "None"
let screenHeightMultiplier = 0.5
let screenWidthMultiplier = 0.5
let swapAnimations = []
let lastSwapAnimationIdx = 0
let flipColor = false
var unpaused = true;
let animationCounter = 0
let swapAnimationsPlayed = []

function generateBarChart(){
    unpaused = true
    let barContainer = document.getElementById('bars-container')
    let barPixelSize = $('#arraySize').val()
    let spacerContainer = '<div class="col-1"></div>'
    let allBars = ""
    for(let i=0; i<screenWidthMultiplier*(screen.width/barPixelSize); i++){
        let singleBar = '<div id="bar-' + i + '" class="single-bar"></div>'
        allBars += singleBar
    }
    let barsContainerInnerHtml = `${spacerContainer}
                                <div  id="bar-chart" class="col-10">${allBars}</div>
                                ${spacerContainer}`
    barContainer.innerHTML = barsContainerInnerHtml
    let bars = document.getElementsByClassName("single-bar");
    let maxHeight = 0
    for(let bar of bars){
        let newHeight = Math.ceil(Math.random() * screen.height*screenHeightMultiplier)
        if (newHeight > maxHeight){
            maxHeight = newHeight
        }
        bar.setAttribute("style", "height: " + newHeight + "px")
        bar.style.width = barPixelSize + "px"
    }
}

function playAnimations(animations , animationIdx){
        console.log('animationCounter ' + animationCounter)
        let algorithmSpeed = $('#algorithmSpeed').val()
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

$('#sortBars').click(function() {
    animationCounter = 0
    let swapAnimationsIdx = 0
    if(unpaused){
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
    }else{
        unpaused = true
        while(swapAnimationsPlayed[swapAnimationsIdx] === true){
                swapAnimationsIdx++
            }
    }
        loop(swapAnimations, swapAnimationsIdx)
})
$('#pause').click(function() {
    unpaused = false
    console.log("swapAnimationsPlayed:" + swapAnimationsPlayed)
    const highestId = window.setTimeout(() => {
        for (let i = highestId; i >= 0; i--) {
            window.clearTimeout(i);
        }
    }, 0);
})
$('#generateBars').click(function() {
    generateBarChart();
});
$('#bubbleSortSelect').click(function() {
    let selectAlgorithm = document.getElementById('selectAlgorithm')
    selectAlgorithm.innerHTML = "Bubble Sort"
    currentSortAlgorithm = "bubbleSort"
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
