import React, {useState} from 'react';
import { Link } from "react-router-dom"


//Parent - product/Page.js

const Item_List = ( { products, filterVariable, filterType } ) => {

    return (

        <div id="item_list_wrapper"> 

            {
            filterType === '' ?
              
                products.map(product => 
                
                        <div className="single_item">
                            <img src={product.mini_image} />
                            <h3> {product.name} </h3>
                            <p> ${product.price} </p>
                            <Link to={`/product/${product.type}/${product.id}`}> <button className="item_button"> Learn More </button> </Link> 
                            
                        </div> 
                    
                ) : null

            } 
         
            {
            filterType === 'category' ?
              
                products.filter(product => product.category.includes(filterVariable))
                    .map(product => 
                
                        <div className="single_item">
                            <img src={product.mini_image} />
                            <h3> {product.name} </h3>
                            <p> ${product.price} </p>
                            <Link to={`/product/${product.type}/${product.id}`}> <button className="item_button"> Learn More </button> </Link> 
            
                        </div> 
                    
                ) : null

            } 

            {
            filterType === 'price' ?
                
                products.filter(product => 
                        product.price >= filterVariable[0] &&
                        product.price <= filterVariable[1])
                    .map(product => 
                
                        <div className="single_item">
                            <img src={product.mini_image} />
                            <h3> {product.name} </h3>
                            <p> ${product.price} </p>
                            
                            <Link to={`/product/${product.type}/${product.id}`}> <button className="item_button"> Learn More </button> </Link>
                            
                        </div> 
                    
                ) : null

            } 

        {
            filterType === 'brand' ?
              
                products.filter(product => product.brand.includes(filterVariable))
                    .map(product => 
                
                        <div className="single_item">
                            <img src={product.mini_image} />
                            <h3> {product.name} </h3>
                            <p> ${product.price} </p>
                            <Link to={`/product/${product.type}/${product.id}`}> <button className="item_button"> Learn More </button> </Link> 
                            
                        </div> 
                    
                ) : null

        } 
        

        </div>

    )

}

export default Item_List