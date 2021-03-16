function generateBarChart(){
    console.log("screen:")
    console.log(screen.width)
    console.log(screen.height)
    console.log('generateBarChart: called')
    let barContainer = document.getElementById('bars-container')
    let spacerContainer = '<div class="col-1"></div>'
    let allBars = ""
    /*Need to remove these magic numbers for screen size adjusting but working for now*/
    for(let i=0; i<(5/10)*(screen.width/10); i++){
        let singleBar = '<div id="bar-' + i + '" class="single-bar"></div>'
        console.log(singleBar)
        allBars += singleBar
    }
    let barsContainerInnerHtml = `${spacerContainer}
                                <div class="col-10">${allBars}</div>
                                ${spacerContainer}`
    barContainer.innerHTML = barsContainerInnerHtml
    let bars = document.getElementsByClassName("single-bar");
    console.log('setting new heights: called')
    for(let bar of bars){
        /*Need to remove these magic numbers for screen size adjusting but working for now*/
        let newHeight = Math.ceil(Math.random() * screen.height*0.5)
        bar.setAttribute("style", "height: " + newHeight + "px")
    }
}

function bubbleSortAlgorithm(){
    let numBars = document.getElementsByClassName("single-bar").length;
    console.log('setting new heights: called')
    barsStructure = []
    swapAnimations = []
    for(let i=0; i<numBars; i++){
        let bar =  $('#bar-' + i)
        barsStructure.push(['#bar-' + i, bar.height()])
    }
    for(let i=0; i<barsStructure.length - 1; i++){
        let innerLoopEnd = barsStructure.length - i - 1
        for(let j=0; j<innerLoopEnd; j++){
            let barOne =  barsStructure[j][0]
            let barTwo =  barsStructure[j+1][0]
            let barOneHeight =  barsStructure[j][1]
            let barTwoHeight =  barsStructure[j+1][1]
            console.log("barOne.height :" +barOneHeight)
            swapAnimations.push(['#bar-' + j, barOneHeight, false, true, false])
            swapAnimations.push(['#bar-' + (j + 1), barTwoHeight, false, true, false])
            if (barOneHeight>barTwoHeight){
                swapAnimations.push(['#bar-' + j, barTwoHeight, true, false, false])
                swapAnimations.push(['#bar-' + (j + 1), barOneHeight, true, false, false])
                let tempHeight = barOneHeight
                barsStructure[j][1] = barTwoHeight
                barsStructure[j+1][1] = tempHeight
            }
            else{
                swapAnimations.push(['#bar-' + j, barOneHeight, false, false])
                swapAnimations.push(['#bar-' + (j + 1), barTwoHeight, false, false])
            }
            swapAnimations.push(['#bar-' + j, barOneHeight, false, false, false])
            swapAnimations.push(['#bar-' + (j + 1), barTwoHeight, false, false])
            if(j === innerLoopEnd - 1){
                swapAnimations.push(['#bar-' + (j+1), barTwoHeight, false, false, true])
            }
        }
    }
    swapAnimations.push(['#bar-' + 0, null, false, false, true])
    swapAnimations.push(['#bar-' + 1, null, false, false, true])
    console.log('swapAnimations: ' + swapAnimations)
    return swapAnimations
}


function mergeSortAlgorithmHelper(array, leftIdx, rightIdx, auxilaryArray, animations){
    if (leftIdx === rightIdx){
        return
    }
    let midIdx = Math.floor((leftIdx + rightIdx)/2)
    mergeSortAlgorithmHelper(auxilaryArray, leftIdx, midIdx, array, animations)
    mergeSortAlgorithmHelper(auxilaryArray, midIdx + 1, rightIdx, array, animations)
    doMerge(array, leftIdx, midIdx, rightIdx, auxilaryArray, animations)
}
function doMerge(array, leftIdx, midIdx, rightIdx, auxilaryArray, animations){
    let i = leftIdx
    let k = leftIdx
    let j = midIdx + 1
    while(i <= midIdx && j <= rightIdx){
        if (auxilaryArray[i][1] <= auxilaryArray[j][1]){
            animations.push(['#bar-' + k, auxilaryArray[i][1], true, false, false])
            array[k][1] = auxilaryArray[i][1]
            i++
        }
        else{
            animations.push(['#bar-' + k, auxilaryArray[j][1], true, false, false])
            array[k][1] = auxilaryArray[j][1]
            j++
        }
        k++
    }
    while(i <= midIdx){
        animations.push(['#bar-' + k, auxilaryArray[i][1], true, false, false])
        array[k][1] = auxilaryArray[i][1]
        i++
        k++
    }
    while(j <= rightIdx){
        animations.push(['#bar-' + k, auxilaryArray[j][1], true, false, false])
        array[k][1] = auxilaryArray[j][1]
        j++
        k++
    }
}
function mergeSortAlgorithm(){
    // if (array.length <=1){
    //     return array
    // }
    let leftIdx = 0
    let rightIdx = document.getElementsByClassName("single-bar").length - 1;
    console.log('setting new heights: called')
    let barsStructure = []
    let swapAnimations = []
    let auxilaryArray = []
    for(let i=0; i<=rightIdx; i++){
        let bar =  $('#bar-' + i)
        barsStructure.push(['#bar-' + i, bar.height()])
        auxilaryArray.push(['#bar-' + i, bar.height()])
    }
    // bug this arrray needed to be a constant
    // bug , took copy of array of objects but its not a deep copy
    mergeSortAlgorithmHelper(barsStructure, leftIdx, rightIdx, auxilaryArray, swapAnimations)
    console.log(swapAnimations)
    return swapAnimations
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
    console.log('bubbleSortAlgorithm click: called')
    let swapAnimations = mergeSortAlgorithm();
    playAnimations(swapAnimations)
})
