import React, { useEffect } from "react";
import { connect } from "react-redux" 
import { accountActions } from "../../../actions";

const Shopping_Cart = ( { cart_items, currentAccount, accounts, accountActions } ) => {

    const remove_item = (index, e) => {

        //Send for item removal from car in Accounts_Reducer.js
        //Uses the uniqueId to target cart item
        accountActions("REMOVE_ITEM", {username: currentAccount[0].username, uniqueId: e.target.value})

    }


    return (

        <div id="cart_container">
        <div id="title_section_cart">
            <h2> Cart </h2> 
            <hr />
        </div>        

        {cart_items != undefined ?    
        
        
            cart_items.map((item, index) => 
                
            <div className="cart_item" key={index}>

                <div className="left_cart_section">
                    <h3> {item.name} </h3>
                    <p> ${item.price} </p>
                    <img src={item.mini_image} />
                </div>

                <div className="right_cart_section">
                    <button 
                        className="item_button"
                        value={item.uniqueId}
                        onClick={(e) => remove_item(index, e)}
                    > Remove Item </button>
                </div>

            </div>    
                
            )

         : null
        }

        </div>

    )


}

const mapStateToProps = (state) => {

    return {}

}


export default connect(mapStateToProps, { accountActions })(Shopping_Cart)