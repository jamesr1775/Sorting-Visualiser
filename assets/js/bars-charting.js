import {bubbleSortAlgorithm} from './sortingAlgorithms/bubble-sort.js'
import {mergeSortAlgorithm} from './sortingAlgorithms/merge-sort.js'

let currentSortAlgorithm = "None"

function generateBarChart(){
    let barContainer = document.getElementById('bars-container')
    let barPixelSize = $('#arraySize').val()
    let spacerContainer = '<div class="col-1"></div>'
    let allBars = ""
    /*Need to remove these magic numbers for screen size adjusting but working for now*/
    for(let i=0; i<(1/2)*(screen.width/barPixelSize); i++){
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
        /*Need to remove these magic numbers for screen size adjusting but working for now*/
        let newHeight = Math.ceil(Math.random() * screen.height*0.5)
        if (newHeight > maxHeight){
            maxHeight = newHeight
        }
        bar.setAttribute("style", "height: " + newHeight + "px")
        bar.style.width = barPixelSize + "px"
    }
}

function playAnimations(animations){
    let flipColor = false
    for(let i=0; i<animations.length; i+=1){
        let algorithmSpeed = $('#algorithmSpeed').val()
        console.log('algorithmSpeed ' + algorithmSpeed)
        let currentAnimation = animations[i]
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
                }
                else{
                    setColor(currentBar, "yellow")
                }
                flipColor = !flipColor
            }, algorithmSpeed*i);
        }
        else if(swapBar){
            setTimeout(function() {
                setHeight(currentBar, currentBarNewHeight)
            }, algorithmSpeed*i);
        }
        else if(barInFinalPosition){
            setTimeout(function() {
                setColor(currentBar, "royalblue")
            }, algorithmSpeed*i);
        }
        else{
            setTimeout(function() {
                setColor(currentBar, "#198754")
            }, algorithmSpeed*i);
        }
    }
}

function setHeight(barId, newHeight){
    let barOne =  $(barId)
    barOne.css("height", newHeight) 
}
function setColor(barId, color){
    let barOne =  $(barId)
    barOne.css("background", color)
}
$('#generateBars').click(function() {
    generateBarChart();
});
$('#sortBars').click(function() {
    let swapAnimations = []
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
    
    playAnimations(swapAnimations)
})

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