export const chooseProduct = (productType) => {

    return {

        type: productType

    }

}

export const optionsOutput = (optionType) => {

    return {

        type: optionType

    }

}

export const accountActions = (setting, info) => {



    return {

        type: setting,
        payload: info

    }


}

export const currentAccount = (setting, info) => {

    return {

        type: setting,
        payload: info

    }

}