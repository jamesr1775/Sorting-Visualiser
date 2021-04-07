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
            animations.push(['#bar-' + i, 0, false, true, false])
            animations.push(['#bar-' + k, auxilaryArray[i][1], true, false, false])
            animations.push(['#bar-' + i, 0, false, false, false])
            if(finalDoMerge){
                animations.push(['#bar-' + i, 0, false, false, true])
            }
            array[k][1] = auxilaryArray[i][1] 
            i++
        }
        else{
            animations.push(['#bar-' + j, 0, false, true, false])
            animations.push(['#bar-' + k, auxilaryArray[j][1], true, false, false])
            animations.push(['#bar-' + j, 0, false, false, false])
            if(finalDoMerge){
                animations.push(['#bar-' + j, 0, false, false, true])
            }
            array[k][1] = auxilaryArray[j][1]
            j++
        }
        k++
    }
    while(i <= midIdx){
        animations.push(['#bar-' + i, 0, false, true, false])
        animations.push(['#bar-' + k, auxilaryArray[i][1], true, false, false])
        animations.push(['#bar-' + i, 0, false, false, false])
        if(finalDoMerge){
            animations.push(['#bar-' + i, 0, false, false, true])
        }
        array[k][1] = auxilaryArray[i][1]
        i++
        k++
    }
    while(j <= rightIdx){
        animations.push(['#bar-' + j, 0, false, true, false])
        animations.push(['#bar-' + k, auxilaryArray[j][1], true, false, false])
        animations.push(['#bar-' + j, 0, false, false, false])
        if(finalDoMerge){
            animations.push(['#bar-' + j, 0, false, false, true])
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


export function getMergeSortCodeString(){
    let mergeSortCodeString = `function mergeSortHelper(array, leftIdx, rightIdx, auxilaryArray){
  if (leftIdx === rightIdx) return;
  let midIdx = Math.floor((leftIdx + rightIdx)/2)
  mergeSortHelper(auxilaryArray, leftIdx, midIdx, array)
  mergeSortHelper(auxilaryArray, midIdx + 1, rightIdx, array)
  doMerge(array, leftIdx, midIdx, rightIdx, auxilaryArray)
}

function doMerge(array, leftIdx, midIdx, rightIdx, auxilaryArray){
  let i = leftIdx
  let k = leftIdx
  let j = midIdx + 1
  while(i <= midIdx && j <= rightIdx){
    if (auxilaryArray[i] <= auxilaryArray[j]){
      array[k] = auxilaryArray[i]
      i++
    }else{
       array[k] = auxilaryArray[j]
      j++
    }
    k++
  }
  while(i <= midIdx){
    array[k] = auxilaryArray[i]
    i++
    k++
  }
  while(j <= rightIdx){
    array[k] = auxilaryArray[j]
    j++
    k++
  }
}

function mergeSort(array){
  if(array.length <= 1) return array;
  let leftIdx = 0;
  let rightIdx = array.length - 1;
  let auxilaryArray = array.slice();
  mergeSortHelper(array, leftIdx, rightIdx, auxilaryArray);
  return array;
}`
    return mergeSortCodeString
}

export function getMergeSortInfoString(){
    let mergeSortInfoString = `<h2 id="algo-header" class="text-center mt-2">Merge Sort Algorithm</h2>
                                <p>Merge sort is a divide and conquer algorithm that splits up the array of length <em>n</em> in to two sub arrays, and then these two sub arrays in to two additional sub arrays until there are <em>n</em> arrays with one element. 
                                It will sort these sub arrays and then starting merging two sorted sub arrays back into one array until there is <em>n/2, n/4 ...1</em> arrays. When the final 2 sub arrays are merged to form the sorted array the algorithm ends.</p>
                                <div  class="horizontal-divider"><hr/></div>
                                <h3 class="text-center mt-5">Algorithm Steps</h3>
                                <ol>
                                    <li>Divide the array in to two sub arrays of length <em>n/2</em></li>
                                    <li>Using recursion, divide the two sub arrays repeatedly until there are n sub arrays of length one</li>
                                    <li>Now merge the n sub arrays of length one in to <em>n/2</em> sub arrays of length two, sorting the elements as you merge them</li>
                                    <li>Repeat step 3 until you have an array of length <em>n</em></li>
                                    <li>This algorithm will terminate when the first two sub arrays of length <em>n/2</em> return, both sorted and the final merge occurs when we are left with a sorted array of length <em>n</em></li>
                                </ol>
                                <div  class="horizontal-divider"><hr/></div>
                                <h3 class="text-center mt-5">Complexity</h3>
                                <p>Divide and conquer algorithms can be tricky to analyze their time and space complexities. Hint:Exponentially working with smaller and smaller array sizes, one math operater is particularly useful. Thus what will the time complexity be? Take the quiz below to find out!</p>
    `
    return mergeSortInfoString    
}