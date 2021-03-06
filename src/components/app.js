import React from "react"
import { HashRouter, Route } from "react-router-dom"
import { connect } from "react-redux";

import Login from "./Login"
import CreateAccount from "./CreateAccount";

import Header from "./header"
import Footer from "./footer"

import HomePage from "./body/home/Page"
import ProductPage from "./body/product/Page"
import CartPage from "./body/cart/Page"
import CheckoutPage from "./body/Checkout/Page"
import Purchased from "./body/Checkout/Purchased"
import Item_Page from "./body/product/single/Item_Page";



const App = ( { products } ) => {


    return (

        <div>
            
            
            <HashRouter>
                <Header />
                    <div id="main_body">

                        <Route path="/" exact component={HomePage}/>

                        <Route path="/login" exact component={Login} />
                        <Route path="/create_account" exact component={CreateAccount} />

                        <Route path="/product/boxing_glove" exact render={() => (

                            <ProductPage productSetter="boxing_glove" />

                        )}  />

                        <Route path="/product/shoes" exact render={() => (

                            <ProductPage productSetter="shoes" />

                        )}  />

                        <Route path="/product/headgear" exact render={() => (

                            <ProductPage productSetter="headgear" />

                        )}  />

                        <Route path="/product/punching_bag" exact render={() => (

                        <ProductPage productSetter="punching_bag" />

                        )}  />

                        {/* Routing all the individual products to product/single/Item_Page'
                        
                            Uses the url structure to decide what product to show        */}
                        
                        {

                        products.map((product, index) => (                             
                                
                            <Route path={`/product/${product.type}/${product.id}` } 
                                key={product.type + index}
                                render={() => (


                                    <Item_Page productType={product.type} productId={product.id} />

                                )} 
                            />
                            
                            
                        ))

                        }    


                        <Route path="/cart" exact component={CartPage} />
                        <Route path="/checkout" exact component={CheckoutPage} />
                        <Route path="/purchased" exact component={Purchased} />
            

                    

                    </div>
                <Footer />
            </HashRouter>

        </div>

    )


}

const mapStateToProps = (state) => {

    return { products: state.products };

}

export default connect(mapStateToProps)(App)

