import React from "react"

const Details = ( { product, addToCart } ) => {

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

            <button 
                className="item_button"    
                id="item_button_details_page"
                onClick={() => addToCart(product[0].name, product[0].id)}
            > Add to Cart </button>
            

        </div>

    )


}

export default Details