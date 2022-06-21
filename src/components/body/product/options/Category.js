import React, { useState } from 'react';
import { connect } from "react-redux";

//Parent - Shopping_options.js

//options contains all possible filtering options via redux
//productSetter is used to get those specific options from object received via redux

const Category = ( { changeCategoryVariable, options, productSetter } ) => {

    const [checkedBox, setCheckedBox] = useState('')

    const setOnChangeCheckBox = async (value) => {

        await setCheckedBox(value)


    }

    return (
        
        <div className="shopping_options_inputs">

            {
            options.filter(
                
                option => option.type.toLowerCase().includes(productSetter.toLowerCase()) && option.option == "category"
            )
            .map(category => (

                       category.categories.map(text => 
                        
                        <div className="shopping_options_single_input"> 
                                <input 
                                    type="checkbox" 
                                    checked={checkedBox == text}
                                    value={text === 'All' ? '' : text}
                                    //sends the filter options back to Page.js to send to itemList to rerender
                                    //with new filter settings via a function in Page.js
                                    //Function passed: Page.js -> Shopping_options.js -> Brand.js
                                    onClick={(e) => changeCategoryVariable(e.target.value, 'category')}
                                    onChange={() => setOnChangeCheckBox(text)} 
                                    className="input_shopping_options" 
                                /> 
                                <label> {text.replace(/[^a-zA-Z]/g, " ")} </label>
                            </div>

                        )
                        
                )
            )}

            </div>

    )

}

const mapStateToProps = (state) => {
    return { options: state.options }
}

export default connect(mapStateToProps)(Category)