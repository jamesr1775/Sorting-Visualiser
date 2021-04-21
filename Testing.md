# Sorting Visualiser Testing
The deployed version of the Sorting Visualiser can be found at [github.io/Sorting-Visualiser](https://jamesr1775.github.io/Sorting-Visualiser/).

The source code for the project can be viewed at [github](https://github.com/jamesr1775/Sorting-Visualiser).

## Testing
* The HTML passed and showed no errors in the [W3C Markup Validation](https://validator.w3.org/)
* The CSS passed and showed no errors in the [W3C CSS validation ](https://jigsaw.w3.org/css-validator/validator)
* The Java Script was tested and no errors were found using [JSHint](https://jshint.com/)
### Jasmine Tests
The majority of the javascript functions have had unit tests written in order to test some core functionality of the project and the features the functions are trying to implement. All tests were checked against invalid successes by changing the expected value / result to guarantee the test to fail. Due to the complexity and the asynchronous behaviour of the animations alot of test testing for the bar chart was done manually.
#### Test Suites
1. TS_001_MergeSort
    - Merge Sort suite of test cases to test the sorting algorithm with various input arrays
2. TS_002_QuickSort
    - Quick Sort suite of test cases to test the sorting algorithm with various input arrays
3. TS_003_BubbleSort
    - Bubble Sort suite of test cases to test the sorting algorithm with various input arrays
4. TS_004_Generate_Bar_Chart
    - Suite of test cases that test the functions that change the number of bars, bar colors and heights.
5. TS_005_Setup_Algorithms
    - Test suite to check that the algorithm info and code presented to the user is correct and that the hide and show behaviour upon selecting an algorithm is correct.
6. TS_006_Quiz_Generation
    - This test suite validates that the quiz is correct, the next, prev, retake and view score buttons all work. It also tests the quiz feedback colors and simulates clicks and scores.

#### Running Jasmine Tests
1. First, you need to download the repository code. Follow the Deployment steps in the [README.md](https://github.com/jamesr1775/Sorting-Visualiser/blob/master/README.md) file.
2. The [spec-runner.html](https://github.com/jamesr1775/Sorting-Visualiser/tree/master/assets/js/jasmine/spec-runner.html) file runs the test suites defined above.
3. Open up the [spec-runner.html](https://github.com/jamesr1775/Sorting-Visualiser/tree/master/assets/js/jasmine/spec-runner.html) to run the tests.
4. After you have opened the file and the tests have ran, view the results on the same page.

### Testing User Stories
1. As a potential User I would like to be able to see sorting algorithms sort data in an intuitive way to help understanding.
    - 
2. As a new visitor, I would like to seamlessly navigate the website and understand and use the interactive parts easily.
3. As a potential visitor, I want to be able to find the source code so I can see the javascript that was used in a sorting algorithm.
4. As a potential user, I would like to generate data to sort and select a sorting algorithm to sort it.
5. As a potential user, I would like to be able to increase and decrease the speed to see the algorithm in detail.
6. As a potential user, I would like to pause and start the algorithm.
7. As a potential user, I would like to take test my knowledge and understanding of the algorithm.
8. As a potential user, I would like to learn things I did not know about algorithms before, and see answers to questions about time and space complexity.
#### Manual Testing
#### Home Page Header
#### Bar chart
##### Bar chart generation
##### Algorithm Speed Slider
##### Array Size Slider
##### Algorithm Pause 
#### Algorithms
##### Bubble Sort
##### Merge Sort
##### Quick Sort
#### Prism Code Block and Algo explanation
#### Quiz
##### Quiz Navigation & User Input
##### Quiz results
##### Quiz finished buttons
#### Footer
#### Further Testing
### Bugs Found
#### Bugs Fixed
#### Unsolved Bugs
