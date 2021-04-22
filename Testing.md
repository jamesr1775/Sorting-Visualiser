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
5. If all tests pass you will see something like below.
    <div><br/></div>
    <div align="center">
    <img src="/assets/images/testing-images/jasmine-testing.gif" alt="Testing Bar Chart">
    </div>

### Testing User Stories
1. As a potential User I would like to be able to see sorting algorithms sort data in an intuitive way to help understanding.
    - A bar chart that can visually show itself getting sorted via different algorithms is presented to the user on visiting the home page.
    - The user has three of the most famous sorting algorithms to choose from.
    - The bars update color when they get sorted into their correct position.
    - The bars getting compared are are shown in different colors also.
2. As a new visitor, I would like to seamlessly navigate the website and understand and use the interactive parts easily.
    - For the bar chart controls, there is a tutorial modal that shows the user how to use and interact with the chart controls.
    - The quiz buttons and chart controls all have hover css to improve user feedback when interacting with them.
    - The toggle buttons hide and show quiz and answer explanation.
3. As a potential visitor, I want to be able to find the source code so I can see the javascript that was used in a sorting algorithm.
    - Upon selecting an algorithm, the code that implements that algorithm is displayed to the user underneath the bar chart.
    - Also presented is the algorithm steps / pseudo explanation to help the user understand what the algorithm / code is doing.
4. As a potential user, I would like to generate data to sort and select a sorting algorithm to sort it.
    - The generate bars button will refresh the chart with new bars of different heights.
    - There is drop down menu that allows the user to select an algorithm.
    - The array size slider will also update the chart and increase / decrease the number of bars displayed.
5. As a potential user, I would like to be able to increase and decrease the speed to see the algorithm in detail.
    - A slider that controls the speed is available to the user so that they can increase or decrease the animations playing speed.
    - They are also able to pause the current sorting and adjust the speed as required.
6. As a potential user, I would like to pause and start the algorithm.
    - The user can pause and start the sorting animations by clicking the start / pause button.
7. As a potential user, I would like to take test my knowledge and understanding of the algorithm.
    - A quiz is available upon clicking the Take Quiz button. Each quiz has questions related to the selected algorithm some of which include space and time complexity analysis questions.
    - The quiz provide feedback to the user as to whether or not they chose the correct answer via a modal popup and also color styling.
    - At the end of a quiz the user gets a score card that shows them which questions they answered correctly and their overall score.
8. As a potential user, I would like to learn things I did not know about algorithms before, and see answers to questions about time and space complexity.
    - When an answer is selected the user can choose to see more information on the answer by clicking on the answer explanation button to help them understand the correct answer.
    -A mix of general knowledge / trivia and algorithm analysis questions are presented to provide more learning of the history and background behind the algorithms not just algorithm analysis.

### Manual Testing
* All manual tests below:
    - were ran on chrome and firefox.
    - were repeated on various screen resolutions using the chrome and firefox developer tools that include desktops, ipad, ipad pro, iphone X, 6 ,7 , 8 and the plus models.
    - were repeated on the developers own smartphone (samsung) and tablet (ipad).

#### Home Page Header
- The Header responsiveness was tested by varying the screen size to see that the icon image remained centered and undistorted.
- The logo was tested that when it is pressed it returns / refreshes to the home page and that the tutorial modal appears.
- The header is the same across all platforms and the icon remains centered in the header row.

#### Tutorial Modal
- Upon visiting or refreshing the page, a tutorial carousel modal is presented.
- The 5 gifs and explanations that describe the controls and the bar chart load in the carousel and the gifs start playing when changing slide in the carousel.
- The carousel navigation works and can be used to go through the tutorial steps and cycle back to the start or vice versa depending on the arrow clicked.
- The close button closes the modal.
- The modal tutorial can be reopened by clicking the question mark on the top right of the chart.
- When the modal closes, an indicator points to the question mark button , to show thats where the tutorial is to reopen it. 
- The indicator disappears after a few seconds.
    <div><br/></div>
    <div align="center">
    <img src="/assets/images/testing-images/tutorial-modal.gif" style="width:30%;" alt="Testing Bar Chart">
    <img src="/assets/images/testing-images/tutorial-button.gif" style="width:33%;" alt="Testing Bar Chart">
    </div>

