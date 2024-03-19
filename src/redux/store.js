import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./reducers/CategorySlice";
import BrandSlice from "./reducers/BrandSlice";
import SubCategorySlice from "./reducers/SubCategorySlice";
import ProductSlice from "./reducers/ProductSlice";


const store = configureStore({
    reducer : {
        allCategory : CategorySlice,
        allBrand : BrandSlice,
        subCat : SubCategorySlice,
        products : ProductSlice
        
         
    }
})

export default store ; 