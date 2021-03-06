import { v4 as uuidv4 } from 'uuid';

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
        case "REMOVE_ITEM":
            
            //map out accounts
            const removalCartAccounts = all_accounts.map(account => {

                //on targeted account, filter out cart item with matching uniqueId
                if (account.username == action.payload.username) {

                    return {...account, 
                        cart: account.cart.filter(item => item.uniqueId != action.payload.uniqueId)}

                } else {

                    return {...account}
                }

            })
            
            return removalCartAccounts;
        case "REMOVE_ALL_ITEMS":
            

            
            //map out accounts
            const removalAllCartAccounts = all_accounts.map(account => {
               
                //on targeted account, filter out cart item with matching uniqueId
                if (account.username == action.payload.username) {

                    return {...account, 
                        cart: account.cart.filter(item => item.uniqueId == "NO ID EQUALS THIS")}

                } else {

                    return {...account}
                }

            })

            console.log('remove all items ran')
            
            return removalAllCartAccounts;
        default: 
            return [...all_accounts]

    }




}

const initial_accounts = [

    {
        username: "guest",
        password: "password",
        cart: [
            {
                type: "boxing_glove", 
                id: 1,
                name: "Title Boxing Bag Mesh Gloves Max",
                category: "Boxing_Competition_Gloves",
                price: 45.99, 
                brand: 'Title_Boxing',
                quantity: 10, 
                mini_image: "/images/products/boxing_gloves/0001/single_display/title_boxing_glove_mini_0001.jpg",
                display_images: [
        
                    '/images/products/boxing_gloves/0001/title_boxing_glove_MAIN_0001.jpg',
                    '/images/products/boxing_gloves/0001/title_boxing_glove_model_0_0001.jpg',
                    '/images/products/boxing_gloves/0001/title_boxing_glove_model_1_0001.jpg',
                    '/images/products/boxing_gloves/0001/title_boxing_glove_single_0001.jpg'
        
                ],
                details: [
                    'Exclusive Gel Enforced Lining and multi-layered foam padding',
                    'Gel lining delivers an unbeatable layer of custom form fit and impact resistance',
                    'All-leather outer with special hand compartment lining for cool, dry and comfortable wear',
                    'Wraparound adjustable wrist strap with D-ring and hook-and-loop closure'
                ],
                info: "There is a new champion in the world of super bag gloves! Now with exclusive Gel Enforced Lining and multi-layered foam padding for the ultimate in style, performance, protection and power. Gel lining delivers an unbeatable layer of custom form fit and impact resistance. Friends, once you try these you will not go back to regular bag gloves again. All-leather outer with special hand compartment lining for cool, dry and comfortable wear. Awesome wraparound adjustable wrist strap with D-ring and hook-and-loop closure for secure fit. Weight: Approx. 16 oz.",
                uniqueId: "e4d35668-f324-44a2-8555-beef940ef90b"
            },
            {    type: "shoes", 
                id: 13,
                name: "Title Boxing Shoes White",
                category: "Sparring_Shoes",
                price: 121.99, 
                brand: 'Title_Boxing',
                quantity: 10, 
                mini_image: "/images/products/boxing_shoes/0005/single_display/title_black_tall_mini_0005.jpg",
                display_images: [

                    "/images/products/boxing_shoes/0005/title_black_tall_MAIN_0005.jpg",
                    "/images/products/boxing_shoes/0005/title_black_tall_model_0_0005.jpg",
                    "/images/products/boxing_shoes/0005/title_black_tall_side_0005.jpg",

                ],
                details: [
                    'Exclusive Gel Enforced Lining and multi-layered foam padding',
                    'Gel lining delivers an unbeatable layer of custom form fit and impact resistance',
                    'All-leather outer with special hand compartment lining for cool, dry and comfortable wear',
                    'Wraparound adjustable wrist strap with D-ring and hook-and-loop closure'
                ],
                info: "There is a new champion in the world of super bag gloves! Now with exclusive Gel Enforced Lining and multi-layered foam padding for the ultimate in style, performance, protection and power. Gel lining delivers an unbeatable layer of custom form fit and impact resistance. Friends, once you try these you will not go back to regular bag gloves again. All-leather outer with special hand compartment lining for cool, dry and comfortable wear. Awesome wraparound adjustable wrist strap with D-ring and hook-and-loop closure for secure fit. Weight: Approx. 16 oz.",
                uniqueId: "97d9e39a-031b-4085-ade4-9850fb084b83"
            },
        ]
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
