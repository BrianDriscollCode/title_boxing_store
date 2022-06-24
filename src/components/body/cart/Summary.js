import React from "react"
import { Link } from "react-router-dom"


const Shopping_Summary = ( { cart_items } ) => {

    let cart_price = 0;
    let cart_length = 0;

    const calculatePrice = () => {

        for (let i = 0; i < cart_items.length; i++) {

            cart_price += cart_items[i].price
            cart_length = i;

        }

        return [cart_price, cart_length + 1];

    }

    return (

        <div id="summary_list">

            <h3> Shopping Summary </h3>
            <p> Total Price: ${calculatePrice()[0].toFixed(2)} </p>
            <p> Total Items: {calculatePrice()[1]} </p>
            <Link to="/checkout"><button className="item_button"> <s>Checkout</s> </button></Link>

        </div>

    )

}

export default Shopping_Summary