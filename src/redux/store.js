import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filter from "../redux/slices/filters-slice";
import cart from "../redux/slices/cart-slice"
import { productsAPI} from "../components/services/product-service";



const rootReducer = combineReducers({
    [productsAPI.reducerPath]: productsAPI.reducer,
    filter,
    cart
});
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlweare) =>
    getDefaultMiddlweare().concat(productsAPI.middleware)
})

export default store