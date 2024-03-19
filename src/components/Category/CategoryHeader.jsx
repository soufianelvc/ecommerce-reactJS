import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

const CategoryHeader = () => {
  return (
    <div className="cat-header">
    <Container>
      <Row>
        <Col className="d-flex justify-content-start py-2 flex-wrap">
          <div className="cat-text-header ">All</div>
          <div className="cat-text-header">electronics </div>
          <div className="cat-text-header">clothes </div>
          <div className="cat-text-header"> Electricity </div>
          <div className="cat-text-header"> Sale </div>
          <div className="cat-text-header"> Sale </div>
          <div className="cat-text-header"> Sale </div>
          <div className="cat-text-header"> Sale </div>
          <div className="cat-text-header"> Sale </div>
          <div className="cat-text-header"> More </div>
        </Col>
      </Row>
    </Container>
  </div>

  )
}

export default CategoryHeader
