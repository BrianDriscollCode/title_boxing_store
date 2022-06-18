const initial_accounts = [

    {
        username: "brianR",
        password: "password",
        cart: []

    },
    {
        username: "MichaelA",
        password: "password123",
        cart: []

    }

]


export default (all_accounts = initial_accounts, action) => {

    switch (action.type) {
        case "ADD_ACCOUNT":
            return [...all_accounts, action.payload]
            break;
        case "GET_ACCOUNT": 
            console.log([...all_accounts])
            console.log(action.payload)
            const account = all_accounts.filter(
                
                account => account.username == action.payload.username
                
            )
            console.log(account)
            return account;
            break;
        case "ADD_ITEM":
            console.log([...all_accounts])
            console.log(action.payload)
            
            // const editableAccount = all_accounts.filter(
                
            //     account => account.username == action.payload.username
                
            // )
            // console.log(editableAccount)

            // return {...editableAccount, cart: action.payload}

            const updatedCartAccounts = all_accounts.map(account => {

                console.log(account.cart)

                if (account.username == action.payload.username) {

                    return {...account, cart: [...account.cart, action.payload.cart]}

                } else {

                    return {...account}

                }

            })

            return updatedCartAccounts;

        default: 
            return [...all_accounts]

    }




}
