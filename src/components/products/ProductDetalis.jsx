import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'

const ProductDetalis = () => {
  return (
    <Row className='my-3 d-flex '>
        <Col lg="4">
            <ProductGallery />
        </Col>
        <Col lg="8">
           <ProductText/>
        </Col>
    </Row>
  )
}

export default ProductDetalis
