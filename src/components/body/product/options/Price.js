import React, { useState } from 'react';


//Parent - Shopping_options.js

const Price = ( { changeCategoryVariable } ) => {

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
                <input 
                    type="checkbox" 
                    checked={checkedBox == 'one'}
                    value={[0,49.99]} 
                    //sends the filter options back to Page.js to send to itemList to rerender
                    //with new filter settings via a function in Page.js
                    //Function passed: Page.js -> Shopping_options.js -> Brand.js
                    onClick={(e) => changeCategoryVariable(e.target.value.split(','), 'price')}
                    onChange={() => setOnChangeCheckBox('one')}
                    className="input_shopping_options"
                /> 
                <label> {price1} </label>
            </div>
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    checked={checkedBox == 'two'}
                    value={[50.00,69.99]}
                    //sends the filter options back to Page.js to send to itemList to rerender
                    //with new filter settings via a function in Page.js
                    //Function passed: Page.js -> Shopping_options.js -> Brand.js
                    onClick={(e) => changeCategoryVariable(e.target.value.split(','), 'price')}
                    onChange={() => setOnChangeCheckBox('two')}
                    className="input_shopping_options"
                /> 
                <label> {price2} </label>
            </div>
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    checked={checkedBox == 'three'}
                    value={[70.00,99.99]} 
                    //sends the filter options back to Page.js to send to itemList to rerender
                    //with new filter settings via a function in Page.js
                    //Function passed: Page.js -> Shopping_options.js -> Brand.js
                    onClick={(e) => changeCategoryVariable(e.target.value.split(','), 'price')}
                    onChange={() => setOnChangeCheckBox('three')}
                    className="input_shopping_options"
                /> 
                <label> {price3} </label>
            </div>
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    checked={checkedBox == 'four'}
                    value={[100.00, 199.99]}
                    //sends the filter options back to Page.js to send to itemList to rerender
                    //with new filter settings via a function in Page.js
                    //Function passed: Page.js -> Shopping_options.js -> Brand.js 
                    onClick={(e) => changeCategoryVariable(e.target.value.split(','), 'price')}
                    onChange={() => setOnChangeCheckBox('four')}
                    className="input_shopping_options"
                /> 
                <label> {price4} </label>
            </div>
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    checked={checkedBox == 'five'}
                    value={[200.00, 399.99]} 
                    //sends the filter options back to Page.js to send to itemList to rerender
                    //with new filter settings via a function in Page.js
                    //Function passed: Page.js -> Shopping_options.js -> Brand.js
                    onClick={(e) => changeCategoryVariable(e.target.value.split(','), 'price')}
                    onChange={() => setOnChangeCheckBox('five')}
                    className="input_shopping_options"
                /> 
                <label> {price5} </label>
            </div>
        </div>

    )

}

export default Price