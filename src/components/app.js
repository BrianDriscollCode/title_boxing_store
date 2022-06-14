import React from "react"
import { HashRouter, Route, Link } from "react-router-dom"

import Header from "./header"
import Footer from "./footer"

import HomePage from "./body/home/Page"
import ProductPage from "./body/product/Page"
import CartPage from "./body/cart/Page"
import CheckoutPage from "./body/Checkout/Page"


const App = () => {


    return (

        <div>
            
            <Header />
            <div id="main_body">

                <HashRouter>

                    <Route path="/" exact component={HomePage}/>

                    <Route path="/product/boxing_glove" render={() => (

                        <ProductPage productSetter="boxing_glove" />

                    )}  />

                    <Route path="/product/shoes" render={() => (

                        <ProductPage productSetter="shoes" />

                    )}  />

                    <Route path="/product/headgear" render={() => (

                        <ProductPage productSetter="headgear" />

                    )}  />

                    <Route path="/cart" exact component={CartPage} />
                    <Route path="/checkout" exact component={CheckoutPage} />

                </HashRouter>

            </div>
            <Footer />

        </div>

    )


}

export default App

