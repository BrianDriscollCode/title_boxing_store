import React from "react";
import { connect } from "react-redux";

//Parent - product/Page.js

//sets banner based on url

const Product_Banner = ( { banners, productSetter } ) => {

    return (

        banners.filter(banner => banner.type == productSetter)
            .map((banner, index) => 

                <div 
                    id="image_banner" 
                    style={ {backgroundImage: `url(${banner.image_link})`} } 
                    key={banner.title + index}> 

                    <div id="banner_text_area">

                        <div id="banner_content_wrapper">
                            <h3> {banner.title}</h3>

                            <span id="message"> {banner.description}
                            </span>

                        </div>
        
                    </div>

                </div>


        )

    )

}

const mapStateToProps = (state) => {

    return { banners: state.banners }

}

export default connect(mapStateToProps)(Product_Banner)