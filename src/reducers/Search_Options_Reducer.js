export default (all_options = search_options_list, action) => {

    console.log(action.type)
    switch (action.type) {
        case "boxing_gloves":
            return all_options.filter(option => option.type == "boxing_gloves")
            break;
        default:
            return all_options;
            break
            console.log('All returned')
    }


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
        categories: [
            "Title_Boxing",
            "Title_Boxing_MMA",
            "USA_Boxing",
            "Pro_Mex"
        ]
    },
    {
        type: 'boxing_shoes',
        option: 'category',
        categories: [
            "Boxing_Competition_shoes",
            "Youth_shoes",
            "Sparring_shoes"
        ]
    },
    {
        type: 'boxing_shoes',
        option: "brand",
        categories: [
            "Title_shoes",
            "Title_shoes_MMA",
            "USA_shoes"
        ]
    },
    {
        type: 'headgear',
        option: 'category',
        categories: [
            "Boxing_Competition_shoes",
            "Youth_shoes",
            "Sparring_shoes"
        ]
    },
    {
        type: 'headgear',
        option: "brand",
        categories: [
            "Title_shoes",
            "Title_shoes_MMA",
            "USA_shoes"
        ]
    }
    

]