import React, { useState } from 'react';
import Range_Slider from './Range_Slider';
import Range_SliderV2 from './Range_SliderV2';


//Parent - Shopping_options.js

const Price = ( { changeCategoryVariable, productSetter } ) => {

    const [checkedBox, setCheckedBox] = useState('')

    const setOnChangeCheckBox = (value) => {

        setCheckedBox(value)

    }

    const price1 = '$0.00 - $49.99'
    const price2 = '$50.00 - $69.99'
    const price3 = '$70.00 - $99.99'
    const price4 = "$100.00 - $199.99"
    const price5 = "$200.00 - $399.99"


    return (

        <div className="shopping_options_inputs">
            <div className="shopping_options_single_input"> 
            <Range_Slider
                initialMin={100}
                initialMax={300}
                min={5}
                max={500}
                step={0.5}
                priceCap={100}
                changeCategoryVariable={changeCategoryVariable}
            />
                {/* <Range_SliderV2 
                    initialMin={200.00}
                    initialMax={300.00}
                    min={5.00}
                    max={300.00}
                    step={0.5}
                    priceCap={300.00}
                    changeCategoryVariable={changeCategoryVariable}
                /> */}
            </div>
        </div>

    )

}

export default Price