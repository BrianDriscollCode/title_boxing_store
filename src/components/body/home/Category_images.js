import React from "react";



const Category_Images = () => {

    return (

        <div id="Category_Images_Page"> 

            <div id="category_boxing_gloves"> boxing gloves </div>
            
            
            <div id="middle_category_container">
                <div id="vertical_category_wrapper"> 
                    <div 
                        id="category_headgear" 
                        style={{ backgroundImage: 'url(assets/home/category_images/headgear.jpg)' }}
                    > 
                    </div>
                    <div 
                        id="category_heavy_bag" 
                        style={{ backgroundImage: 'url(assets/home/category_images/heavybag.jpg)' }}
                    >      
                    </div>
                </div>
            

                <div id="headgear_heavy_bag_container"> 
                    <div 
                        id="category_apparel"
                        style={{ backgroundImage: 'url(assets/home/category_images/apparel.jpg)' }}
                    ></div>
                    <div 
                        id="category_corner"
                        style={{ backgroundImage: 'url(assets/home/category_images/corner.jpg)' }}
                    ></div>
                </div>
            </div>

            <div id="category_footwear"> footwear </div>
            

        </div>

    )

}

export default Category_Images