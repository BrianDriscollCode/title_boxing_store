import React, { useState } from 'react';
import { connect } from "react-redux";

//Parent - Shopping_options.js

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
                                    onClick={(e) => changeCategoryVariable(e.target.value, 'category')}
                                    onChange={() => setOnChangeCheckBox(text)}  
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