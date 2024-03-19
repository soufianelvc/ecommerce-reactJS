import React from 'react'
import CategoryContainer from '../../components/Category/CategoryContainer'
import Pagination from '../../components/Uitily/pagination'
import AllCategoryPageHook from '../../hook/category/AllCategoryPageHook'



const AllCategoryPage = () => {

    const [categoryData,isloading,tError,colors,getPage] = AllCategoryPageHook() ; 

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer categorys={categoryData} isloading={isloading} tError={tError}  colors={colors}/>
      {categoryData.paginationResult.numberOfPages>1?(<Pagination Info={categoryData.paginationResult} getPage={getPage}/>):(null)}
      
    </div>
  )
}

export default AllCategoryPage
