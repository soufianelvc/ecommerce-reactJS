import React from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader';
import { Container } from 'react-bootstrap';
import ProductDetalis from '../../components/products/ProductDetalis';
import ReteContainer from '../../components/Rete/ReteContainer';
import CardProductsContainer from '../../components/products/CardProductsContainer';



const ProductDetalaisPage = () => {
  return (
    <div style={{minHeight:"670px"}}>
        <CategoryHeader/>
        <Container>
               <ProductDetalis/>
               <ReteContainer/>
               <CardProductsContainer title="Products you like it "/>
        </Container> 
    </div>
  )
}

export default ProductDetalaisPage ; 
