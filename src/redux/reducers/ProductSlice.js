import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createProduct = createAsyncThunk('prdSlc/createProduct',async(formData)=>{
  const config = {
    headers: {
        "Content-Type": "multipart/form-data",
      }
    }
  const res =  await axios.post("http://127.0.0.1:8000/api/v1/products",formData,config)
  return res;


})
const iniState  = {
  Products : [],
  loading: true ,
  error : false 

}
const ProductSlice = createSlice({
  name : "prdSlc",
  initialState:iniState ,
  reducers : {},

  extraReducers:(builder)=>{
    builder.addCase(createProduct.pending,(state)=>{
      state.loading=true ;
      state.error= false ; 
    }).addCase(createProduct.fulfilled,(state,action)=>{
      state.loading = false ;
      state.error = false ;
      state.Products = action.payload ;
    }).addCase(createProduct.rejected,(state)=>{
      state.loading=false ;
      state.error= true ;  ; 
    })


  }
})

export default ProductSlice.reducer;

