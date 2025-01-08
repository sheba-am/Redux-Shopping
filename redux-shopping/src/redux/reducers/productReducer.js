import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload}; //add the payload to the current products 
        default:
            return state;
    }


}