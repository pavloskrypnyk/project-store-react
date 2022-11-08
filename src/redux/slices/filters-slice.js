import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    filters: {
        search: '',
        choseCategory: [],
        choseBrands: [],
        brands: [],
        curentPage: 1,
        priceMin: "0",
        priceMax: '85000',
        ratingMin: "0",
        ratingMax: "5",
    } 
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers:{
        setChoseCategory(state, action) {
            state.filters.choseCategory = action.payload;
        },
        setChoseBrands(state, action){
            state.filters.choseBrands = action.payload;
        },
        setPageCount(state, action) {
            state.filters.curentPage = action.payload;
        },
        setFilters(state, action) {
            state.filters.curentPage = Number(action.payload.curentPage);
            state.filters.choseCategory = action.payload.choseCategory;
        },
        setPriceMin(state, action) {
            state.filters.priceMin = action.payload;
        },
        setPriceMax(state, action){
            state.filters.priceMax = action.payload;
        },
        setSearch(state, action){
            state.filters.search = action.payload;
        },
        setRatingMin(state, action){
            state.filters.ratingMin = action.payload;
        },
        setRatingMax(state, action){
            state.filters.ratingMax = action.payload;
        },
        clearAllFilters(state){
            state.filters = initialState.filters
        } 
    }
});

export const { 
    setCategories, 
    setBrands, 
    setChoseCategory, 
    setChoseBrands, 
    setPageCount, 
    setPriceMax, 
    setPriceMin, 
    setRatingMin, 
    setRatingMax, 
    setSearch, 
    clearAllFilters 
    } = filtersSlice.actions;

export default filtersSlice.reducer;

