import React, { useState } from "react"
import Item_Gallery from "./Gallery"
import Item_Details from "./Details"
import Item_Info from "./Info"

import { connect } from "react-redux"
import { Steam } from "react-bootstrap-icons"

//Link Route through "learn more" buttons on product/Page.js

//*****Parent component*****
// - This is a reusable component that populates
//   all content via redux state.

//*****    Children    *****

//1. single/Details.js
//2. single/Gallery.js
//3. single/Info.js

const Item_Page = ( { productType, productId, products } ) => {

    console.log(productType, productId, products)

    const images = products.filter(product => product.id === productId).map(product => {

        return product.display_images;

    })

    const filteredProducts = products.filter(product => product.id === productId).map(product => {

        return product;

    })

    return (

        <div id="single_item_page"> 

            <div id="single_item_product_information">
                <Item_Gallery images={images} productType={productType} />
                <Item_Details product={filteredProducts} />
            </div>
            
            <div id="single_item_information">
                <Item_Info info={filteredProducts} />
            </div>
            


        </div>

    )

}

const mapStateToProps = (state) => {

    return { products: state.products}

}

export default connect(mapStateToProps)(Item_Page);