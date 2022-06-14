import React, { useState } from 'react';
import { connect } from "react-redux"
import { optionsOutput } from "../../../../actions/index"

const Category = ( { changeCategoryVariable, optionsOutput, options } ) => {

    const [pageParams, setPageParams] = useState('');

    return (
        
        <div className="shopping_options_inputs">
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    value=""
                    onClick={(e) => changeCategoryVariable(e.target.value, 'category')}  
                /> 
                <label> All </label>
            </div>
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    value="Boxing_Competition_Gloves" 
                    onClick={(e) => changeCategoryVariable(e.target.value, 'category')}
                /> 
                <label> Boxing Competition Gloves </label>
            </div>
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    value="Youth_Gloves"
                    onClick={(e) => changeCategoryVariable(e.target.value, 'category')} 
                /> 
                <label> Youth Gloves </label>
            </div>
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    value="Sparring"
                    onClick={(e) => changeCategoryVariable(e.target.value, 'category')}  
                /> 
                <label> Sparring/Work Gloves </label>
            </div>
            <div className="shopping_options_single_input"> 
                <input 
                    type="checkbox" 
                    value="MMA"
                    onClick={(e) => changeCategoryVariable(e.target.value, 'category')}  
                /> 
                <label> MMA Gloves </label>
            </div>
        </div>

    )

}

const mapStateToProps = (state) => {
    return { options: state.options }
}

export default connect(mapStateToProps, {optionsOutput} )(Category)