import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get all brands funtion : 
export const getAllBrands = createAsyncThunk('brdSlice/getAllBrands',async(args)=>{

    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/v1/brands?limit=4&page=${args}`)
        // console.log(res.data)
        return res.data ; 
    } catch (error) {
        console.log(error)
        
    }
})

// create new brand funtion : 
export const createBrand = createAsyncThunk('brdSlice/createCategory',async(formData,thunkAPI)=>{
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
          }
        }
    const res = await axios.post("http://127.0.0.1:8000/api/v1/brands", formData,config);
    // console.log(res)
        return res ; 
    
})


const iniState = {
    Brands : [],
    loading: true ,
    err : false 
} ; 

const BrandSlice = createSlice({
    name : "brdSlice",
    initialState : iniState ,
    reducers : {} , 
    extraReducers : (builder)=>{
        builder.addCase(getAllBrands.pending,(state)=>{
            state.loading = true;
            state.err = false ; 
        }).addCase(getAllBrands.fulfilled,(state,action)=>{
            state.loading = false ;
            state.err= false ; 
            state.Brands = action.payload
        }).addCase(getAllBrands.rejected,(state)=>{
            state.loading = false ;
            state.err = true ; 
        })

        builder.addCase(createBrand.pending, (state) => {
            state.loading = false;
            state.err = false;
          }).addCase(createBrand.fulfilled, (state, action) => {
            state.Brands=action.payload; 
            state.loading = true;
            state.err = false;
          }).addCase(createBrand.rejected, (state) => {
            state.loading = false;
            state.err = true;
          });
    }
    
})

export default BrandSlice.reducer ; 
