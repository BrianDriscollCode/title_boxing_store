import { useState, useEffect, useRef } from "react";

const RangeSlider = ({ initialMin, initialMax, min, max, step, priceCap, changeCategoryVariable }) => {

    const progressRef = useRef(null);
    const [minValue, setMinValue] = useState(initialMin);
    const [maxValue, setMaxValue] = useState(initialMax);

    const handleMin = (e) => {
        if (maxValue <= max) {
            if (parseFloat(e.target.value) > parseFloat(maxValue)) {
            } 
            else {
                setMinValue(parseFloat(e.target.value));
            }
        } 
        else {
            if (parseFloat(e.target.value) < minValue) {
                setMinValue(parseFloat(e.target.value));
            }
        }
    };

    const handleMax = (e) => {
        if (maxValue <= max) {
            if (parseFloat(e.target.value) < parseFloat(minValue)) {
            } 
            else {
                setMaxValue(parseFloat(e.target.value));
            }
        } 
        else {
            if (parseFloat(e.target.value) > maxValue) {
                setMaxValue(parseFloat(e.target.value));
            }
        }
    };

    useEffect(() => {
        progressRef.current.style.left = (minValue / max) * step + "%";
        progressRef.current.style.right = step - (maxValue / max) * step + "%";
        changeCategoryVariable([minValue.toString(), maxValue.toString()], "price")
    }, [minValue, maxValue, max, step]);

    return (
        <div>

            <div>
                <div>
                    <h3> Slider </h3>
                </div>
                <div> {(Math.round(minValue * 100) / 100).toFixed(2)} </div>
                <div> {(Math.round(maxValue * 100) / 100).toFixed(2)} </div>
            </div>

            <div>
                <div>
                    <div class="slider">
                        <div id="progress" ref={progressRef}>
                        </div>
                    </div>
                    
                    <div class="range_input">
                        <input 
                            onChange={handleMin}
                            type="range"
                            class="input-min"
                            min={min}
                            max={max}
                            value={minValue}
                            step={step}
                        />
                        <input 
                            onChange={handleMax}
                            type="range"
                            class="input-max"
                            min={min}
                            max={max}
                            value={maxValue}
                            step={step}
                        />
                    </div>
                    
                </div>
            </div>


        </div>
    );
};

export default RangeSlider;