 
describe('TS_004_Generate_Bar_Chart', function() {

    beforeEach(() => {
        setFixtures(`
            <div id="bar-chart" class="col-10 no-padding"></div>
            <div class="slidecontainer">
                <label for="arraySize" class="array-size-slider button-text">Array Size</label>
                <input name="arraySize" id="arraySize" type="range" min="5" max="100" value="10" class="slider">
            </div>
        `)
    });
    it('TC_001_Generate_Bars', function() {
        let expected_number_of_bars = '10'
        generateBarChart();
        for(let i=0; i<expected_number_of_bars; i++){
            expect($('#bar-chart').html()).toContain('<div id="bar-' + i );
        }
        expect($("#arraySize").val()).toEqual(expected_number_of_bars);
    });

    it('TC_002_Generate_Bars_Slider_Change', function() {

        let max_bars = 100
        for(let i=5; i<max_bars; i++){
            let expected_number_of_bars = i.toString();
            $("#arraySize").val(i)
            generateBarChart();
            expect($('#bar-chart').html()).toContain('<div id="bar-' + (i-5));
            expect($("#arraySize").val()).toEqual(expected_number_of_bars);
        }
    });
    it('TC_003_ArraySize_Min', function() {
        let expected_number_of_bars = '5'
        $("#arraySize").val(4)
        expect($("#arraySize").val()).toEqual(expected_number_of_bars);
    });
    it('TC_004_ArraySize_Max', function() {
        let expected_number_of_bars = '100'
        $("#arraySize").val(101)
        expect($("#arraySize").val()).toEqual(expected_number_of_bars);
    });
    it('TC_005_Set_Color', function() {
        let expectedColor = 'rgb(255, 0, 0)' //red
        generateBarChart();
        setColor("#bar-0", "red")
        expect($("#bar-0").css('background-color')).toEqual(expectedColor);
    });
    it('TC_006_Set_Height', function() {
        let expectedHeight = '250px'
        generateBarChart();
        setHeight("#bar-0", expectedHeight)
        expect($("#bar-0").css('height')).toEqual(expectedHeight);
    });
});

