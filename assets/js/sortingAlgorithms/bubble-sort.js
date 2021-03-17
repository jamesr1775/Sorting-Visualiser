export function bubbleSortAlgorithm(){
    let numBars = document.getElementsByClassName("single-bar").length;
    console.log('setting new heights: called')
    let barsArray = []
    let swapAnimations = []
    // create bar array with ids and heights
    for(let i=0; i<numBars; i++){
        let bar =  $('#bar-' + i)
        barsArray.push(['#bar-' + i, bar.height()])
    }
    // bubble sort algorithm
    for(let i=0; i<barsArray.length - 1; i++){
        let innerLoopEnd = barsArray.length - i - 1
        for(let j=0; j<innerLoopEnd; j++){
            let barOne =  barsArray[j][0]
            let barTwo =  barsArray[j+1][0]
            let barOneHeight =  barsArray[j][1]
            let barTwoHeight =  barsArray[j+1][1]
            console.log("barOne.height :" +barOneHeight)

            // push bar color changes to animation array
            // swapAnimations = [[barId, barHeightInteger, swapBars, swapColors, barInFinalPosition],...]
            swapAnimations.push(['#bar-' + j, barOneHeight, false, true, false])
            swapAnimations.push(['#bar-' + (j + 1), barTwoHeight, false, true, false])
            
            // Swap the heights if needed
            if (barOneHeight>barTwoHeight){
                swapAnimations.push(['#bar-' + j, barTwoHeight, true, false, false])
                swapAnimations.push(['#bar-' + (j + 1), barOneHeight, true, false, false])
                let tempHeight = barOneHeight
                barsArray[j][1] = barTwoHeight
                barsArray[j+1][1] = tempHeight
            }
            else{
                swapAnimations.push(['#bar-' + j, barOneHeight, false, false])
                swapAnimations.push(['#bar-' + (j + 1), barTwoHeight, false, false])
            }
            // push undo bar color changes to animation array
            swapAnimations.push(['#bar-' + j, barOneHeight, false, false, false])
            swapAnimations.push(['#bar-' + (j + 1), barTwoHeight, false, false])
            if(j === innerLoopEnd - 1){
                // add barInFinalPosition color change
                swapAnimations.push(['#bar-' + (j+1), barTwoHeight, false, false, true])
            }
        }
    }
    // add barInFinalPosition color change to the first two bars
    swapAnimations.push(['#bar-' + 0, null, false, false, true])
    swapAnimations.push(['#bar-' + 1, null, false, false, true])
    console.log('swapAnimations: ' + swapAnimations)
    return swapAnimations
}