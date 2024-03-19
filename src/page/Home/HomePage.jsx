import React from 'react'
import Slider from '../../components/Home/Slider'
import HomeCategory from '../../components/Home/HomeCategory'
import CardProductsContainer from '../../components/products/CardProductsContainer'
import DiscountSection from '../../components/Home/DiscountSection'
import BrandFeatured from '../../components/Brand/BrandFeatured'


const HomePage = () => {
  return (
    <div className='font' style={{minHeight:'670px'}}>

        <Slider className="text-danger"/>
        <HomeCategory className="m-5"/>
        <CardProductsContainer title=" best-selling" btntitle="more.." pathText="/products"/>
        <DiscountSection/>
        <CardProductsContainer title="latest styles" btntitle="more.." pathText="/products"/>
        <BrandFeatured title="famous Brand" btntitle="more.."/>

    </div>
  )
}

export default HomePage
