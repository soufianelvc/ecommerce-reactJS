import React from 'react'
import Pagination from '../../components/Uitily/pagination';
import BrandContainer from '../../components/Brand/BrandContainer';
import AllBrandPageHook from '../../hook/Brand/AllBrandPageHook';

const AllBrand = () => {
   const [BrandData,isloading,tError,getPage] = AllBrandPageHook();
  return (
   
    <div style={{ minHeight: "670px" }}>
      <BrandContainer brands={BrandData} isloading={isloading} tError={tError}/>

      {BrandData?(<Pagination Info={BrandData.paginationResult} getPage={getPage}/>):(null)}
    </div>

  )
}

export default AllBrand ; 
