    
// source code
function quickSort(array){
  quickSortHelper(array, 0, array.length - 1);
  return array;
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
}

// specs code
describe("TS_002_QuickSort", function() {
    it("TC_001_Unsorted_Array", function() {
        let unsortedArray = [5, 4, 7, 3, 6, 1, 2]
        let sortedArray = [1, 2, 3, 4, 5, 6, 7]
        expect(quickSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_002_Sorted_Array", function() {
        let unsortedArray = [1, 2, 3, 4, 5, 6, 7]
        let sortedArray = [1, 2, 3, 4, 5, 6, 7]
        expect(quickSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_003_Empty_Array", function() {
        let unsortedArray = []
        let sortedArray = []
        expect(quickSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_004_Single_Value", function() {
        let unsortedArray = [5]
        let sortedArray = [5]
        expect(quickSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_005_Single_Value_Not_Equal", function() {
        let unsortedArray = [4]
        let sortedArray = [5]
        expect(quickSort(unsortedArray)).not.toEqual(sortedArray);
    });
    it("TC_006_Float_Plus_Ints", function() {
        let unsortedArray = [0.5, 0.1, 6, 0.9, 2.5, 6.4, 10]
        let sortedArray = [0.1, 0.5, 0.9, 2.5, 6, 6.4, 10]
        expect(quickSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_007_NegPos_Numbers", function() {
        let unsortedArray = [-95, 12, -61, 73, 47, 0, -62, -69, 86, -4, -29, -84, 34, -85, -97, -32]
        let sortedArray = [-97, -95, -85, -84, -69, -62, -61, -32, -29, -4, 0, 12, 34, 47, 73, 86]
        expect(quickSort(unsortedArray)).toEqual(sortedArray);
    });  
    it("TC_008_NegPos_Reversed", function() {
        let unsortedArray = [86, 73, 47, 34, 12, 0, -4, -29, -32, -61, -62, -69, -84, -85, -95, -97]
        let sortedArray = [-97, -95, -85, -84, -69, -62, -61, -32, -29, -4, 0, 12, 34, 47, 73, 86]
        expect(quickSort(unsortedArray)).toEqual(sortedArray);
    }); 
});
