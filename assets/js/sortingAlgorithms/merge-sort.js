function mergeSortAlgorithmHelper(array, leftIdx, rightIdx, auxilaryArray, animations, finalDoMerge){
    if (leftIdx === rightIdx){
        return
    }
    let midIdx = Math.floor((leftIdx + rightIdx)/2)
    mergeSortAlgorithmHelper(auxilaryArray, leftIdx, midIdx, array, animations, false)
    mergeSortAlgorithmHelper(auxilaryArray, midIdx + 1, rightIdx, array, animations, false)
    doMerge(array, leftIdx, midIdx, rightIdx, auxilaryArray, animations, finalDoMerge)
}
function doMerge(array, leftIdx, midIdx, rightIdx, auxilaryArray, animations, finalDoMerge){
    let i = leftIdx
    let k = leftIdx
    let j = midIdx + 1
    while(i <= midIdx && j <= rightIdx){
        if (auxilaryArray[i][1] <= auxilaryArray[j][1]){
            // swapAnimations = [[barId, barHeightInteger, swapBars, swapColors, barInFinalPosition],...]
            animations.push(['#bar-' + i, auxilaryArray[j][1], false, true, false])
            animations.push(['#bar-' + k, auxilaryArray[i][1], true, false, false])
            animations.push(['#bar-' + i, auxilaryArray[i][1], false, false, false])
            if(finalDoMerge){
                animations.push(['#bar-' + i, auxilaryArray[i][1], false, false, true])
            }
            array[k][1] = auxilaryArray[i][1] 
            i++
        }
        else{
            animations.push(['#bar-' + j, auxilaryArray[j][1], false, true, false])
            animations.push(['#bar-' + k, auxilaryArray[j][1], true, false, false])
            animations.push(['#bar-' + j, auxilaryArray[j][1], false, false, false])
            if(finalDoMerge){
                animations.push(['#bar-' + j, auxilaryArray[j][1], false, false, true])
            }
            array[k][1] = auxilaryArray[j][1]
            j++
        }
        k++
    }
    while(i <= midIdx){
        animations.push(['#bar-' + i, auxilaryArray[i][1], false, true, false])
        animations.push(['#bar-' + k, auxilaryArray[i][1], true, false, false])
        animations.push(['#bar-' + i, auxilaryArray[i][1], false, false, false])
        if(finalDoMerge){
            animations.push(['#bar-' + i, auxilaryArray[i][1], false, false, true])
        }
        array[k][1] = auxilaryArray[i][1]
        i++
        k++
    }
    while(j <= rightIdx){
        animations.push(['#bar-' + j, auxilaryArray[i][1], false, true, false])
        animations.push(['#bar-' + k, auxilaryArray[j][1], true, false, false])
        animations.push(['#bar-' + j, auxilaryArray[i][1], false, false, false])
        if(finalDoMerge){
            animations.push(['#bar-' + j, auxilaryArray[j][1], false, false, true])
        }
        array[k][1] = auxilaryArray[j][1]
        j++
        k++
    }
}
export function mergeSortAlgorithm(){
    let leftIdx = 0
    let rightIdx = document.getElementsByClassName("single-bar").length - 1;
    let barsArray = []
    let swapAnimations = []
    let auxilaryArray = []
    for(let i=0; i<=rightIdx; i++){
        let bar =  $('#bar-' + i)
        barsArray.push(['#bar-' + i, bar.height()])
        auxilaryArray.push(['#bar-' + i, bar.height()])
    }
    mergeSortAlgorithmHelper(barsArray, leftIdx, rightIdx, auxilaryArray, swapAnimations, true)
    return swapAnimations
}