import React, { useEffect, useState } from "react"
import Item_Gallery from "./Gallery"
import Item_Details from "./Details"
import Item_Info from "./Info"

import { connect } from "react-redux"
import { Steam } from "react-bootstrap-icons"
import { accountActions } from "../../../../actions"

//Link routed through "learn more" buttons on product/Page.js

//*****Parent component*****
// - This is a reusable component that populates
//   all content via redux state.

//***** How Populated *****/
// - Based on url structure, app.js with pass down 
// - product id and type (identifiers for any product)
// - component pulls DB via redux, makes matches then renders


//******  Also adds item to cart  */
//***** PROBLEM 
// - Could not update currentAccount with updated cart
// always one step behind (when 2 in cart, app shows only 1)
// Therefore, app uses "accounts" to update cart components, not "currentAccount"

//*****    Children    *****

//1. single/Details.js
//2. single/Gallery.js
//3. single/Info.js

const Item_Page = ( { productType, productId, products, currentAccount, accountActions, accounts } ) => {

    const [accountUpdated, setAccountUpdated] = useState(0)
    
    //get product images
    const images = products.filter(product => product.id === productId).map(product => {

        return product.display_images;

    })

    //get product info
    const filteredProducts = products.filter(product => product.id === productId).map(product => {

        return product;

    })

    //adds to the user's cart
    const addToCart = async ( item ) => {

        let insertedAccount = {

            username: currentAccount[0].username,
            password: currentAccount[0].password,
            cart: item
            
        }

        //matches up with the account and then adds item to cart
        await accountActions("ADD_ITEM", insertedAccount)
        getCurrentAccount();
        setAccountUpdated(accountUpdated + 1);
    }

    const getCurrentAccount = () => {

        let current = accounts.filter(
            
            account => account.username == currentAccount[0].username
            
        )

        accountActions("SET_CURRENT_ACCOUNT", current[0])
    }

    return (

        

        <div id="single_item_page"> 

            <div id="single_item_product_information">
                <Item_Gallery images={images} productType={productType} />
                <Item_Details product={filteredProducts} addToCart={addToCart} />
            </div>
            
            <div id="single_item_information">
                <Item_Info info={filteredProducts} />
            </div>
            


        </div>

    )

}

const mapStateToProps = (state) => {

    return { 
        products: state.products, 
        currentAccount: state.currentAccount, 
        accounts: state.accounts
    }

}

export default connect(mapStateToProps, { accountActions } )(Item_Page);