import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import useGetData from "../../hooks/useGetData";
import axios from "axios";

export const getCategorys = createAsyncThunk('CatSLC/getCategory',async(args)=>{
   
    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/v1/categories?limit=4&page=${args}`);
        return res.data ; 
    } catch (error) {
        console.log(error)
    }
        // return useGetData("http://127.0.0.1:8000/api/v1/categories")
     }
    )
export const createCategory = createAsyncThunk('CatSLC/createCategory',async(formData,thunkAPI)=>{
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
          }
        }
    const res = await axios.post("http://127.0.0.1:8000/api/v1/categories", formData,config);
    console.log(res)
    
        return res ; 
    
})


const inistate = {
    category: [],
    loading : true ,
    err : false 

}
const CategorySlice = createSlice({
    name : "CatSLC",
    initialState : inistate ,
    reducers : {

    },
    extraReducers : (builder)=>{
          builder.addCase(getCategorys.pending,(state)  =>  {
            state.loading = true ;
            state.err = false ; 
         }).addCase(getCategorys.fulfilled,(state,action)=>{
            state.category=action.payload;
            state.loading = false ; 
            state.err = false ; 
        }).addCase(getCategorys.rejected,(state)=>{
            console.log("error");
            state.loading = false ; 
            state.err = true ; 
        })

 
        builder.addCase(createCategory.pending, (state) => {
            state.loading = false;
            state.err = false;
          }).addCase(createCategory.fulfilled, (state, action) => {
            state.category=action.payload; 
            state.loading = true;
            state.err = false;
          }).addCase(createCategory.rejected, (state) => {
            state.loading = false;
            state.err = true;
          });



        }
})

export default CategorySlice.reducer;
