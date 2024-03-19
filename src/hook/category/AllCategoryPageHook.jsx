import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategorys } from "../../redux/reducers/CategorySlice";

const AllCategoryPageHook = () => {

    const dispatch = useDispatch();
    // when first load 
    useEffect(()=>{
        dispatch(getCategorys());
    },[dispatch])
  
        const categoryData = useSelector(state => state.allCategory.category);
        const isloading = useSelector(state => state.allCategory.loading);
        const tError = useSelector(state => state.allCategory.err);
        const colors = ["#FFD3E8","#55CFDF","red","#FF6262","#0034FF","#FFD3E8"] ; 
    //when click pagination 
    const getPage = (page)=>{
        dispatch(getCategorys(page));
      }
  
  return [categoryData,isloading,tError,colors,getPage]; 
}

export default AllCategoryPageHook ;
