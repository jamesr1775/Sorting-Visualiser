import {swap} from './bubble-sort.js'

export function quickSortAlgorithm() {
    let leftIdx = 0
    let rightIdx = document.getElementsByClassName("single-bar").length - 1;
    let barsArray = []
    let swapAnimations = []
    for(let i=0; i<=rightIdx; i++){
        let bar =  $('#bar-' + i)
        barsArray.push(['#bar-' + i, bar.height()])
    }
    quickSortHelper(barsArray, leftIdx, rightIdx, swapAnimations)
    return swapAnimations
}
function quickSortHelper(array, left, right, swapAnimations){
    var index;
    console.log("array "  + array)
    console.log("array length" + array.length)
    if (array.length > 1) {
        index = partition(array, left, right, swapAnimations); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSortHelper(array, left, index - 1, swapAnimations);
        }else{
            swapAnimations.push(['#bar-' + left, 0, false, false, true])
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSortHelper(array, index, right, swapAnimations);
        }
        else{
            swapAnimations.push(['#bar-' + right, 0, false, false, true])
        }
    }	
}
function partition(array, left, right, swapAnimations) {
    let pivot = array[Math.floor((right + left) / 2)][1] //middle element
    let pivotIdx = Math.floor((right + left) / 2)
    let i = left //left pointer
    let j = right //right pointer
    while (i <= j) {
        while (array[i][1] < pivot) {
            swapAnimations.push(['#bar-' + pivotIdx, 0, false, true, false])
            swapAnimations.push(['#bar-' + i, 0, false, true, false])
            swapAnimations.push(['#bar-' + pivotIdx, 0, false, false, false])
            swapAnimations.push(['#bar-' + i, 0, false, false, false])
            i++;
        }
        while (array[j][1] > pivot) {
            swapAnimations.push(['#bar-' + pivotIdx, 0, false, true, false])
            swapAnimations.push(['#bar-' + j, 0, false, true, false])
            swapAnimations.push(['#bar-' + pivotIdx, 0, false, false, false])
            swapAnimations.push(['#bar-' + j, 0, false, false, false])
            j--;

        }

        if (i <= j) {
            swapAnimations.push(['#bar-' + i, 0, false, true, false])
            swapAnimations.push(['#bar-' + j, 0, false, true, false])
            swapAnimations.push(['#bar-' + i, array[j][1], true, false, false])
            swapAnimations.push(['#bar-' + j, array[i][1], true, false, false])
            swapAnimations.push(['#bar-' + i, 0, false, false, false])
            swapAnimations.push(['#bar-' + j, 0, false, false, false])
            swap(array, i, j); //swapping two elements
            
            i++;
            j--;
        }
    }
    if(right - left === 1){
        swapAnimations.push(['#bar-' + left, 0, false, false, true])
        swapAnimations.push(['#bar-' + right, 0, false, false, true])
    }
    return i;
}

export function getQuickSortCodeString(){
    let quickSortCodeString = `function quickSort(array) {
	quickSortHelper(array, 0, array.length - 1)
	return array
}
function quickSortHelper(array, left, right){
  var index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quickSortHelper(array, left, index - 1);
    }
    if (index < right) {
      quickSortHelper(array, index, right);
    }
  }
  return array;
}

function partition(array, left, right) {
  let pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (array[i] < pivot) i++;
    while (array[j] > pivot) j--;
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swap(array, left, right){
  var temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}`
    return quickSortCodeString
}

export function getQuickSortInfoString(){
    let quickSortInfoString = `<h2 id="algo-header" class="text-center">Quick Sort Algorithm</h2>
                                <p>Quick sort is one of the most popular sorting algorithms used today. The algorithm usually selects a random element in the array is usually chosen as a pivot point in the array. The elements to the left and right of this pivot element
                                are then shifted depending on if they are greater or smaller then the pivot element. 
                                <br><br>Quick sort is also a divide and conquer algorithm and thus after elements in the array have been shifted in relation to the pivot element,
                                the process can repeat on the two subarrays to the left and right of the pivot</p>
                                <div  class="horizontal-divider"><hr/></div>
                                <h3 class="text-center">Algorithm Steps</h3>
                                <ol>
                                    <li>Choose an element in the array that will become the first pivot element of the algorithm. i.e. the middle element in the array</li>
                                    <li>Using a left and right pointer, partition the array so that all elements that are less than the pivot element come before it in the array, and all elements greater than the pivot value come after it in the array.</li>
                                    <li>When the right and left pointers are equal, return the left pointer value as this will allow sub arrays to be created.</li>
                                    <li>Recursively run the algorithm on the subarrays created using the left pointer value in step 3 as a starting and ending index for two calls to the quick sort helper calls.</li>
                                    <li>The algorithm will terminate when the array is sorted.</li>
                                </ol>
                                <div  class="horizontal-divider"><hr/></div>
                                <h3 class="text-center">Complexity</h3>
                                <p>Divide and conquer algorithms can be tricky to analyze their time and space complexities. Hint: Exponentially working with smaller and smaller array sizes, one math operater is particularly useful. With quick sort, there is also the problem of the random choice of pivot value. 
                                <br><br>Picking a skewed pivot value can cause the algorithms performance to get worse drastically. Thus what will average and the worst case time complexity be? Take the quiz below to find out!</p>
    `
    return quickSortInfoString    
}