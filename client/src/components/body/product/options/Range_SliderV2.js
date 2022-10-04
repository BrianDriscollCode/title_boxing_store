import  { useState, useEffect, useRef } from "react";

const Range_SliderV2 = ( {initialMin, initialMax, min, max, step, priceCap} ) => {
    
    const [minValue, setMinValue] = useState(initialMin);
    const [maxValue, setMaxValue] = useState(initialMax);

    const add = () => {

        setMaxValue(maxValue + 100)
        console.log(maxValue)

    }   

    return (

        <div class="middle">
            <button onClick={() => add()}> Add </button>
            <button> Subtract </button>
            <div class="multi-range-slider">
                <input 
                    type="range" 
                    id="input-left" 
                    min={min}
                    max={max} 
                    value={minValue}
                    step={step}
                />
                <input 
                    type="range" 
                    class="input-right" 
                    min={min}
                    max={max} 
                    value={maxValue}
                    step={step}
                />

                <div class="slider">
                    <div class="track"></div>
                    <div class="range"></div>
                    <div class="thumb left"></div>
                    <div class="thumb right"></div>
                </div>
            </div>
        </div>


    )
            
}

export default Range_SliderV2;