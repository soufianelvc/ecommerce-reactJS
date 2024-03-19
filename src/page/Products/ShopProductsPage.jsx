import React from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader'
import SearchCountResult from '../../components/Uitily/SearchCountResult'
import { Col, Container, Row } from 'react-bootstrap'
import SideFilter from '../../components/Uitily/SideFilter'
import CardProductsContainer from '../../components/products/CardProductsContainer'
// import Pagination from '../../components/Uitily/pagination'

const ShopProductsPage = () => {
  return (
    <div style={{minHeight:"670px"}}>
        <CategoryHeader/>
       <Container>
       <SearchCountResult title="444 product ..." />
       
      
       <Row className='d-flex flex-row '>
            <Col sm="2" xs="2" md="1" className='d-flex'>
                <SideFilter/>
            </Col>
            <Col sm="10" xs="10" md="11" className='d-block'>
                <CardProductsContainer title="" btntitle=""/>
                {/* <Pagination/> */}
                
            </Col>
            
       </Row>
       </Container>

      ShopProductsPage 
    </div>
  )
}

export default ShopProductsPage
