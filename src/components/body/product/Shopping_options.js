import React, { useState } from 'react';
import { Plus } from "react-bootstrap-icons"
import Brand from "./options/Brand";
import Category from './options/Category';
import Price from "./options/Price";



const Shopping_Options = ( { changeCategoryVariable } ) => {

    const [showCategory, setShowCategory] = useState(false)
    const [showPrice, setShowPrice] = useState(false)
    const [showBrand, setShowBrand] = useState(false)


    const activateOption = (optionSetter) => {

        switch(optionSetter) {
            case 'category':
                setShowCategory(!showCategory);
                break;
            case 'price':
                setShowPrice(!showPrice);
                break;
            case 'brand':
                setShowBrand(!showBrand);
                break
        }

    }

    return (

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
                    <Category changeCategoryVariable={changeCategoryVariable} /> :
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
                    <Brand changeCategoryVariable={changeCategoryVariable} /> :
                    null
            }

        </div>

    )

}

export default Shopping_Options