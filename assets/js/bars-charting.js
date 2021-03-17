import {bubbleSortAlgorithm} from './sortingAlgorithms/bubble-sort.js'
import {mergeSortAlgorithm} from './sortingAlgorithms/merge-sort.js'

let currentSortAlgorithm = "None"

function generateBarChart(){
    console.log("screen:")
    console.log(screen.width)
    console.log(screen.height)
    console.log('generateBarChart: called')
    let barContainer = document.getElementById('bars-container')
    let barPixelSize = $('#arraySize').val()
    let spacerContainer = '<div class="col-1"></div>'
    let allBars = ""
    console.log('generateBarChart: barPixelSize' + barPixelSize)
    /*Need to remove these magic numbers for screen size adjusting but working for now*/
    for(let i=0; i<(1/2)*(screen.width/barPixelSize); i++){
        let singleBar = '<div id="bar-' + i + '" class="single-bar"></div>'
        console.log(singleBar)
        allBars += singleBar
    }
    let barsContainerInnerHtml = `${spacerContainer}
                                <div  id="bar-chart" class="col-10">${allBars}</div>
                                ${spacerContainer}`
    barContainer.innerHTML = barsContainerInnerHtml
    let bars = document.getElementsByClassName("single-bar");
    console.log('setting new heights: called')
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
    let barChart = document.getElementById('bar-chart') 
    // barChart.style.minHeight = maxHeight + "px"
}

function playAnimations(animations){
    let flipColor = false
    for(let i=0; i<animations.length; i+=1){
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
                    setColor(currentBar, "red")}
                else{
                    setColor(currentBar, "yellow")
                }
                flipColor = !flipColor
            },20*i);
        }
        else if(swapBar){
            setTimeout(function() {
                setHeight(currentBar, currentBarNewHeight)
            }, 20*i);
        }
        else if(barInFinalPosition){
            setTimeout(function() {
                setColor(currentBar, "royalblue")
            },20*i);
        }
        else{
            setTimeout(function() {
                setColor(currentBar, "#198754")
            },20*i);
        }
    }
}

function setHeight(barId, newHeight){
    let barOne =  $(barId)
    console.log('1: ' + barId)
    console.log('2: ' + newHeight)
    // barOne.css("background","blue")
    barOne.css("height", newHeight) 
}
function setColor(barId, color){
    let barOne =  $(barId)
    barOne.css("background", color)
}
$('#generateBars').click(function() {
    console.log('generateBars click: called')
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
