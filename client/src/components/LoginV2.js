import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { accountActions } from "../actions";


const LoginV2 = ( { accountActions, account, currentAccount } ) => {

    const [username, setUsername] = useState('brianR');
    const [password, setPassword] = useState('password');

    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginFail, setLoginFail] = useState(false)

    const printOut = (e) => {
        e.preventDefault();
        console.log(e)
    }

    console.log(currentAccount)

    const login = async (e, passedUsername, passedPassword) => {

        e.preventDefault();
        let local_account_variable;
        console.log('test')

        let response1 = await axios.get("http://localhost:9000/login")
            .then(res => {
                console.log(res)
            })

        let response = await axios.post("http://localhost:9000/login", {

            data: {
                username: passedUsername,
                password: passedPassword
            },

        })
        .then(res => {
            let contentType = res.headers['content-type'];
            local_account_variable = res.data[0]
            let cart = JSON.parse(res.data[0].cart);
            local_account_variable.cart = cart;
            console.log(local_account_variable.cart.length)
            accountActions("SET_CURRENT_ACCOUNT", res.data[0])
        })

       

    }

    return (

        <div id="login_page_container">

            <h2> CUSTOMER LOGIN </h2>

            <div id="login_page_wrapper">

                <div id="login_container">

                    <div id="login_title_contents">
                        <h3> Registered Customers </h3>
                        <hr />
                        <p> Use the pre-filled credentials OR create your own account. </p>

                    </div>

                    <form id="login_form">

                        <div className="user_input_login">
                            <label> Username </label>
                            <input 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {
                                loginSuccess ?
                                    <span className="form_success"> Successful login! See cart items. </span>:
                                    null
                            }
                            {
                                loginFail ? 
                                    <span className="form_warning"> Wrong login credentials </span>:
                                    null
                            }
                        </div>
                         

                        <div className="user_input_login">
                            <label> Password </label>
                            <input 
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div id="login_button_container">
                            <button 
                                className="item_button login_button"
                                onClick={(e) => login(e, username, password)} 
                            > SIGN IN 
                            </button> 
                        </div>
                        

                    </form>

                </div>

                <div id="new_customer_area">

                    <h3> New Customers </h3> 
                    <hr />
                    <p> Creating an account has many benefits: check out faster,
                        keep more than one address, track orders and more. </p> 

                    <div>
                        <Link to="/create_account"> <button className="item_button"> CREATE AN ACCOUNT </button> </Link> 
                    </div> 


                </div>
            </div>

        </div>
    
    )

}

const mapStateToProps = (state) => {

    return { accounts: state.accounts, currentAccount: state.currentAccount }

}

export default connect(mapStateToProps, { accountActions })(LoginV2)