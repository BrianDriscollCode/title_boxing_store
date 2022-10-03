import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { accountActions } from "../actions";


const LoginV2 = ( { accountActions, account, currentAccount } ) => {

    const [username, setUsername] = useState('brianR');
    const [password, setPassword] = useState('password');
    const [accountStore, setAccountStore] = useState({});

    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginFail, setLoginFail] = useState(false);
    const [accountFound, setAccountFound] = useState(false);

    const [verificationCode, setVerificationCode] = useState("");
    const [askVerification, setAskVerification] = useState(true);

    const login = async (e, usernameParam, passwordParam) => {
        e.preventDefault();

        let response = await axios.post("http://localhost:9000/loginV2", {

            data: {
                username: usernameParam,
                password: passwordParam
            },

        })
        .then(res => {

            if (res.data.length < 1) {
                console.log('No account')
                setLoginFail(true)
            } else {
                setLoginFail(false)
                setAccountFound(true)
                console.log("found account")
                let local_account_variable = res.data[0]
                let cart = JSON.parse(res.data[0].cart);
                local_account_variable.cart = cart;
                setAccountStore(local_account_variable)

                console.log(local_account_variable.phone_number)
                //begin verification/send text code
                // let start_verification = axios.post("http://localhost:9000/vonage_verify/request", {
                //     data: {
                //         number: local_account_variable.phone_number
                //     }
                // })
            }
        })

    }

    const phone_verification = async (e, codeParam) => {

        e.preventDefault();

        
        let verify_check = await axios.post("http://localhost:9000/vonage_verify/check", {
            data: {
                code: codeParam
            }
        })
        .then(res => {
            console.log(res, " -verify_check")

            if (res.data.status === "0") {
                console.log("Success")
                accountActions("SET_CURRENT_ACCOUNT", accountStore)
                setLoginSuccess(true)
                setAccountFound(false)
            } else {
                console.log("error")
                setLoginFail(true)
                setAccountFound(false)
                setLoginSuccess(false)
            }
        })

    }

    console.log(accountStore, " -account store")

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
                                accountFound ?
                                    <span className="form_success"> Account Found. Verification Code Sent </span>:
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
                                onClick={(e) => {login(e, username, password)}}
                            > SIGN IN 
                            </button> 
                        </div>

                        <div style={
                                accountFound ? {opacity: 1, marginTop: '2em'} : {opacity: 0}}>
                            <label> Code </label>
                            <input
                                type="verification_code"
                                name="verification_code"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}
                                style={{width: "100px"}}
                            />
                            <button 
                                style={{ marginLeft: '1em'}}
                                onClick={(e) => phone_verification(e, verificationCode)}
                            > Submit Code </button>
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