function generateBarChart(){
    console.log("screen:")
    console.log(screen.width)
    console.log(screen.height)
    console.log('generateBarChart: called')
    let barContainer = document.getElementById('bars-container')
    let spacerContainer = '<div class="col-1"></div>'
    let allBars = ""
    /*Need to remove these magic numbers for screen size adjusting but working for now*/
    for(let i=0; i<(7/10)*(screen.width/30); i++){
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

function sortBars(){
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

function playAnimations(animations){
    let flipColor = false
    for(let i=0; i<animations.length - 1; i+=1){
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
            },5*i);
        }
        else if(swapBar){
            setTimeout(function() {
                setHeight(currentBar, currentBarNewHeight)
            }, 5*i);
        }
        else if(barInFinalPosition){
            setTimeout(function() {
                setColor(currentBar, "royalblue")
            },5*i);
        }
        else{
            setTimeout(function() {
                setColor(currentBar, "#198754")
            },5*i);
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
    console.log('sortBars click: called')
    let swapAnimations = sortBars();
    playAnimations(swapAnimations)
})