#### Bar Chart Controls
##### Device Specific Layout Changes
1. On Laptops and desktops, all the bar chart control buttons and sliders are on the same horizontal row.
2. For tablets, the buttons remain on the same row, but both the slider inputs move to separate rows so that there are three rows.
3. For smartphones all the controls options occupy a separate row.

##### Bar Chart Generation and Array Slider
- Upon visiting the webpage, a bar chart is generated with 10 bars. 
- Across all platforms the width to fit the numbers of bars is adjusted to fit all of the bars on one horizontal row.
- Testing two ways to generate a bar chart:
    - The generate bars button creates a new graph with the fixed number of bars with random heights. The chart is centered on the screen.
    - The array slider varys the number of bars from a minimum of 5 up to a maximum of 100 bars as expected. It creates a new chart and adds or removes bars based on the direction of sliding the button. Inspecting the chart shows the max and min bars possible is correct.
    - Moving the slider to the left decreases the bars and sliding it to the right increases the number of bars.
    - Using the Jquery command $('#arraySize').val() in the browsers console to check that the correct values are being set when changing the slider.
    - Used the Jquery command $('.single-bar').length to also check the number of divs / bars created is correct.
    - The bar chart remains centered on the screen throughtout varying the number of bars.
- The responsiveness of the chart has been tested on various screen sizes. An example of the testing is below. 
    - When changing the screen size, the bars will fold on to a new row which is expected as the generate bars function is called prior to the screen resolution change.
    - When the generate bars button or the array slider is pressed the bar chart fits into one row for that screen size as expected. 
    - The button controls update to the expected layout for tablets and smartphone screen sizes.
    - The tutorial button remains in the top right corner of the chart aligned with the end of the array size slider.
    <div><br/></div>
    <div align="center">
    <img src="/assets/images/testing-images/bar-chart-testing.gif" alt="Testing Bar Chart" >
    </div>

##### Algorithm Speed Slider
- The default speed of the algorithm is slow enough so its easier to understand whats currently being sorted.
- Sliding the slider to the left slows down the animation speed to a minimum value.
- Sliding the slider to the right speeds up the animation speed to a maximum value.
- Using Jquery command $('#algorithmSpeed').val() in the console to display that the correct values are being set when the slider is moved.
    <div><br/></div>
    <div align="center">
    <img src="/assets/images/algo-speed.gif" alt="Testing Bar Chart">
    </div>
##### Algorithm Starting and Pausing
- If an algorithm is not currently selected a modal popup appears to notify the user. The modal shows the user what button to use to select an algorithm
- When an algorithm is selected the start sorting button starts the sorting and visualisation animations. The button then changes to a pause button.
- While a sorting algorithm is running the pause button is present and pauses the current sorting if clicked.
- Changing the speed slider while paused and starting the algorithm again does increase/ decrease the animation speed.
    <div><br/></div>
    <div align="center">
    <img src="/assets/images/start-stop.gif" alt="Testing Bar Chart">
    </div>

#### Algorithm Information & Code

##### Device Specific Layout Changes
1. On Laptops and desktops, the algorithm code block and information block are displayed in the same row side by side
2. For tablets & smartphones, they are displayed on separate rows.
3. The font size of the code adjusts for smaller screen sizes so that the user doesn't have to click into the box and move around the code to view it as much (particularly for the merge sort code as it has the longest lines).

##### Selecting an Algorithm
- The Pick Algorithm drop down menu provides three algorithms to choose from.
- When an algorithm is selected:
    - The code and the algorithm information are changed from hidden to visible for the chosen algorithm.
    - The algorithms code and information that are not selected remain hidden.
    - Prism highlights the code like an IDE and makes the code more readable and user friendly.
    - The algorithm information shows a brief introduction to the algorithm, the algorithm steps it takes to perform its sort and finally a hint is offered for the space and time complexity analysis as the answer can be found in the quiz.
    - The code font size is adjusted for smaller screen resolutions so as to try and fit it to the screen as much as possible without folding the lines of code.
- The correct algorithm runs and can visually be identified when the start sorting button is pressed.
- Swapping between algorithms many times behaves as expected.

