import React, { useEffect, useState } from "react";
import { connect } from "react-redux"
import { chooseProduct } from "../../../actions/index";
import { useParams } from "react-router-dom"
import { AnimationOnScroll } from "react-animation-on-scroll"

import Product_Banner from "./Product_Banner";
import Item_List from "./Item_List";
import Shopping_Options from "./Shopping_options";

//*****Parent component*****
// - This is a reusable component that populates
//   all content via redux state.

//*****    Children    *****

//Tree 1. Product_Banner - changeable banner
//Tree 2. Shopping_Options - "sets filter options"
//              Brand
//              Category
//              Price
//Tree 3. Item_List "print out items"

const Product_Page = ( { products, productSetter } ) => {


    const [filterVariable, setFilterVariable] = useState('');
    const [filterType, setFilterType] = useState('');
    const [productChooser, setProductChooser] = useState('');

    const changeCategoryVariable = async (filterVariableOption, filterTypeOption) => {

        await setFilterVariable(filterVariableOption)
        await setFilterType(filterTypeOption);

        console.log(filterVariableOption)
    }


    useEffect(() => {

        setProductChooser(productSetter)

    }, [])


    return (
        
        <div>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <div id="product_div">
                
                <Product_Banner productSetter={productSetter} />

                <div id="product_content"> 

                    <div id="shopping_options_container">
                        
                        <h3 id="shopping_options_title"> Shopping Options </h3>

                        <Shopping_Options changeCategoryVariable={changeCategoryVariable} productSetter={productSetter}/>
                    </div>

                    <div id="item_list_container">
                        <Item_List 
                            products={products.filter(product => product.type === productChooser)} 
                            filterVariable={filterVariable} 
                            filterType={filterType} />
                    </div>

                </div>

            </div>
            </AnimationOnScroll>
        </div>
        

    )


}

const mapStateToProps = (state) => {
    return { products: state.products}
}

export default connect(mapStateToProps, { chooseProduct })(Product_Page)