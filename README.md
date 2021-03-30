# Sorting Visualiser
The sorting algorithm visualiser.

## UX
### Project Goals
* The goal of this project is to be able to visualise sorting algorithms to be able to understand them better and to know their time and space compexity.
* The website will provide provide the user with a few sorting algorithms to choose from to sort bar chart data on the screen.
* This Website will be:
    * Responsive on multiple platforms such as desktops, tablets and smartphones
    * Provide the user with the sorting algorithm code so that they can try to understand it better along with the visualisation elements.

### User Stories
1. As a potential User I would like to be able to see sorting algorithms sort data in an intuitive way to help understanding.
2. As a new visitor, I would like to seamlessly navigate the website and understand and use the interactive parts easily.
3. As a potential visitor, I want to be able to find the source code so I can see the javascript that was used in a sorting algorithm.
4. As a potential user, I would like to generate data to sort and select a sorting algorithm to sort it.

### Wireframe mock-ups: 
- [Home Page](https://github.com/jamesr1775/Sorting-Visualiser/blob/master/assets/wireframes/Home.png)
- [Sort Comparison](https://github.com/jamesr1775/Sorting-Visualiser/blob/master/assets/wireframes/Our_Donuts.png)

## Features

### Home Page

### Sort Comparison

### Existing Features

### Features to implement in the future

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
6. [GitPod](https://gitpod.io/)
    - GitPod was used as my Editor/ Development Environment.
7. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code with version control.

## Testing

### Testing User Stories

### Manual Testing
#### Home Page 
#### Sort Comparison

#### Further Testing

#### Known Bugs
1. When the algorithm is moving the largest bar to its sorted position all the bars jump up and down because the largest div is removed and added in the animation causing the 
   inline-blocks to change position.
2. Zooming in on chrome causes the bar chart to fold bars to next rows

## Deployment
### GitHub Pages
I followed the steps below to deploy my project:
1. Go to [GitHub](https://github.com). 
2. Click on your projects repository and then click the settings tab.
3. Locate the GitHub pages sections in the settings page
4. Select the branch you want to deploy your code from under the source drop down tab.
5. Now if you go back to the GitHub pages section your project should be deployed and you should see the link it was deployed to.

### Creating your own local copy
1. To get a copy of this repo, go to [Donut Disturb Repo](https://github.com/jamesr1775/Sorting-Visualiser), make sure your logged in. 
2. In the top right hand corner, click the fork button which will create a copy of the repo into your account.

## Credits
### Media
- The photos used in this site were obtained from:

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