##### Bubble Sort
- The code presented to user is correct and implements the algorithm.
- This code is tested in jasmine testing.
- Bubble sort visually moves the largest bar to the right and starts over at the beginning going to the end which is left the last sorted bar.
    <div><br/></div>
    <div align="center" style="margin-left:15%;width: 70%;">
    <img src="/assets/images/testing-images/bubble-sort.gif" alt="bubble sort testing">
    </div>
##### Merge Sort
- The code presented to user is correct and implements the algorithm.
- This code is tested in jasmine testing.
- Merge Sort visually uses the divide and conquer approach working on smaller chunks of the array. 
    - It works on smaller sub arrays sorting them 
    - Then it merges them together to create one array.
    - It does this till there are two sorted arrays left and performs the final merge.
    <div><br/></div>
    <div align="center" style="margin-left:15%;width: 70%;">
    <img src="/assets/images/testing-images/merge-sort.gif" alt="merge sort testing">
    </div>
##### Quick Sort
- The code presented to user is correct and implements the algorithm.
- This code is tested in jasmine testing.
- Quick Sort visually uses the divide and conquer approach also working on smaller chunks of the array. 
    - Chooses a pivot element (middle element at the start) and moves bars greater in height to the right of the pivot and those that are smaller to the left using two pointers (the yellow and red bars).
    - Selects a new pivot and repeats using the last left index returned on the sub arrays created using that index.
    <div><br/></div>
    <div align="center" style="margin-left:15%;width: 70%;">
    <img src="/assets/images/testing-images/quick-sort.gif" alt="quick sort testing">
    </div>

#### Quiz
##### Device Specific Layout Changes
1. On Laptops, desktops and tablets the question choices appear two per row upto a maximum of two rows and two columns.
2. For smartphones, they are displayed on separate rows upto a max of 4 rows.
3. The buttons adjust sizes based on the screen resolution.

##### Quiz Navigation & User Input
- Quiz Navigation
    - The take quiz button appears when the algoritm is selected.
    - The take quiz button opens up the drop down tab that contains the quiz. 
    - A question alongside multiple choices are presented to the user.
    - Confirmed the correct questions and choices are loaded for each algorithm and each question.
    - The take quiz button also hides the quiz if pressed while the quiz is currently shown.
    - Pressing the next button goes to the next question until the very last one where nothing happens if next is clicked.
    - Pressing the previous button goes to the previous question until the first question where nothing happens if previous is clicked.
    - The question number tracker updates correctly on using the question navigation buttons.
- User Input
    - Each question question is tested along side the correct and incorrect choices.
    - The correct modal displays whether you chose the correct/incorrect answer.
    - The questions choices highlight a different color to display the correct (green) and incorrect (red) answers.
    - The answer explanation button appears when a question has been answered.
    - Clicking the answer explanation opens a drop down tab that displays information on the correct answer to the current question.
    - The answer explanation button hides the current answer when pressed.
    - Upon clicking the next question button the answer explanation button disappears.
##### Quiz Completion
- Quiz results Modal
    - Upon clicking the final question a modal that presents the results appears to the user. 
    - It displays the questions and the result of the users inputs.
    - It displays the correct percentage of correct answers which is the user score.
    - The modal can be closed with the close button at the bottom.
    - A view results button appears under the answer explanation button.
    - Pressing the view results button displays the results modal again to the user. 
    - The button is side by side with the retake quiz button and both are centered on the screen.
- Retake Quiz
    - Upon clicking the final question the retake quiz button appears next to the view results button.
    - Clicking the retake quiz button restarts the quiz from the beginning and resets the user score correctly.
    - The answer explanation, retake quiz and view results buttons all disappear after retaking quiz is pressed.
    <div><br/></div>
    <div align="center">
    <img src="/assets/images/testing-images/quiz-completion.gif" alt="quiz completion testing">
    </div>
- Quiz Run Through
    - Confirmed that running through the quiz and select the answers to give scores of 0%, 60% and 100% are correct.
    - The quiz gets reset correctly and starting a new quiz resets the score.
#### Footer
- The footer contains the credit information along with a github icon.
- The github icon opens up the source code for the project into a new tab.

