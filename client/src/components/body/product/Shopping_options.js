import React, { useState } from 'react';
import { Plus } from "react-bootstrap-icons"
import Brand from "./options/Brand";
import Category from './options/Category';
import Price from "./options/Price";


//Parent - product/Page.js

//Component lets user set category, brand, or price filtering options

//Each filtering option opens up when clicked and these are stored in
//there own components @ product/options/(Brand.js, Category.js, Price.js)

const Shopping_Options = ( { changeCategoryVariable, productSetter } ) => {

    const [checked, setChecked] = useState(false)

    const [showCategory, setShowCategory] = useState(false)
    const [showPrice, setShowPrice] = useState(false)
    const [showBrand, setShowBrand] = useState(false)


    const activateOption = (optionSetter) => {

        //closes other search menus when others are opened
        switch(optionSetter) {
            case 'category':
                setShowCategory(!showCategory);
                setShowPrice(false)
                setShowBrand(false)
                break;
            case 'price':
                setShowPrice(!showPrice);
                setShowCategory(false)
                setShowBrand(false)
                break;
            case 'brand':
                setShowBrand(!showBrand);
                setShowPrice(false)
                setShowCategory(false)
                break
        }

    }

    return (


        /* Ternaries used to connect to individual menus via options folder*/
        <div id="shopping_options_wrapper"> 

            <div 
                className="shopping_options_category" 
                onClick={() => activateOption('category')}
            > 
                <p> CATEGORY </p>
                <Plus />
            </div>

            {
                showCategory ? 
                    <Category 
                        changeCategoryVariable={changeCategoryVariable}
                        productSetter={productSetter}
                    /> :
                    null
            }

            <div 
                className="shopping_options_category" 
                onClick={() => activateOption('price')}
            > 
                <p> PRICE </p>
                <Plus />
            </div>

            {
                showPrice ? 
                    <Price changeCategoryVariable={changeCategoryVariable} /> :
                    null
            }

            <div 
                className="shopping_options_category" 
                onClick={() => activateOption('brand')}
            > 
                <p> BRAND </p>
                <Plus />
            </div>

            {
                showBrand ? 
                    <Brand 
                        changeCategoryVariable={changeCategoryVariable}
                        productSetter={productSetter} 
                    /> :
                    null
            }

        </div>

    )

}

export default Shopping_Options