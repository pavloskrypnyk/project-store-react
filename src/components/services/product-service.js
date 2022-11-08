import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import baseUrl from "../../constants/urls";


export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (build) => ({
        fetchAllProducts: build.query({
            query: ({curentPage, categoryQuery, brandsQuery, searchQuery, priceGteQuery, priceLteQuery, ratingGteQuery, ratingLteQuery}) => ({
                url: `/products?_page=${curentPage}&_limit=9${categoryQuery}${brandsQuery}${searchQuery}${priceGteQuery}${priceLteQuery}${ratingGteQuery}${ratingLteQuery}`,
                
            }),
            transformResponse(products, meta) {
                return { products, totalPages: Math.ceil(Number(meta.response.headers.get('X-Total-Count')) / 9) }
              }
        }),     
        fetchAllCategory: build.query({
            query: () => ({
               url: `/categories` 
            })
        }),
        fetchAllBrands: build.query({
            query: () => ({
                url: `/brands`
            })
        })
    })
})

