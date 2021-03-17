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
export function mergeSortAlgorithm(){
    // if (array.length <=1){
    //     return array
    // }
    let leftIdx = 0
    let rightIdx = document.getElementsByClassName("single-bar").length - 1;
    console.log('setting new heights: called')
    let barsArray = []
    let swapAnimations = []
    let auxilaryArray = []
    for(let i=0; i<=rightIdx; i++){
        let bar =  $('#bar-' + i)
        barsArray.push(['#bar-' + i, bar.height()])
        auxilaryArray.push(['#bar-' + i, bar.height()])
    }
    // bug this arrray needed to be a constant
    // bug , took copy of array of objects but its not a deep copy
    mergeSortAlgorithmHelper(barsArray, leftIdx, rightIdx, auxilaryArray, swapAnimations)
    console.log(swapAnimations)
    return swapAnimations
}