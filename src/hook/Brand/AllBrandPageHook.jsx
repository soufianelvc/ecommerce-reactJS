import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBrands } from "../../redux/reducers/BrandSlice";

const AllBrandPageHook = () => {

    const dispatch = useDispatch();
    // when first load 
    useEffect(()=>{
        dispatch(getAllBrands());
    },[dispatch])
  
        const BrandData = useSelector(state => state.allBrand.Brands);
        const isloading = useSelector(state => state.allBrand.loading);
        const tError = useSelector(state => state.allBrand.err);
    //when click pagination 
    const getPage = (page)=>{
        dispatch(getAllBrands(page));
      }
  
  return [BrandData,isloading,tError,getPage]; 
}

export default AllBrandPageHook ;
