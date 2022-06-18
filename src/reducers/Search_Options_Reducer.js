export default (all_options = search_options_list, action) => {

    
            return all_options;
            console.log('All returned')
    }



const search_options_list = [

    {
        type: 'boxing_gloves',
        option: 'category',
        categories: [
            "All",
            "Boxing_Competition_Gloves",
            "Youth_Gloves",
            "Sparring_Gloves",
            "MMA_Gloves"
        ]
    },
    {
        type: 'boxing_gloves',
        option: "brand",
        brands: [
            "Title_Boxing",
            "Title_Boxing_MMA",
            "USA_Boxing",
            "Pro_Mex"
        ],        
    },
    {
        type: 'shoes',
        option: 'category',
        categories: [
            "All",
            "Boxing_Competition_Shoes",
            "Youth_Shoes",
            "Sparring_Shoes"
        ]
    },
    {
        type: 'shoes',
        option: "brand",
        brands: [
            "Title_Boxing",
            "Pro_Mex",
            "Adidas"
        ]
    },
    {
        type: 'headgear',
        option: 'category',
        categories: [
            "All",
            "Sparring_Headgear",
            "Competition_Headgear"
        ]
    },
    {
        type: 'headgear',
        option: "brand",
        brands: [
            "Title_Boxing",
            "Fighting",
            "Viper"
        ]
    }
    

]