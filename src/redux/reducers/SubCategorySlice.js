import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createSubCategory = createAsyncThunk('SubCatSLC/createCategory',async(dataa,thunkAPI)=>{

    const res = await axios.post("http://127.0.0.1:8000/api/v1/subcategories", dataa);
    
        return res ; 
    
})

export const getSubCategorys = createAsyncThunk('SubCatSLC/getSubCategorys',async(code)=>{
  const res = await axios.get(`http://127.0.0.1:8000/api/v1/categories/${code}/subcategories`);
  console.log(res.data)

      return res ; 
})

const inistate = {
    Subcategory: [],
    loading : true ,
    err : false 

}
const SubCategorySlice = createSlice({
    name : "SubCatSLC",
    initialState : inistate ,
    reducers : {

    },
    extraReducers : (builder)=>{
        builder.addCase(createSubCategory.pending, (state) => {
            state.loading = false;
            state.err = false;
          }).addCase(createSubCategory.fulfilled, (state, action) => {
            state.Subcategory=action.payload; 
            state.loading = true;
            state.err = false;
          }).addCase(createSubCategory.rejected, (state) => {
            state.loading = false;
            state.err = true;
          });

          builder.addCase(getSubCategorys.pending,(state)=>{
              state.loading = true;
              state.err = false ; 
          }).addCase(getSubCategorys.fulfilled,(state,action)=>{
              state.loading = false ;
              state.err= false ; 
              state.Subcategory = action.payload
          }).addCase(getSubCategorys.rejected,(state)=>{
              state.loading = false ;
              state.err = true ; 
          })



        }
})

export default SubCategorySlice.reducer;
