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

export function getBubbleSortCodeString(){
    let bubbleSortCodeString = `function bubbleSortAlgorithm(arr){
        // traverse through entire array
        for(let i=0; i<arr.length - 1; i++){
            let tempValue = null;
            // slight optimization to reduce inner loop iterations
            let innerLoopEnd = arr.length - i - 1;
            // swap values so the largest value shifts to right
            for(let j=0; j<innerLoopEnd; j++){
                // Swap the heights if needed;
                if (arr[j]>arr[j+1]){
                    tempValue = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tempValue;
                }
            }
        }
        return arr;
    }`
    return bubbleSortCodeString
}

export function getBubbleSortInfoString(){
    let bubbleSortInfoString = `<h2>Bubble Sort Algorithm</h2>
                                <p>Bubble sort is an old and well known algorithm that sorts the array, usually in ascending order.</p>
                                <h3>Algorithm Steps :</h3>
                                <ol>
                                    <li>It passes through the array of <em>n</em> values, comparing adjacent values to each other.</li>
                                    <li>If this comparison finds values out of order, it will swap the values in place.</li>
                                    <li>This will "Bubble" hence the name, the largest value into its correct position in the array.</li>
                                    <li>Repeat this procedure but now only iterating to the <em>n-i</em> positions.</li>
                                    <li>The algorithm will terminate when all the values are in their correct position.</li>
                                </ol>
                                <h3>Complexity</h3>
                                <p>In the worst case scenario (the list is in reverse order), the inner for loop will run <em>n-1</em> times, 
                                on the second iteration it will run <em>n-2</em> times. Thus what will the time complexity be? Take the quiz below to find out!</p>
    `
    return bubbleSortInfoString    
}