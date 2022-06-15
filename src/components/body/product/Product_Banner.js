import React from "react";
import { connect } from "react-redux";

//images
import Boxing_Gloves from "../../../images/Banner-Headgear_1.jpg"


const Product_Banner = ( { banners, productSetter } ) => {

    console.log(banners)

    return (

        banners.filter(banner => banner.type == productSetter)
            .map(banner => 

                <div id="image_banner" style={ {backgroundImage: `url(${banner.image_link})`} }> 

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