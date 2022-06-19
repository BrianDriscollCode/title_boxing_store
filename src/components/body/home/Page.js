import React from "react";
import Home_Banner from "./Banner";
import Home_Reel from "./Reel";
import { connect } from "react-redux" 

const Home_Page = ( { products } ) => {

    console.log(products)


    return (
        

        <div className="page_div">

            <div id="home_page_container">
                
                <Home_Banner />
                <Home_Reel products={products} />

            </div>

            

        </div>

    )


}

const mapStateToProps = (state) => {

    return { products: state.products }

}

export default connect(mapStateToProps)(Home_Page)