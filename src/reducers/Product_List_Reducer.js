export default (all_products = initial_product_list, action) => {

        console.log(action.type)
        switch (action.type) {
            case "boxing_gloves":
                return all_products.filter(product => 
                    
                    product.type === "boxing_glove"
                
                )
                break;
            case "punching_bag":
                return all_products.filter(product => 
                    
                    product.type === "punching_bag"
                
                )
                console.log('punching_bag returned')
                break;
            case "shoes":
                return all_products.filter(product => 
                    
                    product.type === "shoes"
                
                )
                console.log('shoes returned')
                break
            default:
                return [...all_products];
                console.log('All returned')
        }


}

const initial_product_list = [

    {   
        type: "boxing_glove", 
        name: "Title Boxing Bag Mesh Gloves Max",
        category: "Boxing_Competition_Gloves",
        price: 45.99, 
        brand: 'Title_Boxing',
        quantity: 10, 
        mini_image: "/images/products/boxing_gloves/0001/single_display/title_boxing_glove_mini_0001.jpg",
        display_images: [

            '/images/products/0001/title_boxing_glove_MAIN_0001.jpg',
            '/images/products/0001/title_boxing_glove_model_0_0001.jpg',
            '/images/products/0001/title_boxing_glove_model_1_0001.jpg',
            '/images/products/0001/title_boxing_glove_single_0001.jpg'

        ]
    },
    {   
        type: "boxing_glove", 
        name: "Title Boxing Work Gloves LESS",
        category: "Youth_Gloves",
        price: 59.99, 
        brand: 'Title_Boxing',
        quantity: 10, 
        mini_image: "/images/products/boxing_gloves/0002/single_display/title_boxing_glove_mini_0002.jpg",
        display_images: [

            '/images/products/0002/title_boxing_glove_MAIN_0002.jpg',
            '/images/products/0002/title_boxing_glove_model_0_0002.jpg',
            '/images/products/0002/title_boxing_glove_side_0002.jpg',
            '/images/products/0002/title_boxing_glove_single_0002.jpg'

        ]
    },
    {   
        type: "boxing_glove", 
        name: "Title Boxing Sparing Gloves 2.0",
        category: "Boxing_Competition_Gloves",
        price: 89.99, 
        brand: 'Title_Boxing',
        quantity: 10, 
        mini_image: "/images/products/boxing_gloves/0003/single_display/title_boxing_glove_mini_0003.jpg",
        display_images: [

            '/images/products/0003/title_boxing_glove_MAIN_0003.jpg',
            '/images/products/0003/title_boxing_glove_model_0_0003.jpg',
            '/images/products/0003/title_boxing_glove_side_0003.jpg',
            '/images/products/0003/title_boxing_glove_side_single_0003.jpg'

        ]
    },
    {
        type: "boxing_glove", 
        name: "Title Boxing leather Gloves 2.0",
        category: "Sparring_Gloves",
        price: 119.99, 
        brand: 'Title_Boxing',
        quantity: 10, 
        mini_image: "/images/products/boxing_gloves/0004/single_display/title_boxing_glove_leather_training_mini_0004.jpg",
        display_images: [

            'images/products/0004/title_boxing_glove_leather_training_MAIN_0004.jpg',
            'images/products/0004/title_boxing_glove_leather_training_model_0_0004.jpg',
            'images/products/0004/title_boxing_glove_leather_training_model_2_0004.jpg',
            'images/products/0004/title_boxing_glove_leather_training_side_0004.jpg'

        ]
    },
    {
        type: "boxing_glove", 
        name: "Pro Mex Sparring Gloves",
        category: "Sparring_Gloves",
        price: 89.99, 
        brand: 'Pro_Mex',
        quantity: 10, 
        mini_image: "/images/products/boxing_gloves/0005/single_display/pro_mex_boxing_gloves_tie_mini_0005.jpg",
        display_images: [

            'images/products/0005/pro_mex_boxing_gloves_tie_MAIN_0005.jpg',
            'images/products/0005/pro_mex_boxing_gloves_tie_close_0005.jpg',
            'images/products/0005/pro_mex_boxing_gloves_tie_model_0_0005.jpg',
            'images/products/0005/pro_mex_boxing_gloves_tie_side_0005.jpg',

        ]
    },
    {
        type: "boxing_glove", 
        name: "Title Boxing MMA Bag Gloves",
        category: "MMA_Gloves",
        price: 39.99, 
        brand: 'Title_Boxing_MMA',
        quantity: 10, 
        mini_image: "/images/products/boxing_gloves/0006/single_display/pro_mex_boxing_gloves_tie_mini_0006.jpg",
        display_images: [

            'images/products/0006/pro_mex_boxing_gloves_tie_MAIN_0006.jpg',
            'images/products/0006/pro_mex_boxing_gloves_tie_single_0006.jpg',
            'images/products/0006/pro_mex_boxing_gloves_tie_single_front_0006.jpg',
            'images/products/0006/pro_mex_boxing_gloves_tie_single_model_0_0006.jpg',

        ]
    },
    {
        type: "boxing_glove", 
        name: "Title Boxing MMA Gloves",
        category: "MMA_Gloves",
        price: 43.99, 
        brand: 'Title_Boxing_MMA',
        quantity: 10, 
        mini_image: "/images/products/boxing_gloves/0007/single_display/pro_mex_boxing_gloves_tie_mini_0007.jpg",
        display_images: [

            'images/products/0007/pro_mex_boxing_gloves_tie_MAIN_0007.jpg',
            'images/products/0005/pro_mex_boxing_gloves_tie_model_1_0007.jpg',
            'images/products/0005/pro_mex_boxing_gloves_tie_model_0_0007.jpg',
            'images/products/0005/pro_mex_boxing_gloves_tie_side_0007.jpg',

        ]
    },
    {
        type: "boxing_glove", 
        name: "USA Boxing Gloves",
        category: "Boxing_competition_gloves",
        price: 63.99, 
        brand: 'USA_Boxing',
        quantity: 10, 
        mini_image: "/images/products/boxing_gloves/0008/single_display/adidas_boxing_gloves_tie_mini_0008.jpg",
        display_images: [

            'images/products/0008/adidas_boxing_gloves_MAIN_0008.jpg',
            'images/products/0008/adidas_boxing_gloves_side_0008.jpg',
            'images/products/0008/adidas_boxing_gloves_single_0008.jpg',

        ]
    },
    {
        type: "shoes", 
        name: "Title Boxing Shoes White",
        category: "competition_shoes",
        price: 63.99, 
        brand: 'title_boxing',
        quantity: 10, 
        mini_image: "/images/products/boxing_shoes/0001/single_display/title_shoes_white_tall_mini_0001.jpg",
        display_images: [

            "/images/products/boxing_shoes/0001/title_shoes_white_tall_MAIN_0001.jpg",
            "/images/products/boxing_shoes/0001/title_shoes_white_tall_model_0_0001.jpg",
            "/images/products/boxing_shoes/0001/title_shoes_white_tall_model_1_0001.jpg",
            "/images/products/boxing_shoes/0001/title_shoes_white_tall_single_0001.jpg",

        ]
    },
    {
        type: "shoes", 
        name: "Pro Mex Boxing Shoes",
        category: "competition_shoes",
        price: 86.99, 
        brand: 'pro_mex',
        quantity: 10, 
        mini_image: "/images/products/boxing_shoes/0002/single_display/pro_mex_black_tall_mini_0002.jpg",
        display_images: [

            "/images/products/boxing_shoes/0002/pro_mex_black_tall_MAIN_0002.jpg",
            "/images/products/boxing_shoes/0002/pro_mex_black_tall_model_0_0002.jpg",
            "/images/products/boxing_shoes/0002/pro_mex_black_tall_model_1_0002.jpg",
            "/images/products/boxing_shoes/0002/pro_mex_black_tall_side_0002.jpg",

        ]
    },
    {
        type: "shoes", 
        name: "Adidas Boxing Shoes Tall Black",
        category: "competition_shoes",
        price: 86.99, 
        brand: 'Adidas',
        quantity: 10, 
        mini_image: "/images/products/boxing_shoes/0003/single_display/adidas_black_tall_mini_0003.jpg",
        display_images: [

            "/images/products/boxing_shoes/0003/adidas_black_tall_MAIN_0003.jpg",
            "/images/products/boxing_shoes/0003/adidas_black_tall_back_0003.jpg",
            "/images/products/boxing_shoes/0003/adidas_black_tall_side_0003.jpg",

        ]
    },
    {
        type: "shoes", 
        name: "Title Boxing Shoes White",
        category: "competition_shoes",
        price: 121.99, 
        brand: 'title_boxing',
        quantity: 10, 
        mini_image: "/images/products/boxing_shoes/0004/single_display/title_green_tall_mini_0004.jpg",
        display_images: [

            "/images/products/boxing_shoes/0004/title_green_tall_MAIN_0004.jpg",
            "/images/products/boxing_shoes/0004/title_green_tall_back_0004.jpg",
            "/images/products/boxing_shoes/0004/title_green_tall_model_0_0004.jpg",

        ]
    },
    {
        type: "shoes", 
        name: "Title Boxing Shoes White",
        category: "competition_shoes",
        price: 121.99, 
        brand: 'title_boxing',
        quantity: 10, 
        mini_image: "/images/products/boxing_shoes/0005/single_display/title_black_tall_mini_0005.jpg",
        display_images: [

            "/images/products/boxing_shoes/0005/title_black_tall_MAIN_0005.jpg",
            "/images/products/boxing_shoes/0005/title_black_tall_model_0_0005.jpg",
            "/images/products/boxing_shoes/0005/title_black_tall_side_0005.jpg",

        ]
    },
    
    




]