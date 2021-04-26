#     <div align="center"><img src="/assets/images/sorting-visualiser-logo.png" alt="Site Mock ups"></div>
The [sorting algorithm visualiser](https://jamesr1775.github.io/Sorting-Visualiser/.). Visualise the algorithms that programmers have studied and use day to day. Why are some algorithms
better than others? Test your knowledge and solve and learn the time and space complexities of these famous algorithms.
<h2 align="center"><img src="/assets/images/readme-images/mockups.gif" alt="Site Mock ups"></h2>

## Table of Contents

1. [**UX**](#ux)
    - [**Project Goals**](#project-goals)
    - [**User Stories**](#user-stories)
    - [**Wireframe mock-ups**](#wireframe-mock-ups)
2. [**Features**](#features)
    - [**Home Page**](#home-page)
    - [**Algorithm Code and Explanation**](#algorithm-code-and-explanation)
    - [**Algorithm Quiz**](#algorithm-quiz)
    - [**Source Code**](#source-code)
    - [**Existing Features**](#existing-features)
    - [**Features to implement in the future**](#features-to-implement-in-the-future)
3. [**Technologies Used**](#technologies-used)
4. [**Testing**](#testing)
5. [**Deployment**](#deployment)
6. [**Bugs and Issues Resolved**](#bugs-and-issues-resolved)
7. [**Credits**](#credits)
    - [**Media**](#media)
    - [**Acknowledgements**](#acknowledgements)
    
## UX
### Project Goals
* The primary goal of this project is to be able to visualise sorting algorithms so that students of computer programming can understand them better and learn about their time and space complexities.
* The website will provide the programming students with sorting algorithms to choose from, to sort bar chart data on the screen by their heights in pixels.
* Users will be able to read information on the algorithms alongside the javascript code implementation of the algorithm so they can reference it for quiz questions, implement it for themselves in their own project or walk through the code with the pseudo code steps to try and understand it better. 
* Users will be able to take a quiz on each algorithm to test themselves and learn something new about the sorting algorithm whether it is their space and time complexities or some history.
* This Website will:
    * Be responsive on multiple platforms such as desktops, tablets and smartphones
    * Give the user a tutorial on how to use the graph and sorting visualiser.
    * Provide the user with the sorting algorithm code so that they can improve their understanding of the algorithms by using it alongside the visualisation elements.
### Business & Developer Goals
* Create a learning and tutorial website that teaches visitors difficult concepts in programming by making it visually awesome and interesting.
* This website will be for users who are learning about programming and want to understand sorting algorithms.
* As a developer I would like to 
    - learn javascript, jasmine and interactive development by creating an exciting project visitors would like to interact with.
    - Learn sorting algorithms and algorithm analysis. 
    - A challenging project for the developer.

### User Stories
As a Student or Individual studying  programming & algorithms I would like:
1. To be able to see sorting algorithms sort data in an intuitive way, so that I can better my understanding of them.
2. To seamlessly navigate the website and the chart controls, so that I can understand and use the controls easily.
3. The ability to find the code of a selected algorithm, so I can see the javascript that was used in a sorting algorithm and use it myself in my own project.
4. To control the amount of data to sort, so that I can get a better feel for the improvements algorithms like quick sort and merge sort brought to programming.
5. To control the speed of the algorithm sorting so that I can slow it down to see it in more detail or speed it up for large data sets.
6. The ability to test my knowledge on algorithms, so that I can get feedback on my time and space complexity analysis.
7. To learn things I did not know about algorithms before and see answers to questions, so that I can prepare for exams, interviews or just improve my programming algorithm knowledge.
### Wireframe mock-ups
- [Home Page](https://github.com/jamesr1775/Sorting-Visualiser/blob/master/assets/wireframes/home.png)
- [Home Algorithm Selected](https://github.com/jamesr1775/Sorting-Visualiser/blob/master/assets/wireframes/home-algo-selected.png)
- [Home Algorithm Quiz](https://github.com/jamesr1775/Sorting-Visualiser/blob/master/assets/wireframes/home-algo-quiz.png)
- [Home Algorithm Selected](https://github.com/jamesr1775/Sorting-Visualiser/blob/master/assets/wireframes/home-quiz-results.png)

## Features
### Home Page
1. The site logo will be at the top of the page and link back/ refresh the home page.
2. Upon visiting the site, the user will be presented with a visual tutorial that explains the bar chart and controls available to them.
3. There will be a menu bar that controls the bar chart generation, the array size, algorithm speed, sorting algorithm type, starting and stopping the algorithm.
4. The bar chart will be responsive to different screen sizes and adjust the width of the bars based on screen size.
5. The algorithm should display the steps it takes visually.
6. A user can pause and adjust the speed of the algorithm. 
### Algorithm Code and Explanation
1. When an algorithm is selected, easy to understand, clean code will be presented to the user underneath the bar chart graph.
2. The code will highlighted similar to that of IDE's so it looks pleasing and makes it easier to read.
3. The user will also be given some explanation to how the algorithm operates.
### Algorithm Quiz
1. When the user has selected the algorithm, they can press the "Take Quiz" button to pull up the relevant trivia questions for the chosen algorithm.
2. Multiple choice questions will be displayed to the user with 1 to 3 incorrect answers and 1 correct answer. 
3. When the user selects an answer, the correct answer will be highlighted green and the wrong answers red.
4. An answer explanation drop down button will appear when a question is answered. This will provide explanation to the answer revealed.
5. There will be a next and previous question button to navigate the quiz questions.
6. A running score of the correct answers will be tracked and then presented to the user when the final question is answered.
7. When the user answers the final question and closes the results screen. There will be two buttons generated. One that will allow them to view their score again. The second button will allow them to retake the quiz.
### Source Code
1. The footer will credit the developer.
2. A link to the websites code will be available in the footer section.
### Existing Features
- The header contains the sites logo that directs the user back to the home page.
- Upon visiting the website a user is presented with a tutorial modal popup that shows how to use the chart and the buttons associated with it.
    <div align="center">
    <img src="/assets/images/readme-images/tutorial-modal.jpg" alt="Tutorial modal" >
    </div>

- A bar chart that visually shows the sorting algorithms running is presented to the user.
    <div align="center">
    <img src="/assets/images/algo-speed.gif" alt="Algorithm speed gif" >
    </div>

    - The algorithm steps through the sorting steps and visually updates the bar colors and heights to perform the swaps.
    - A user has the ability to pause and start the algorithm again if they wish and also change the speed of the sorting.
    - Controls for the algorithm type, speed and array size are implemented above the graph.
    <div><br/></div>
    <div align="center">
    <img src="/assets/images/array-size.gif" alt="array size gif" >
    </div>


- The algorithm javascript code is shown to the user upon selecting an algorithm along with an explanation/ information on that algorithm.
    <div align="center">
    <img src="/assets/images/readme-images/algo-info.jpg" alt="algorithm code and information" >
    </div>
- The "Take Quiz" button drop down loads up the quiz navigation buttons and question and choice buttons.
    <div align="center">
    <img src="/assets/images/readme-images/quiz.jpg" alt="multiple choice quiz" >
    </div>

    - The next and previous question buttons allows navigation through the algorithm questions.
    - Visual feedback of the correct answer and incorrect answers is provided to the user upon selecting an answer.
    - A drop down button is available that will allow the user to get more information on why the answer to a particular question is the one shown.
    - At the end of the quiz a modal pops up gives the user a table of the questions asked along with their scores for each question and overall score.
    - At the end of the quiz, two buttons, retake quiz and view results appear to allow the user to pop back up the score summary modal or restart the quiz from scratch.
            <div><br/></div>
            <div align="center">
            <img src="/assets/images/readme-images/quiz-modal.jpg" alt="quiz modal" >
            </div>

- The bottom of the site credits the developer and provides the websites repository/code.
### Features to implement in the future
- An algorithm comparison page that pits a few algorithms against each other to display the speeds of the algorithms for different data lengths visually. i.e with an animated progress bar along with the bar chart that is already generated.
- Video lessons to accompany the algorithm code shown, along with videos on analyzing time and space complexities of algorithms in general so users can get tools to answer some of the questions in the quiz while analyzing the code provided to them above it.
- Add a few more sorting algorithms such as heap sort.
- Implement a test/quiz playground where users could be asked to implement a random algorithm to sort certain data. The code they input could be tested to see if it works and give them feedback if all the tests pass (like leetcode).
- I would like to add a difficulty option to the quiz so that different questions could be asked depending on what difficulty the user would select. This would add potential for non programming students/users to get questions that don't require a software background.
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
8. [Prismjs:](https://prismjs.com/)
    - Prism was used to highlight the code of the algorithms for easier readability.
9. [Jasmine:](https://jasmine.github.io/pages/getting_started.html)
    - Jasmine used to unit test algorithms.
10. [JqueryUI](https://code.jquery.com/ui/)
    - Required to test some elements with jasmine testing.
11. [responsivedesign](http://ami.responsivedesign.is/#)
    - Used to generate the mockups.
12. [ezgif](https://ezgif.com/video-to-gif)
    - Used to generate gifs used throughout testing, readme and tutorial.
## Testing
Testing details can be viewed here [Testing.md](https://github.com/jamesr1775/Sorting-Visualiser/blob/master/Testing.md)

## Deployment
### GitHub Pages
Follow the steps below to deploy my project:
1. Go to [GitHub](https://github.com). 
2. Click on your projects repository and then click the settings tab.
3. Locate the GitHub pages sections in the settings page
4. Select the branch you want to deploy your code from under the source drop down tab.
5. Now if you go back to the GitHub pages section your project should be deployed and you should see the link it was deployed to.

### Creating your own local copy
1. To get a copy of this repo, go to [Sorting Visualiser Repo](https://github.com/jamesr1775/Sorting-Visualiser), make sure your logged in. 
2. In the top right hand corner, click the fork button which will create a copy of the repo into your account.

## Bugs and Issues Resolved
This section can be located in the [Testing.md File](https://github.com/jamesr1775/Sorting-Visualiser/blob/master/Testing.md).

## Credits
### Media
- The photos used in this site were obtained from:
    - [Free Logo Design](https://www.freelogodesign.org/) - Created the sorting visualiser logo.

### Acknowledgements
- Initial inspiration for the project came from watching a sorting visualiser video from youtube here [Timo Bingmann's Channel](https://www.youtube.com/watch?v=kPRA0W1kECg)
    - I wanted to create my own version that was interactive and deploy it on my github.
    - I also wanted to refresh my memory of these algorithms and this project definitely allowed me to do that.
    - I wanted a challenging project that looks cool.
- Thanks to mentor Miguel Martinez with great feedback and help throughout the project. He pushed me to add a little more to it for new users to understand it better so the tutorial was created, helped me setting up Jasmine testing in my project and much more.
- Refreshed my memory of javascript objects from [w3schools](https://www.w3schools.com/js/js_objects.asp).
- Used bootstraps collapse webpage to build my own for the quiz [getbootstrap](https://getbootstrap.com/docs/4.1/components/collapse/).
- Template literals information helped me out from [developer.mozilla](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)  and [developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).
- Prism wasn't running on dynamically generated elements so with research I used Prism.highlightAll from [schier.co/blog](https://schier.co/blog/how-to-re-run-prismjs-on-ajax-content).
- jsfiddle helped with the initial testing of the algorithm functions [jsfiddle](https://jsfiddle.net/e6m05vdj/2/).
- Had to get the value of a radio button and needed the click event to handle the users answer picks. Got information from [stackoverflow](https://stackoverflow.com/questions/8622336/jquery-get-value-of-selected-radio-button)  and [stackoverflow](https://stackoverflow.com/questions/5142300/javascript-jquery-radio-button-click).
- Add math operators to strings [stackexchange](https://meta.stackexchange.com/questions/226869/how-can-i-add-the-mathematical-symbol-for-power-like-x-2-to-a-question).
- Learned to get radio input labels ids to be able to style the correct answer green and wrong answers red. [stackoverflow](https://stackoverflow.com/questions/14709617/how-do-i-get-the-label-of-the-selected-radio-button-using-javascript).
- Wanted to add table border [w3schools](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_border).
- Got the check mark and cross mark from [htmlsymbols](https://www.htmlsymbols.xyz/unicode/U+2612).
- Required in between two screen size media query information and got the information from [w3schools](https://www.w3schools.com/css/css3_mediaqueries_ex.asp).
- Learned to use the calc() function help with positioning  divs in the center of the screen from the website [developer mozilla] (https://developer.mozilla.org/en-US/docs/Web/CSS/calc()).
- Bubble Sort
    - The wikipedia page for bubble sort algorithm helped me come up with the last two questions for the quiz [wikipedia](https://en.wikipedia.org/wiki/Bubble_sort).
    - Studied this algorithm during my engineering degree and implemented the majority of it from memory. Double checked my implementation from [medium](https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2).
- Merge Sort
    - The wikipedia page for merge sort algorithm helped me come up with the last two questions for the quiz [wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
    - The following pages helped me learn and implement merge sort along with the wiki page:
        - [geeksforgeeks](https://www.geeksforgeeks.org/merge-sort/).
        - [stackabuse](https://stackabuse.com/merge-sort-in-javascript/).
        - Cracking the Coding Interview by Gayle Laakmann McDowell.
- Quick Sort
    - The following pages helped me learn and implement quick sort along with the wiki page:
        - [geeksforgeeks](https://www.geeksforgeeks.org/quick-sort/).
        - [medium](https://medium.com/karuna-sehgal/a-quick-explanation-of-quick-sort-7d8e2563629b#:~:text=Quick%20Sort%20Algorithm%3A%20Steps%20on,last%20item%20in%20the%20array.).
        - Cracking the Coding Interview by Gayle Laakmann McDowell
- Got the template for the bootstrap carousel from [getbootstrap](https://getbootstrap.com/docs/4.0/components/carousel/).
- The pointing green triangle to show the tutorial button css was got from [css-tricks](https://css-tricks.com/snippets/css/css-triangle/).
- Learnt about FadeIn functions in jquery from [jquery](https://api.jquery.com/fadein/).
- Made the gifs by doing a screen capture for video and converted the video to gifs using [ezgif](https://ezgif.com/).
- My mentor gave me resources to add jasmine to my project. 
- Learned more about jasmine unit testing from [Youtube Dylan Israel](https://www.youtube.com/watch?v=h2eWfvcAOTI&t=428s).
- Got some information for functions like beforeAll in jasmine testing from [jasmine.github.io](https://jasmine.github.io/api/3.7/global).
- Learned about setting style fixtures to test classes from [itsmycodeblog](https://www.itsmycodeblog.com/2015-4-22-jasmine-jquery-testing-css/2015-4-22-jasmine-jquery-testing-css/).
- Wanted to click input tags in jasmine testing. Got help from [stackoverflow](https://stackoverflow.com/questions/871063/how-to-set-radio-option-checked-onload-with-jquery).