
import { useDispatch, useSelector } from 'react-redux';
import { getCategorys } from '../../redux/reducers/CategorySlice';
import { useEffect } from 'react';

const HomeCategoryHook = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCategorys("1"));
        
  
    },[dispatch])
        // get last category state from redux 
        const categoryData = useSelector(state => state.allCategory.category);
        // get last loading state from redux 
        const isloading = useSelector(state => state.allCategory.loading);
        // get test error from redux 
        const tError = useSelector(state => state.allCategory.err);
        // handleColors 
        const colors = ["#FFD3E8","#55CFDF","red","#FF6262","#0034FF","#FFD3E8"] ; 
  return [categoryData,isloading,tError,colors]; 
}

export default HomeCategoryHook ; 
