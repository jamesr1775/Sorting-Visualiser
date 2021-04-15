 
    describe('TS_004_Generate_Bar_Chart', function() {

        beforeEach(() => {
            setFixtures(`
                <div class="slidecontainer">
                    <label for="arraySize" class="array-size-slider button-text">Array Size</label>
                    <input name="arraySize" id="arraySize" type="range" min="5" max="100" value="10" class="slider">
                </div>
                <div id="bar-chart" class="col-10 no-padding"></div>
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
    });