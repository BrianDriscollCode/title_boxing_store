import React, { useState } from 'react';


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
                    onClick={(e) => changeCategoryVariable(e.target.value.split(','), 'price')}
                    onChange={() => setOnChangeCheckBox('one')}
                /> 
                <label> {price1} </label>
            </div>
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    checked={checkedBox == 'two'}
                    value={[50.00,69.99]}
                    onClick={(e) => changeCategoryVariable(e.target.value.split(','), 'price')}
                    onChange={() => setOnChangeCheckBox('two')}
                /> 
                <label> {price2} </label>
            </div>
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    checked={checkedBox == 'three'}
                    value={[70.00,99.99]} 
                    onClick={(e) => changeCategoryVariable(e.target.value.split(','), 'price')}
                    onChange={() => setOnChangeCheckBox('three')}
                /> 
                <label> {price3} </label>
            </div>
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    checked={checkedBox == 'four'}
                    value={[100.00, 199.99]} 
                    onClick={(e) => changeCategoryVariable(e.target.value.split(','), 'price')}
                    onChange={() => setOnChangeCheckBox('four')}
                /> 
                <label> {price4} </label>
            </div>
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    checked={checkedBox == 'five'}
                    value={[200.00, 399.99]} 
                    onClick={(e) => changeCategoryVariable(e.target.value.split(','), 'price')}
                    onChange={() => setOnChangeCheckBox('five')}
                /> 
                <label> {price5} </label>
            </div>
        </div>

    )

}

export default Price