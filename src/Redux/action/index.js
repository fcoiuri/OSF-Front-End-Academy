export const addToCart = product => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

export const deleteToCart = product => {
    return{
        type: "DELETEITEM",
        payload: product
    }
}

export const addToWishlist = product => {
    return{
        type: "ADDWISHLIST",
        payload: product
    }
}
export const deleteToWishlist = product => {
    return{
        type: "DELETEWISHLIST",
        payload: product
    }
}