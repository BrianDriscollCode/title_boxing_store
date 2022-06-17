import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom" 
import { connect } from "react-redux"
import { accountActions } from "../actions";

const Login = ( { accounts, accountActions, currentAccount } ) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginSuccess, setLoginSuccess] = useState(false);
    const [usernameWrong, setUsernameWrong] = useState(false);
    const [passwordWrong, setPasswordWrong] = useState(false);

    useEffect(() => {

        console.log(currentAccount)

    }, [username])

    const login = (e) => {

        e.preventDefault();
        const currentAccountFilter = accounts.filter(

            account => account.username.toLowerCase() == username.toLowerCase() &&
                       account.password == password

        )

        console.log(currentAccountFilter[0])

        switch (currentAccountFilter[0]) {

            case currentAccountFilter[0]?.username == username && currentAccountFilter[0]?.password == password:

                 console.log("success")
                 accountActions("SET_CURRENT_ACCOUNT", currentAccountFilter[0])
                 setLoginSuccess(true)
                 setUsernameWrong(false)
                 setPasswordWrong(false)
                 break;
            
            case currentAccountFilter[0]?.username == username &&
                 currentAccountFilter[0]?.password != password:

                 console.log("unsuccessful - wrong pass")
                 setLoginSuccess(false)
                 setUsernameWrong(false)
                 setPasswordWrong(true)
                 break;
                

            case currentAccountFilter[0]?.username != username &&
                 currentAccountFilter[0]?.password == password:

                 console.log("unsuccessful - wrong user")
                 setLoginSuccess(false)
                 setUsernameWrong(true)
                 setPasswordWrong(false)
                 break;

            case currentAccountFilter[0]?.username != username &&
                 currentAccountFilter[0]?.password != password:

                 console.log("unsuccessful - wrong all")
                 setLoginSuccess(false)
                 setUsernameWrong(true)
                 setPasswordWrong(true)
                 break;

        }

    }

    return (

        <div id="login_page_container">

            <h2> CUSTOMER LOGIN </h2>

            <div id="login_page_wrapper">

                <div id="login_container">

                    <div>
                        <h3> Registered Customers </h3>
                        <hr />
                        <p> If you have an account, sign in with your email address </p>

                    </div>

                    <form id="login_form">

                        <div className="user_input_login">
                            <label> Username </label>
                            <input 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {

                                usernameWrong ?
                                    <span className="form_warning"> username does not exist </span>:
                                    null

                            }
                            {
                                loginSuccess >
                                    <span className="form_success"> Successful login! </span>
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

                        <div>
                            <button 
                                className="item_button login_button"
                                onClick={(e) => login(e)} 
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

export default connect(mapStateToProps, { accountActions })(Login)