
/**
 * mergeSortAlgorithm() kicks off the algorithm and mergeSortAlgorithmHelper() 
 * implements the divide and conquer approach to sort the bars array.
 * Algorithm steps are tracked and the animations array is populated.
 **/
function mergeSortAlgorithmHelper(array, leftIdx, rightIdx, auxilaryArray, animations, finalDoMerge){
    // Base case for recursion to end.
    if (leftIdx === rightIdx){
        return;
    }

    let midIdx = Math.floor((leftIdx + rightIdx)/2)
    // Arrays divided in to two sub arrays. Auxilary array and array will be swapped on each recursive call.
    mergeSortAlgorithmHelper(auxilaryArray, leftIdx, midIdx, array, animations, false);
    mergeSortAlgorithmHelper(auxilaryArray, midIdx + 1, rightIdx, array, animations, false);
    // Final do merge call to merge the two sub arrays sorted above into one array that is sorted.
    doMerge(array, leftIdx, midIdx, rightIdx, auxilaryArray, animations, finalDoMerge);
}

/**
 * doMerge() does all the heavy lifting of swapping values in the arrays.
 **/
function doMerge(array, leftIdx, midIdx, rightIdx, auxilaryArray, animations, finalDoMerge){
    let i = leftIdx;
    let k = leftIdx;
    let j = midIdx + 1;
    
    while(i <= midIdx && j <= rightIdx){
        // compare left idx value to right idx value of the aux array
        // and make swaps in array until loop exit condition reached.
        if (auxilaryArray[i][1] <= auxilaryArray[j][1]){
            // push bar color changes/ swaps to animation array
            // swapAnimations = [[barId, barHeightInteger, swapBars, swapColors, barInFinalPosition],...]
            animations.push(['#bar-' + i, 0, false, true, false]);
            animations.push(['#bar-' + k, auxilaryArray[i][1], true, false, false]);
            animations.push(['#bar-' + i, 0, false, false, false]);
            if(finalDoMerge){
                animations.push(['#bar-' + i, 0, false, false, true]);
            }
            array[k][1] = auxilaryArray[i][1];
            i++;
        }
        else{
            // push bar color changes/ swaps to animation array
            // swapAnimations = [[barId, barHeightInteger, swapBars, swapColors, barInFinalPosition],...]
            animations.push(['#bar-' + j, 0, false, true, false]);
            animations.push(['#bar-' + k, auxilaryArray[j][1], true, false, false]);
            animations.push(['#bar-' + j, 0, false, false, false]);
            if(finalDoMerge){
                animations.push(['#bar-' + j, 0, false, false, true]);
            }
            array[k][1] = auxilaryArray[j][1];
            j++;
        }
        k++;
    }

    // If while loop above ended due to j > rightIdx then we can update the remaining
    // values in the left half to the array
    while(i <= midIdx){
        animations.push(['#bar-' + i, 0, false, true, false]);
        animations.push(['#bar-' + k, auxilaryArray[i][1], true, false, false]);
        animations.push(['#bar-' + i, 0, false, false, false]);
        if(finalDoMerge){
            animations.push(['#bar-' + i, 0, false, false, true]);
        }
        array[k][1] = auxilaryArray[i][1];
        i++;
        k++;
    }
    // If while loop above ended due to i > midIdx then we can update the remaining
    // values in the right half to the array
    while(j <= rightIdx){
        animations.push(['#bar-' + j, 0, false, true, false]);
        animations.push(['#bar-' + k, auxilaryArray[j][1], true, false, false]);
        animations.push(['#bar-' + j, 0, false, false, false]);
        if(finalDoMerge){
            animations.push(['#bar-' + j, 0, false, false, true]);
        }
        array[k][1] = auxilaryArray[j][1];
        j++;
        k++;
    }
}

/**
 * mergeSortAlgorithm() sets up for the call to the recursive helper. It creates the array and auxilary array
 * and passed it to the helper function with the initial indexes.
 **/
