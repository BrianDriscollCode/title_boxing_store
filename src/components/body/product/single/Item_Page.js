import React, { useState } from "react"
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

//*****    Children    *****

//1. single/Details.js
//2. single/Gallery.js
//3. single/Info.js

const Item_Page = ( { productType, productId, products, currentAccount, accountActions, accounts } ) => {

    console.log(productType, productId, products, '-product info')

    console.log(currentAccount[0], ' -currentAccount')

    const images = products.filter(product => product.id === productId).map(product => {

        return product.display_images;

    })

    const filteredProducts = products.filter(product => product.id === productId).map(product => {

        return product;

    })

    const addToCart = async (itemName, itemId) => {

        let insertedAccount = {

            username: currentAccount[0].username,
            password: currentAccount[0].password,
            cart: [
                {name: itemName, id: itemId}
            ]

        }

        console.log(insertedAccount)
        console.log(currentAccount)

        await accountActions("ADD_ITEM", insertedAccount)

        const replaceAccount = accounts.map(account => {

            console.log(account.username, insertedAccount.username)

            if (account.username == insertedAccount.username) {

                return account

            }

        })

        console.log(replaceAccount, " -replace account")

        //await accountActions("SET_CURRENT_ACCOUNT", replaceAccount)

       

    }

    console.log(accounts)
    console.log(currentAccount)

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