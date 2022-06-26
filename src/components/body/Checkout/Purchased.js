import React from "react"
import { Link } from "react-router-dom" 


const Purchased = () => {

    return (

        <div id="purchased_container">

    
            <div id="button_purchased">
                <h2> Product Purchased! </h2>
                <Link to="/product/boxing_glove"><button class="item_button"> back to shopping </button></Link>
            </div>

            


        </div>

    )

}

export default Purchased