function mergeSortAlgorithm(){
    let leftIdx = 0;
    let rightIdx = document.getElementsByClassName("single-bar").length - 1;
    let barsArray = [];
    let swapAnimations = [];
    let auxilaryArray = [];
    for(let i=0; i<=rightIdx; i++){
        let bar =  $('#bar-' + i);
        barsArray.push(['#bar-' + i, bar.height()]);
        auxilaryArray.push(['#bar-' + i, bar.height()]);
    }
    mergeSortAlgorithmHelper(barsArray, leftIdx, rightIdx, auxilaryArray, swapAnimations, true);
    return swapAnimations;
}

/**
 * getMergeSortCodeString() returns the code that prism.js will highlight and then present to the user.
 * Formating(aligning with tabs/spaces) this string will disrupt how its showed currently.
 **/
 function getMergeSortCodeString(){
    let mergeSortCodeString = `function mergeSortHelper(array, leftIdx, rightIdx, auxilaryArray){
  if (leftIdx === rightIdx) return;
  let midIdx = Math.floor((leftIdx + rightIdx)/2);
  mergeSortHelper(auxilaryArray, leftIdx, midIdx, array);
  mergeSortHelper(auxilaryArray, midIdx + 1, rightIdx, array);
  doMerge(array, leftIdx, midIdx, rightIdx, auxilaryArray);
}

function doMerge(array, leftIdx, midIdx, rightIdx, auxilaryArray){
  let i = leftIdx;
  let k = leftIdx;
  let j = midIdx + 1;
  while(i <= midIdx && j <= rightIdx){
    if (auxilaryArray[i] <= auxilaryArray[j]){
      array[k] = auxilaryArray[i];
      i++;
    }else{
       array[k] = auxilaryArray[j];
       j++;
    }
    k++;
  }
  while(i <= midIdx){
    array[k] = auxilaryArray[i];
    i++;
    k++;
  }
  while(j <= rightIdx){
    array[k] = auxilaryArray[j];
    j++;
    k++;
  }
}

function mergeSort(array){
  if(array.length <= 1) return array;
  let leftIdx = 0;
  let rightIdx = array.length - 1;
  let auxilaryArray = array.slice();
  mergeSortHelper(array, leftIdx, rightIdx, auxilaryArray);
  return array;
}`;
    return mergeSortCodeString;
}

/**
 * getMergeSortInfoString() returns algorithm information and explanation text to present it to the user.
 **/
function getMergeSortInfoString(){
    let mergeSortInfoString = `<h2 id="algo-header" class="text-center mt-2">Merge Sort Algorithm</h2>
                                <p>Merge sort is a divide and conquer algorithm that splits up the array of length <em>n</em> in to two sub arrays, and then these two sub arrays in to two additional sub arrays until there are <em>n</em> arrays with one element. 
                                It will sort these sub arrays and then starting merging two sorted sub arrays back into one array. When the final 2 sub arrays are merged to form the sorted array the algorithm ends.</p>
                                <div class="horizontal-divider"><hr></div>
                                <h3 class="text-center mt-5">Algorithm Steps</h3>
                                <ol>
                                    <li>Divide the array in to two sub arrays of length <em>n/2</em></li>
                                    <li>Using recursion, divide the two sub arrays repeatedly until there are n sub arrays of length one</li>
                                    <li>Now merge the n sub arrays of length one in to <em>n/2</em> sub arrays of length two, sorting the elements as you merge them</li>
                                    <li>Repeat step 3 until you have an array of length <em>n</em></li>
                                    <li>This algorithm will terminate when the first two sub arrays of length <em>n/2</em> return, both sorted and the final merge occurs when we are left with a sorted array of length <em>n</em></li>
                                </ol>
                                <div class="horizontal-divider"><hr></div>
                                <h3 class="text-center mt-5">Complexity</h3>
                                <p>Divide and conquer algorithms can be tricky to analyze time and space complexities. Hint: Exponentially working with smaller and smaller array sizes, one math operater is particularly useful. Thus what will the time complexity be? Take the quiz below to find out!</p>
    `;
    return mergeSortInfoString;   
}