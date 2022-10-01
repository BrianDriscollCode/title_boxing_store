import React, {useState} from 'react';
import { Link } from "react-router-dom"
import StarRatings from 'react-star-ratings';


//Parent - product/Page.js

//FilterType "all(''), category, price, brand " dictates how to filter
//products before rendering to screen

//FilterVariable, depending on filtertype, is used to filter products
//based on strings (name, brand) or integers (price)

//Products are passed via product/page.js (parent), here they are filtered

const Item_List = ( { products, filterVariable, filterType } ) => {

    return (

        <div id="item_list_wrapper"> 

            {
            filterType === '' ?
              
                products.map((product, index) => 
                
                        <div className="single_item" key={product.name + index}>
                            <img src={product.mini_image} />
                            <h3> {product.name} </h3>
                            <p> ${product.price} </p>
                            <div className="star_ratings">
                                <StarRatings 
                                rating={Math.floor(Math.random() * 5) + 2.5}
                                starRatedColor="#e21a36"
                                numberOfStars={5}
                                name="rating"
                                starDimension='20px'
                                />
                            </div>
                            <Link to={`/product/${product.type}/${product.id}`}> <button className="item_button button_product_page"> Learn More </button> </Link> 
                            
                        </div> 
                    
                ) : null

            } 
         
            {
            filterType === 'category' ?
              
                products.filter(product => product.category.includes(filterVariable))
                    .map((product, index) => 
                
                        <div className="single_item" key={product.name + index}>
                            <img src={product.mini_image} />
                            <h3> {product.name} </h3>
                            <p> ${product.price} </p>
                            <div className="star_ratings">
                                <StarRatings 
                                rating={Math.floor(Math.random() * 5) + 2.5}
                                starRatedColor="#e21a36"
                                numberOfStars={5}
                                name="rating"
                                starDimension='20px'
                                />
                            </div>
                            <Link to={`/product/${product.type}/${product.id}`}> <button className="item_button button_product_page"> Learn More </button> </Link> 
            
                        </div> 
                    
                ) : null

            } 

            {
            filterType === 'price' ?
                
                products.filter(product => 
                        product.price >= filterVariable[0] &&
                        product.price <= filterVariable[1])
                    .map((product, index) => 
                
                        <div className="single_item" key={product.name + index}>
                            <img src={product.mini_image} />
                            <h3> {product.name} </h3>
                            <p> ${product.price} </p>
                            <div className="star_ratings">
                                <StarRatings 
                                rating={Math.floor(Math.random() * 5) + 2.5}
                                starRatedColor="#e21a36"
                                numberOfStars={5}
                                name="rating"
                                starDimension='20px'
                                />
                            </div>
                            <Link to={`/product/${product.type}/${product.id}`}> <button className="item_button button_product_page"> Learn More </button> </Link>
                            
                        </div> 
                    
                ) : null

            } 

        {
            filterType === 'brand' ?
              
                products.filter(product => product.brand.includes(filterVariable))
                    .map((product, index) => 
                
                        <div className="single_item" key={product.name + index}>
                            <img src={product.mini_image} />
                            <h3> {product.name} </h3>
                            <p> ${product.price} </p>
                            <div className="star_ratings">
                                <StarRatings 
                                rating={Math.floor(Math.random() * 5) + 2.5}
                                starRatedColor="#e21a36"
                                numberOfStars={5}
                                name="rating"
                                starDimension='20px'
                                />
                            </div>
                            <Link to={`/product/${product.type}/${product.id}`}> <button className="item_button button_product_page"> Learn More </button> </Link> 
                            
                        </div> 
                    
                ) : null

        } 
        

        </div>

    )

}

export default Item_List