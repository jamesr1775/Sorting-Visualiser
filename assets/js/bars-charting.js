function generateBarChart(){
    console.log("screen:")
    console.log(screen.width)
    console.log(screen.height)
    console.log('generateBarChart: called')
    let barContainer = document.getElementById('bars-container')
    let spacerContainer = '<div class="col-1"></div>'
    let allBars = ""
    /*Need to remove these magic numbers for screen size adjusting but working for now*/
    for(let i=0; i<(7/10)*(screen.width/30); i++){
        let singleBar = '<div id="bar-' + i + '" class="single-bar"></div>'
        console.log(singleBar)
        allBars += singleBar
    }
    let barsContainerInnerHtml = `${spacerContainer}
                                <div class="col-10">${allBars}</div>
                                ${spacerContainer}`
    barContainer.innerHTML = barsContainerInnerHtml
    let bars = document.getElementsByClassName("single-bar");
    console.log('setting new heights: called')
    for(let bar of bars){
        /*Need to remove these magic numbers for screen size adjusting but working for now*/
        let newHeight = Math.ceil(Math.random() * screen.height*0.5)
        bar.setAttribute("style", "height: " + newHeight + "px")
    }
}

function sortBars(){
    let numBars = document.getElementsByClassName("single-bar").length;
    console.log('setting new heights: called')
    for(let i=0; i<numBars - 1; i++){
        for(let j=0; j<numBars - i - 1; j++){
            let barX =  $('#bar-' + j)
            let barY =  $('#bar-' + j + 1)
            console.log("barX.height :" +barX.height())
            if (barX.height()>barY.height()){
                let tempHeight = barX.height()
                barX.height()= barY.height()
                barY.height() = tempHeight
            }
        }
    }
}

$('#generateBars').click(function() {
    console.log('generateBars click: called')
    generateBarChart();
});
$('#sortBars').click(function() {
    console.log('sortBars click: called')
    sortBars();
})
