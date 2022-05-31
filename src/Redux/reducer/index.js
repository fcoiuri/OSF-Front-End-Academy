import { handleCart } from "./handleCart";
import { combineReducers } from "redux";
import { handleWishlist } from "./handleWishlist";

export const rootReducers = combineReducers({
    handleCart,
    handleWishlist,
})
