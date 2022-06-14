import React from 'react';


const Brand = ( {changeCategoryVariable} ) => {


    return (

        <div className="shopping_options_inputs">
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    value="Title_Boxing" 
                    onClick={(e) => changeCategoryVariable(e.target.value, 'brand')}
                /> 
                <label> Title Boxing </label>
            </div>
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    value="Title_Boxing_MMA"
                    onClick={(e) => changeCategoryVariable(e.target.value, 'brand')}
                /> 
            <label> Title Boxing MMA </label>
            </div>
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox"  
                    value="USA_Boxing" 
                    onClick={(e) => changeCategoryVariable(e.target.value, 'brand')}
                /> 
                <label> USA Boxing </label>
            </div>
        </div>

    )

}

export default Brand