import React, { useState } from "react"

//Parent single/Item_Page.js

const Details = ( { product, addToCart } ) => {

    const [productBought, setProductBought] = useState(false)

    const buyProduct = (productBought) => {

        addToCart(productBought)
        setProductBought(true)

    }

    return (

        <div id="item_info_container"> 

            <h2> {product[0].name} </h2>
            <p className="item_page_margin" id="price_size"> ${product[0].price} </p>
            <ul id="single_item_list_ul">
            <h3 id="brand_title" className="item_page_margin"> Brand: {product[0].brand.replace(/[^a-zA-Z]/g, " ")} </h3>
            
            {
                
                product[0].details.map(product => 
                    
                    <li className="single_item_list_li"> {product} </li>
                    
                )

            }
            </ul>

            <div id="add_cart_div">
                <button 
                    className="item_button"    
                    id="item_button_details_page"
                    onClick={() => buyProduct(product[0])}
                > 
                    Add to Cart 
                </button>

                {
                    productBought ? 
                        <div className="alert_text" id="added_to_cart"> Added to cart! </div>:
                        null

                }

                
            </div>

            
            

        </div>

    )


}

export default Details