#### Further Testing
### Bugs and Issues Resolved
- First few versions of bubble sort and trying to change the bar charts heights to perform sorting was difficult. The animation happened 
  all at once at the end of the function, or with the set timeout function the heights were not updated fast enough for the sorting algorithm and maybe only one or two 
  bars swapped back and forth. 
  
  I found some information that helped me from [stackoverflow](https://stackoverflow.com/questions/48184493/update-element-with-ajax-dont-affect-until-for-loop-end/48184577). 
  The divs were not updating till end of the loop and if I updated them with a timeout function it bugged out because the sort order was messed up so I decided to group animations in to an array.

- Struggled to change the colors to show the two current bars currently be getting compared in the algorithm. Initially tried to change the colors with set time out delays before the 
  the heights of the bars were swapped during the same loop iteration, but this caused delay/ asynchronous issues were multiple bar colors were being changed. 
  
  My solution was to instead have the color change animations happen as part of the animation 
  array which would be in its own loop iteration. This solved that issue.
- For the merge sort algorithm, the auxilary array was a copy of the barsArray but it was not a deep copy and had all references to the objects inside the barsArray which 
  broke the algorithm. I tried to fix this by making the array a const but it did not work so instead I generated the auxilary with the bars array in the same loop.
- The pause feature required reseting all timeouts which required the playAnimations function to be remade. I got some help with changing the playanimations function to a recursive loop so the pause feature could be implemented here [stackoverflow](https://stackoverflow.com/questions/29173956/start-and-stop-loop-in-javascript-with-start-and-stop-button).
- Pushing the timeouts to an array did not seem to work when clearing them, but the window.clearTimeouts does seem to work which I found from [stackoverflow](https://stackoverflow.com/questions/8860188/javascript-clear-all-timeouts).
- Initially I tried to just shift the swapAnimations array and pass the animation to play, but with timeouts some animations might have got lost. I made an animationsPlayed array instead to find out which animation has been played last 
  so when unpaused we go back to the correct animation.
- Fixed the sort button so it swaps between pausing and starting the animation of the algorithm.
- When the algorithm code is loaded, some of the bars would fold to a new row. Changing the bar width calculation to use clientWidth and moving the col-10 of bar-chart to the html instead of javascript helped remove this issue. [stackoverflow](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth)
- Learnt that dynamically generated elements need to use the .on to add click events to elements from here [stackoverflow](https://stackoverflow.com/questions/6658752/click-event-doesnt-work-on-dynamically-generated-elements)
- **Fixed for bubble sort.** When the algorithm is moving the largest bar to its sorted position all the bars jumped up and down because the largest div is removed and added in the animation causing the 
   inline-blocks to change position. This was fixed by swapping the smallest bars height with the larger ones height first instead of the other way around.
- Answer explanation button now disappears after a new question is loaded
- Take quiz button is not visible until an algorithm is selected.
- The jquery slim version did not have the fadein and fadeout functions when I used them which gave me an error. Found information on this at [stackoverflow](https://stackoverflow.com/questions/58863934/getting-fadein-is-not-a-function-although-i-did-add-jquery-to-my-html-file)
- To pause the carousel in the html I found to use data-interval: false here [stackoverflow](https://stackoverflow.com/questions/14977392/bootstrap-carousel-remove-auto-slide)
- Wanted my tutorial anchor to open my modal, I was missing data-toggle="modal" and found it out from [stackoverflow](https://stackoverflow.com/questions/31250364/how-can-i-use-an-anchor-tag-to-open-a-modal-page)
- Was getting "undefined $" error when setting up some jamine tests. The problem was the order of which some of the scripts were being added the the spec-runner.html file.
- Was getting load/set Fixtures function undefined also and this question helped me solve it as it was again problems with the order adding scripts from [stackoverflow](https://stackoverflow.com/questions/24531674/jasmine-jquery-loadfixtures-is-not-defined).
- Adding the bar-charting.js and quiz-generation.js into jasmine testing was causing issues because I had a document ready function being called and other functions being called in them which caused errors when testing. Got this information that helped me figure out what was causing the errors from [stackoverflow](https://stackoverflow.com/questions/8734168/preventing-document-ready-function-while-unit-testing). Added an if clause that checks if a bar-chart exists and it fixed this.
#### Unsolved Bugs
1. Zooming in on chrome causes the bar chart to fold bars to next rows
2. Discovered that the swapping heights chart jitter bug is only fixed for bubble sort and occurs in merge sort and quick sort.
3. The user can change the speed when the algorithm is running.
4. The user can change the array size when the algorithm is running.
5. The user can click the generate bars button when the algorithm is running.