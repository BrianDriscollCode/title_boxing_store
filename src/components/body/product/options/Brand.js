import React, { useState } from 'react';
import { connect } from "react-redux"


//Parent - Shopping_options.js

const Brand = ( {changeCategoryVariable, options, productSetter} ) => {

    const [checkedBox, setCheckedBox] = useState('')

    const setOnChangeCheckBox = async (value) => {

        await setCheckedBox(value)

    }

    return (

        <div className="shopping_options_inputs">

            {
            options.filter(
                
                option => option.type.toLowerCase().includes(productSetter.toLowerCase()) && option.option == "brand"
            )
            .map(brand => (

                       brand.brands.map(text => 
                        
                        <div className="shopping_options_single_input"> 
                                <input 
                                    type="checkbox" 
                                    checked={checkedBox == text}
                                    value={text}
                                    onClick={(e) => changeCategoryVariable(e.target.value, 'brand')}
                                    onChange={() => setOnChangeCheckBox(text)}  
                                /> 
                                <label> {text.replace(/[^a-zA-Z]/g, " ")} </label>
                            </div>

                        )
                        
                )
            )}

            </div>

        // <div className="shopping_options_inputs">
        //     <div className="shopping_options_single_input"> 
        //         <input 
        //             type="checkbox" 
        //             value="Title_Boxing" 
        //             onClick={(e) => changeCategoryVariable(e.target.value, 'brand')}
        //         /> 
        //         <label> Title Boxing </label>
        //     </div>
        //     <div className="shopping_options_single_input"> 
        //         <input 
        //             type="checkbox" 
        //             value="Title_Boxing_MMA"
        //             onClick={(e) => changeCategoryVariable(e.target.value, 'brand')}
        //         /> 
        //     <label> Title Boxing MMA </label>
        //     </div>
        //     <div className="shopping_options_single_input"> 
        //         <input 
        //             type="checkbox"  
        //             value="USA_Boxing" 
        //             onClick={(e) => changeCategoryVariable(e.target.value, 'brand')}
        //         /> 
        //         <label> USA Boxing </label>
        //     </div>
        // </div>

    )

}

const mapStateToProps = (state) => {

    return { options: state.options }

}

export default connect(mapStateToProps)(Brand)