const initial_accounts = [

    {
        username: "guest",
        password: "password",
        cart: []
    },
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
        case "ADD_ITEM":
            //map out accounts
            const updatedCartAccounts = all_accounts.map(account => {

                //add item to cart of targeted account, map rest normally
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