describe('TS_005_Setup_Algorithms', function() {

    beforeEach(() => {
        setFixtures(
            `<div id="bar-chart" class="col-10 no-padding"></div>
            <div class="container-fluid code-info-container-bg-color">
                        <div class="row">
                            <div class="col-1"></div>
                            <div id="code-block" class="col-lg-5 col-12 mt-5">
                                <pre id="bubble-sort-pre" class="display-none"><code id="bubble-sort-code-block">
                                </code></pre> 
                                <pre id="merge-sort-pre" class="display-none"><code id="merge-sort-code-block">
                                </code></pre>
                                <pre id="quick-sort-pre" class="display-none"><code id="quick-sort-code-block">
                                </code></pre>
                            </div>
                            <div id="algo-info-block" class="col-lg-5 col-12 mt-5">
                                <div id="bubble-sort-info-block" class="display-none"></div>
                                <div id="merge-sort-info-block" class="display-none"></div>
                                <div id="quick-sort-info-block" class="display-none"></div>
                            </div>
                            <div class="col-1"></div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <p id="take-quiz-block">
                        </p>
                        <div class="row">
                            <div class="col-1 d-none d-sm-block"></div>
                            <div class="col-10-sm col-12">
                                <div class="collapse multi-collapse" id="multiCollapseExample2">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-12">
                                                <div id="question-block"></div>
                                                <div id="answer-choices-block"></div>
                                            </div>
                                            <div class="col-12">
                                                <div id="nav-questions-block"></div>
                                            </div>
                                            <div class="col-12">
                                                <div id="answer-reveal-block"></div>
                                            </div>
                                            <div class="col-12">
                                                <div id="quiz-results-block"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-1 d-none d-sm-block"></div>
                        </div>
                    </div>`)
          setStyleFixtures(`.display-none {
                            display: none !important;
                        }`)

    });
    it('TC_001_AddCodeToHtml_Bubble_Sort_Code', function() {
        let expectedCode = getBubbleSortCodeString()
        addCodeToHtml()
        expect($("#bubble-sort-code-block").text()).toEqual(expectedCode);
    });
    it('TC_002_AddCodeToHtml_Merge_Sort_Code', function() {
        let expectedCode = getMergeSortCodeString()
        addCodeToHtml()
        expect($("#merge-sort-code-block").text()).toEqual(expectedCode);
    });
    it('TC_003_AddCodeToHtml_Quick_Sort_Code', function() {
        let expectedCode = getQuickSortCodeString()
        addCodeToHtml()
        expect($("#quick-sort-code-block").text()).toEqual(expectedCode);
    });

    it('TC_004_AddCodeToHtml_Bubble_Sort_Info', function() {
        let expectedCode = getBubbleSortInfoString()
        addCodeToHtml()
        expect($("#bubble-sort-info-block").html().toString()).toEqual(expectedCode)
    });
    it('TC_005_AddCodeToHtml_Merge_Sort_Info', function() {
        let expectedCode = getMergeSortInfoString()
        addCodeToHtml()
        expect($("#merge-sort-info-block").html()).toEqual(expectedCode);
    });
    it('TC_006_AddCodeToHtml_Quick_Sort_Info', function() {
        let expectedCode = getQuickSortInfoString()
        addCodeToHtml()
        expect($("#quick-sort-info-block").html()).toEqual(expectedCode);
    });
    it('TC_007_CodeInfo_Default_Not_Visible', function() {
        addCodeToHtml()
        expect($("#bubble-sort-info-block")).toHaveClass('display-none')
        expect($("#merge-sort-info-block")).toHaveClass('display-none')
        expect($("#bubble-sort-info-block")).toHaveClass('display-none')
    });
    it('TC_007_CodeInfo_BubbleSort_Visible', function() {
        addCodeToHtml()
        showCurrentAlgorithmCodeAndInfo("bubble-sort")
        expect($("#bubble-sort-info-block").attr('class')).toEqual('')
        expect($("#merge-sort-info-block")).toHaveClass('display-none')
        expect($("#quick-sort-info-block")).toHaveClass('display-none')
    });
    it('TC_008_CodeInfo_MergeSort_Visible', function() {
        addCodeToHtml()
        showCurrentAlgorithmCodeAndInfo("merge-sort")
        expect($("#merge-sort-info-block").attr('class')).toEqual('')
        expect($("#bubble-sort-info-block")).toHaveClass('display-none')
        expect($("#quick-sort-info-block")).toHaveClass('display-none')
    });
    it('TC_009_CodeInfo_QuickSort_Visible', function() {
        addCodeToHtml()
        showCurrentAlgorithmCodeAndInfo("quick-sort")
        expect($("#quick-sort-info-block").attr('class')).toEqual('')
        expect($("#bubble-sort-info-block")).toHaveClass('display-none')
        expect($("#merge-sort-info-block")).toHaveClass('display-none')
    });
    it('TC_010_Hide_Quick_And_Merge', function() {
        addCodeToHtml()
        showCurrentAlgorithmCodeAndInfo("bubble-sort")
        showCurrentAlgorithmCodeAndInfo("merge-sort")
        showCurrentAlgorithmCodeAndInfo("quick-sort")
        expect($("#bubble-sort-info-block").attr('class')).toEqual('')
        expect($("#merge-sort-info-block").attr('class')).toEqual('')
        expect($("#quick-sort-info-block").attr('class')).toEqual('')
        hideOtherAlgorithmCodeAndInfo("bubble-sort")
        expect($("#bubble-sort-info-block").attr('class')).toEqual('')
        expect($("#merge-sort-info-block")).toHaveClass('display-none')
        expect($("#quick-sort-info-block")).toHaveClass('display-none')
    });
    it('TC_011_Hide_Quick_And_Bubble', function() {
        addCodeToHtml()
        showCurrentAlgorithmCodeAndInfo("bubble-sort")
        showCurrentAlgorithmCodeAndInfo("merge-sort")
        showCurrentAlgorithmCodeAndInfo("quick-sort")
        expect($("#bubble-sort-info-block").attr('class')).toEqual('')
        expect($("#merge-sort-info-block").attr('class')).toEqual('')
        expect($("#quick-sort-info-block").attr('class')).toEqual('')
        hideOtherAlgorithmCodeAndInfo("merge-sort")
        expect($("#merge-sort-info-block").attr('class')).toEqual('')
        expect($("#bubble-sort-info-block")).toHaveClass('display-none')
        expect($("#quick-sort-info-block")).toHaveClass('display-none')
    });
    it('TC_012_Hide_Merge_And_Bubble', function() {
        addCodeToHtml()
        showCurrentAlgorithmCodeAndInfo("bubble-sort")
        showCurrentAlgorithmCodeAndInfo("merge-sort")
        showCurrentAlgorithmCodeAndInfo("quick-sort")
        expect($("#bubble-sort-info-block").attr('class')).toEqual('')
        expect($("#merge-sort-info-block").attr('class')).toEqual('')
        expect($("#quick-sort-info-block").attr('class')).toEqual('')
        hideOtherAlgorithmCodeAndInfo("quick-sort")
        expect($("#quick-sort-info-block").attr('class')).toEqual('')
        expect($("#bubble-sort-info-block")).toHaveClass('display-none')
        expect($("#merge-sort-info-block")).toHaveClass('display-none')
    });
});
