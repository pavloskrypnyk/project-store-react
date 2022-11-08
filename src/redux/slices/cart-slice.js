import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
    openCart: false,
    totalPrice: 0,
    totalCount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setOpenCart(state, action){
            state.openCart = action.payload
        },
        addProductToCart(state, action){
            const findProduct = state.cart.find(obj => obj.id === action.payload.id);

            if(findProduct){
                findProduct.count++;
            } else {
                state.cart.push({
                    ...action.payload,
                    count: 1,  
            });
            };
            state.totalCount = state.cart.reduce((sum, item)=> sum + item.count, 0);
            state.totalPrice = state.cart.reduce((sum, item)=> {
                return item.count * item.price + sum
            }, 0)
        },
        removeProductFromCart(state, action){
            const findProduct = state.cart.find(obj => obj.id === action.payload);
            state.totalPrice -= findProduct.price * findProduct.count;
            state.cart = state.cart.filter((obj) => obj.id !== action.payload);
            state.totalCount -= findProduct.count; 
        },
        minusCount(state, action){
            const findProduct = state.cart.find(obj => obj.id === action.payload);
            if(findProduct){
                findProduct.count--
            }
           state.totalPrice -=findProduct.price;
           state.totalCount -= 1;
        },
    }
});

export const {setOpenCart, addProductToCart, removeProductFromCart, minusCount} = cartSlice.actions;

export default cartSlice.reducer;