
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { getAllBrands } from '../../redux/reducers/BrandSlice';

const HomeCategoryHook = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllBrands("1"));
        
  
    },[dispatch])
        // get last brand state from redux 
        const BrandsData = useSelector(state => state.allBrand.Brands);
        // get last loading state from redux 
        const isloading = useSelector(state => state.allBrand.loading);
        // get test error from redux 
        const tError = useSelector(state => state.allBrand.err);
  return [BrandsData,isloading,tError]; 
}

export default HomeCategoryHook ; 
