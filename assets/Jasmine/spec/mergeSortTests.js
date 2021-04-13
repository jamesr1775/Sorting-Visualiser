
// source code
function mergeSortHelper(array, leftIdx, rightIdx, auxilaryArray){
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
}

// specs code
describe("TS_001_MergeSort", function() {
    it("TC_001_Unsorted_Array", function() {
        let unsortedArray = [5, 4, 7, 3, 6, 1, 2]
        let sortedArray = [1, 2, 3, 4, 5, 6, 7]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_002_Sorted_Array", function() {
        let unsortedArray = [1, 2, 3, 4, 5, 6, 7]
        let sortedArray = [1, 2, 3, 4, 5, 6, 7]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_003_Empty_Array", function() {
        let unsortedArray = []
        let sortedArray = []
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_004_Single_Value", function() {
        let unsortedArray = [5]
        let sortedArray = [5]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_005_Single_Value_Not_Equal", function() {
        let unsortedArray = [4]
        let sortedArray = [5]
        expect(mergeSort(unsortedArray)).not.toEqual(sortedArray);
    });
    it("TC_006_Float_Plus_Ints", function() {
        let unsortedArray = [0.5, 0.1, 6, 0.9, 2.5, 6.4, 10]
        let sortedArray = [0.1, 0.5, 0.9, 2.5, 6, 6.4, 10]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_007_NegPos_Numbers", function() {
        let unsortedArray = [-95, 12, -61, 73, 47, 0, -62, -69, 86, -4, -29, -84, 34, -85, -97, -32]
        let sortedArray = [-97, -95, -85, -84, -69, -62, -61, -32, -29, -4, 0, 12, 34, 47, 73, 86]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });  
    it("TC_008_NegPos_Reversed", function() {
        let unsortedArray = [86, 73, 47, 34, 12, 0, -4, -29, -32, -61, -62, -69, -84, -85, -95, -97]
        let sortedArray = [-97, -95, -85, -84, -69, -62, -61, -32, -29, -4, 0, 12, 34, 47, 73, 86]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    }); 
});
