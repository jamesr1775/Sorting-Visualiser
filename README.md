# Sorting Visualiser
The [sorting algorithm visualiser](https://jamesr1775.github.io/Sorting-Visualiser/.). See the algorithms that you use day to day under the hood to sort data and get a picture of how they operate to sort data. Why are some algorithms
better than others? Test your knowledge and work out or learn the time and space complexities of the famous algorithms.

## UX
### Project Goals
* The goal of this project is to be able to visualise sorting algorithms to be able to understand them better and to know their time and space compexity.
* The website will provide provide the user with a few sorting algorithms to choose from to sort bar chart data on the screen.
* Users will be able to take a quiz on each algorithm to test themselves and learn.
* This Website will be:
    * Responsive on multiple platforms such as desktops, tablets and smartphones
    * Provide the user with the sorting algorithm code so that they can try to understand it better along with the visualisation elements.

### User Stories
1. As a potential User I would like to be able to see sorting algorithms sort data in an intuitive way to help understanding.
2. As a new visitor, I would like to seamlessly navigate the website and understand and use the interactive parts easily.
3. As a potential visitor, I want to be able to find the source code so I can see the javascript that was used in a sorting algorithm.
4. As a potential user, I would like to generate data to sort and select a sorting algorithm to sort it.
5. As a potential user, I would like to be able to increase and decrease the speed to see the algorithm in detail.
6. As a potential user, I would like to take a quiz and test my knowledge of the algorithm.
### Wireframe mock-ups: 
- [Home Page](https://github.com/jamesr1775/Sorting-Visualiser/blob/master/assets/wireframes/Home.png)
- [Home Algorithm Selected](https://github.com/jamesr1775/Sorting-Visualiser/blob/master/assets/wireframes/Home-Algo-Selected.png)
- [Home Algorithm Quiz](https://github.com/jamesr1775/Sorting-Visualiser/blob/master/assets/wireframes/Home-Algo-Quiz.png)
- [Home Algorithm Selected](https://github.com/jamesr1775/Sorting-Visualiser/blob/master/assets/wireframes/Home-Quiz-Results.png)

## Features
### Home Page
1. The site logo will be at the top of the page and link back/ refresh the home page.
2. There will be a menu bar that controls the bar chart generation, the array size, algorithm speed, sorting algorithm type, starting and stopping the algorithm.
3. The bar chart will be responsive to different screen sizes and adjust the width of the bars based on screen size.
4. The algorithm should display the steps it takes visually.
5. A user can pause and adjust the speed of the algorithm. 
### Algorithm Code & Explanation
1. When an algorithm is selected, easy to understand, clean code will be presented to the user underneath the bar chart graph.
2. The code will be syntaxed and have familiar highlights to that of IDE's so it looks pleasing and makes it easier to read.
3. The user will also be given some explanation to how the algorithm operates.
### Algorithm Quiz
1. When the user has selected the algorithm, they can press the "Take Quiz" button to pull up the relevant trivia questions for the chosen algorithm.
2. Multiple choice questions will be displayed to the user with 1 to 3 incorrect answers and 1 correct answer. 
3. When the user selects an answer, the correct answer will be highlighted green and the wrong answers red.
4. An answer explanation drop down button will appear when a question is answered. This will provide explanation to the answer revealed.
5. There will be a next and previous question button to navigate the quiz questions.
6. A running score of the correct answers will be tracked and then presented to the user when the final question is answered.
7. When the user answers the final question and close the results screen. There will be two buttons generated. One that will allow them to view their score again.
   The second button will allow them to retake the quiz.
### Footer
1. The footer will credit the developer.
2. A link to the websites code will be available in the footer section
### Existing Features
- The header contains the sites logo that directs the user back to the home page.
- A bar chart that visually shows the sorting algorithms running is presented to the user.
- Controls for the algorithm type, speed and array size are implemented above the graph.
- The algorithm steps throught the sorting steps and visually updates the bar colors and heights to perform the swaps.
- A user has the ability to pause and start the algorithm again if they wish and also change the speed of the sorting.
- The algorithm javascript code is shown to the user upon selecting an algorithm along with an explanation/ information on that algorithm.
- The "Take Quiz" button drop down loads up the quiz navigation buttons and question and choice buttons.
- The next and previous question buttons allows navigation through the algorithm questions.
- Visual feedback of the correct answer and incorrect answers is provided to the user upon selecting an answer.
- A drop down button is available that will allow the user to get more information on why the answer to a particular question is the one shown.
- At the end of the quiz a modal pops up and gives the user a table of the questions asked along with their scores for each question and overall score.
- At the end of the quiz, two buttons, retake quiz and view results appear to allow the user to pop back up the score summary modal or restart the quiz from scratch.
- The bottom of the site credits the developer and provides the websites repository/code.
### Features to implement in the future
- An algorithm comparison page that pits a few algorithms against each other to display the speeds of the algorithms for different data lengths visually. i.e with an animated progress bar along with the bar chart that is already generated.
- Video lessons to accompany the algorithm code shown, along with videos on analyzing time and space complexities of algorithms in general so users can get tools to answer some of the questions in the quiz while analyzing the code provided to them above it.
- Add a few more sorting algorithms such as heap sort.
- Implement a test/quiz playground where users could be asked to implement a random algorithm to sort certain data. The code the right could be tested to see if it works and give them feedback if all the tests pass (like leetcode) 
## Technologies Used
The Technologies used in this project are the following:
1. [Bootstrap 5.0:](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
2. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes.
2. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the main nav bar and footer links for improving UX.
3. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Roboto' and the 'Merienda' font into the style.css.
4. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used throughout to add icons for a more pleasing UX.
5. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive.
6. [GitPod:](https://gitpod.io/)
    - GitPod was used as my Editor/ Development Environment.
7. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code with version control.
8. [Prismjs](https://prismjs.com/)
    - Prism was used to highlight the code of the algorithms for easier readability.
## Testing

### Testing User Stories

### Manual Testing
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

#### Known Bugs
1. Zooming in on chrome causes the bar chart to fold bars to next rows
2. Discovered that the swapping heights chart jitter bug is only fixed for bubble sort and occurs in merge sort.

## Deployment
### GitHub Pages
I followed the steps below to deploy my project:
1. Go to [GitHub](https://github.com). 
2. Click on your projects repository and then click the settings tab.
3. Locate the GitHub pages sections in the settings page
4. Select the branch you want to deploy your code from under the source drop down tab.
5. Now if you go back to the GitHub pages section your project should be deployed and you should see the link it was deployed to.

### Creating your own local copy
1. To get a copy of this repo, go to [Sorting Visualiser Repo](https://github.com/jamesr1775/Sorting-Visualiser), make sure your logged in. 
2. In the top right hand corner, click the fork button which will create a copy of the repo into your account.

## Credits
### Media
- The photos used in this site were obtained from:
    - [Free Logo Design](https://www.freelogodesign.org/) - Created the sorting visualiser logo.

### Acknowledgements
- Refreshed my memory of javascript objects from [w3schools](https://www.w3schools.com/js/js_objects.asp)
- Used bootstraps collapse webpage to build my own for the quiz [getbootstrap](https://getbootstrap.com/docs/4.1/components/collapse/)
- Template literals information helped me out from [developer.mozilla](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)  and [developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- Prism wasn't running on dynamically generated elements so with research I used Prism.highlightAll from [schier.co/blog](https://schier.co/blog/how-to-re-run-prismjs-on-ajax-content)
- jsfiddle helped with the initial testing of the algorithm functions [jsfiddle](https://jsfiddle.net/e6m05vdj/2/)
- Had to get the value of a radio button and needed the click event to handle the users answer picks. Got information from [stackoverflow](https://stackoverflow.com/questions/8622336/jquery-get-value-of-selected-radio-button)  and [stackoverflow](https://stackoverflow.com/questions/5142300/javascript-jquery-radio-button-click)
- Add math operaters to strings [stackexchange](https://meta.stackexchange.com/questions/226869/how-can-i-add-the-mathematical-symbol-for-power-like-x-2-to-a-question)
- Learned to get radio input labels ids to be able to style the correct answer green and wrong answers red. [stackoverflow](https://stackoverflow.com/questions/14709617/how-do-i-get-the-label-of-the-selected-radio-button-using-javascript)
- Wanted to add table border [w3schools](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_border)
- Got the check mark and cross mark from [htmlsymbols](https://www.htmlsymbols.xyz/unicode/U+2612)
- Required inbetween two screen size media query information and got the information from [w3schools](https://www.w3schools.com/css/css3_mediaqueries_ex.asp)
- Learned to use the calc() function help with positioning  divs in the center of the screen from the website [developer mozilla] (https://developer.mozilla.org/en-US/docs/Web/CSS/calc())
- Bubble Sort
    - The wikipedia page for bubble sort algorithm helped me come up with the last two questions for the quiz [wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
    - Studied this algorithm during my engineering degree and implemented the majority of it from memory. Double checked my implementation from [medium](https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2).
- Merge Sort
    - The wikipedia page for merge sort algorithm helped me come up with the last two questions for the quiz [wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
    - The following pages helped me learn and implement merge sort along with the wiki page:
        - [geeksforgeeks](https://www.geeksforgeeks.org/merge-sort/)
        - [stackabuse](https://stackabuse.com/merge-sort-in-javascript/)
        - Cracking the Coding Interview by Gayle Laakmann McDowell
- Quick Sort
    - The following pages helped me learn and implement quick sort along with the wiki page:
        - [geeksforgeeks](https://www.geeksforgeeks.org/quick-sort/)
        - [medium](https://medium.com/karuna-sehgal/a-quick-explanation-of-quick-sort-7d8e2563629b#:~:text=Quick%20Sort%20Algorithm%3A%20Steps%20on,last%20item%20in%20the%20array.)
        - Cracking the Coding Interview by Gayle Laakmann McDowell
- Got the template for the bootstrap carousel from [getbootstrap](https://getbootstrap.com/docs/4.0/components/carousel/).
- The pointing green triangle to show the tutorial button css was got from [css-tricks](https://css-tricks.com/snippets/css/css-triangle/).
- Learnt about FadeIn functions in jquery from [jquery](https://api.jquery.com/fadein/).
- Made the gifs by doing a screen capture for video and converted the video to gifs using [ezgif](https://ezgif.com/).

### Bugs/Issues Resolved
- First few versions of bubble sort and trying to change the bar charts heights to perform sorting was difficult. The animation happened 
  all at once at the end of the function, or with the set timeout function the heights were not updated fast enough for the sorting algorithm and maybe only one or two 
  bars swapped back and forth. I found some information that helped me from [stackoverflow](https://stackoverflow.com/questions/48184493/update-element-with-ajax-dont-affect-until-for-loop-end/48184577). 
  The divs were not updating till end of the loop and if I updated them with a timeout function it bugged out because the sort order was messed up so I decided to group animations in to an array.
- Struggled to change the colors to show the two current bars currently be getting compared in the algorithm. Initially tried to change the colors with set time out delays before the 
  the heights of the bars were swapped during the same loop iteration, but this caused delay/ asynchronous issues were multiple bar colors were being changed. My solution was to instead have the color change animations happen as part of the animation 
  array which would be in its own loop iteration. This solved that issue.
- For the merge sort algorithm, the auxilary array was a copy of the barsArray but it was not a deep copy and had all references to the objects inside the barsArray which 
  broke the algorithm. I tried to fix this by making the array a const but it did not work so instead I generated the auxilary with the bars array in the same loop.
- The pause feature required reseting all timeouts which required the playAnimations function to be remade. I got some help with changing the playanimations function to a recursive loop so the pause feature could be implemented. [stackoverflow](https://stackoverflow.com/questions/29173956/start-and-stop-loop-in-javascript-with-start-and-stop-button)
- Pushing the timeouts to an array did not seem to work when clearing them, but the window.clearTimeouts does seem to work which I found from [stackoverflow](https://stackoverflow.com/questions/8860188/javascript-clear-all-timeouts) 
- Initially I tried to just shift the swapAnimations array and pass the animation to play, but with timeouts some animations might have got lost. I made an animationsPlayed array instead to find out which animation has been played last 
  so when unpaused we go back to the correct animation.
- Fixed the sort button so it swaps between pausing and starting the animation of the algorithm.
- When the algorithm code is loaded, some of the bars would fold to a new row. Changing the bar width calculation to use clientWidth and moving the col-10 of bar-chart to the html instead of javascript helped remove this issue. [stackoverflow](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth)
- Learnt that dynamically generated elements need to use the .on to add click events to elements from here [stackoverflow](https://stackoverflow.com/questions/6658752/click-event-doesnt-work-on-dynamically-generated-elements)
- **Fixed for bubble sort.** When the algorithm is moving the largest bar to its sorted position all the bars jumped up and down because the largest div is removed and added in the animation causing the 
   inline-blocks to change position. This was fixed by swapping the smallest bars height with the larger ones height first instead of the other way around.
- Answer explanation button now dissapears after a new question is loaded
- Take quiz button is not visible until an algorithm is selected.
- The jquery slim version did not have the fadein and fadeout functions when I used them which gave me an error. Found information on this at [stackoverflow](https://stackoverflow.com/questions/58863934/getting-fadein-is-not-a-function-although-i-did-add-jquery-to-my-html-file)
- To pause the carousel in the html I found to use data-interval: false here [stackoverflow](https://stackoverflow.com/questions/14977392/bootstrap-carousel-remove-auto-slide)
- Wanted my tutorial anchor to open my modal, I was missing data-toggle="modal" and found it out from [stackoverflow](https://stackoverflow.com/questions/31250364/how-can-i-use-an-anchor-tag-to-open-a-modal-page)