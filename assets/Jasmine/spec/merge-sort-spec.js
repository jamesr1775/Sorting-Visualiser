
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
    it("TC_002_Small_Sorted_Array", function() {
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
    it("TC_005_Single_Zero", function() {
        let unsortedArray = [0]
        let sortedArray = [0]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_006_Single_Value_Not_Equal", function() {
        let unsortedArray = [4]
        let sortedArray = [5]
        expect(mergeSort(unsortedArray)).not.toEqual(sortedArray);
    });
    it("TC_007_Float_Plus_Ints", function() {
        let unsortedArray = [0.5, 0.1, 6, 0.9, 2.5, 6.4, 10]
        let sortedArray = [0.1, 0.5, 0.9, 2.5, 6, 6.4, 10]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_008_NegPos_Numbers", function() {
        let unsortedArray = [-95, 12, -61, 73, 47, 0, -62, -69, 86, -4, -29, -84, 34, -85, -97, -32]
        let sortedArray = [-97, -95, -85, -84, -69, -62, -61, -32, -29, -4, 0, 12, 34, 47, 73, 86]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });  
    it("TC_009_NegPos_Reversed", function() {
        let unsortedArray = [86, 73, 47, 34, 12, 0, -4, -29, -32, -61, -62, -69, -84, -85, -95, -97]
        let sortedArray = [-97, -95, -85, -84, -69, -62, -61, -32, -29, -4, 0, 12, 34, 47, 73, 86]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_010_Even_Amount_Pos_Numbers", function() {
        let unsortedArray = [422, 625, 206, 163, 154, 954, 775, 362, 644, 735, 691, 713, 327, 663, 818, 664, 117, 50, 455, 859, 370, 134, 854, 867, 762, 524, 721, 841, 366, 902, 264, 467, 598, 214, 903, 297, 864, 320, 69, 905, 660, 199, 86, 872, 453, 496, 267, 948, 889, 422, 722, 400, 373, 63, 342, 113, 27, 651, 473, 361, 287, 768, 222, 668, 880, 176, 618, 485, 769, 980, 433, 141, 913, 31, 331, 930, 887, 40, 520, 805, 54, 359, 397, 106, 576, 713, 151, 489, 101, 788, 540, 216, 552, 724, 143, 312, 662, 827, 67, 530]
        let sortedArray = [27, 31, 40, 50, 54, 63, 67, 69, 86, 101, 106, 113, 117, 134, 141, 143, 151, 154, 163, 176, 199, 206, 214, 216, 222, 264, 267, 287, 297, 312, 320, 327, 331, 342, 359, 361, 362, 366, 370, 373, 397, 400, 422, 422, 433, 453, 455, 467, 473, 485, 489, 496, 520, 524, 530, 540, 552, 576, 598, 618, 625, 644, 651, 660, 662, 663, 664, 668, 691, 713, 713, 721, 722, 724, 735, 762, 768, 769, 775, 788, 805, 818, 827, 841, 854, 859, 864, 867, 872, 880, 887, 889, 902, 903, 905, 913, 930, 948, 954, 980]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });  
    it("TC_011_Even_Amount_Neg_Numbers", function() {
        let unsortedArray = [-177, -459, -245, -632, -164, -24, -943, -227, -472, -250, -929, -957, -26, -601, -613, -96, -551, -854, -578, -914, -543, -112, -149, -718, -493, -648, -794, -819, -839, -260, -162, -883, -305, -847, -220, -449, -767, -257, -608, -441, -109, -598, -924, -210, -492, -75, -402, -183, -465, -534, -655, -204, -542, -19, -813, -55, -330, -4, -860, -449, -780, -638, -806, -988, -295, -75, -847, -987, -386, -231, -798, -571, -967, -279, -628, -509, -422, -277, -22, -39, -561, -559, -276, -753, -472, -646, -866, -980, -811, -952, -517, -397, -684, -319, -603, -696, -141, -774, -653, -701]
        let sortedArray = [-988, -987, -980, -967, -957, -952, -943, -929, -924, -914, -883, -866, -860, -854, -847, -847, -839, -819, -813, -811, -806, -798, -794, -780, -774, -767, -753, -718, -701, -696, -684, -655, -653, -648, -646, -638, -632, -628, -613, -608, -603, -601, -598, -578, -571, -561, -559, -551, -543, -542, -534, -517, -509, -493, -492, -472, -472, -465, -459, -449, -449, -441, -422, -402, -397, -386, -330, -319, -305, -295, -279, -277, -276, -260, -257, -250, -245, -231, -227, -220, -210, -204, -183, -177, -164, -162, -149, -141, -112, -109, -96, -75, -75, -55, -39, -26, -24, -22, -19, -4]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });
        it("TC_012_Odd_Amount_Pos_Numbers", function() {
        let unsortedArray = [422, 625, 206, 163, 154, 954, 775, 362, 644, 735, 691, 713, 327, 663, 818, 664, 117, 50, 455, 859, 370, 134, 854, 867, 762, 524, 721, 841, 366, 902, 264, 467, 598, 214, 903, 297, 864, 320, 69, 905, 660, 199, 86, 872, 453, 496, 267, 948, 889, 422, 722, 400, 373, 63, 342, 113, 27, 651, 473, 361, 287, 768, 222, 668, 880, 176, 618, 485, 769, 433, 141, 913, 31, 331, 930, 887, 40, 520, 805, 54, 359, 397, 106, 576, 713, 151, 489, 101, 788, 540, 216, 552, 724, 143, 312, 662, 827, 67, 530]
        let sortedArray = [27, 31, 40, 50, 54, 63, 67, 69, 86, 101, 106, 113, 117, 134, 141, 143, 151, 154, 163, 176, 199, 206, 214, 216, 222, 264, 267, 287, 297, 312, 320, 327, 331, 342, 359, 361, 362, 366, 370, 373, 397, 400, 422, 422, 433, 453, 455, 467, 473, 485, 489, 496, 520, 524, 530, 540, 552, 576, 598, 618, 625, 644, 651, 660, 662, 663, 664, 668, 691, 713, 713, 721, 722, 724, 735, 762, 768, 769, 775, 788, 805, 818, 827, 841, 854, 859, 864, 867, 872, 880, 887, 889, 902, 903, 905, 913, 930, 948, 954]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });  
    it("TC_013_Odd_Amount_Neg_Numbers", function() {
        let unsortedArray = [-177, -459, -245, -632, -164, -24, -943, -227, -472, -250, -929, -957, -26, -601, -613, -96, -551, -854, -578, -914, -543, -112, -149, -718, -493, -648, -794, -819, -839, -260, -162, -883, -305, -847, -220, -449, -767, -257, -608, -441, -109, -598, -924, -210, -492, -75, -402, -183, -465, -534, -655, -204, -542, -19, -813, -55, -330, -860, -449, -780, -638, -806, -988, -295, -75, -847, -987, -386, -231, -798, -571, -967, -279, -628, -509, -422, -277, -22, -39, -561, -559, -276, -753, -472, -646, -866, -980, -811, -952, -517, -397, -684, -319, -603, -696, -141, -774, -653, -701]
        let sortedArray = [-988, -987, -980, -967, -957, -952, -943, -929, -924, -914, -883, -866, -860, -854, -847, -847, -839, -819, -813, -811, -806, -798, -794, -780, -774, -767, -753, -718, -701, -696, -684, -655, -653, -648, -646, -638, -632, -628, -613, -608, -603, -601, -598, -578, -571, -561, -559, -551, -543, -542, -534, -517, -509, -493, -492, -472, -472, -465, -459, -449, -449, -441, -422, -402, -397, -386, -330, -319, -305, -295, -279, -277, -276, -260, -257, -250, -245, -231, -227, -220, -210, -204, -183, -177, -164, -162, -149, -141, -112, -109, -96, -75, -75, -55, -39, -26, -24, -22, -19]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });  
    it("TC_013_Repeated_Value", function() {
        let unsortedArray = [555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555]
        let sortedArray = [555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555, 555]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_014_Ascend_Descend", function() {
        let unsortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
        let sortedArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });
    it("TC_015_Large_Sorted_Array", function() {
        let unsortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
        let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
        expect(mergeSort(unsortedArray)).toEqual(sortedArray);
    });
});
