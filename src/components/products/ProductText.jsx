import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ProductText = () => {
  return (
    <div>
    <Row className="mt-2">
      <div className="cat-text">Electronics :</div>
    </Row>
    <Row>
      <Col md="8">
        <div className="cat-title d-inline">
        iPhone XR with 128 GB memory and supports 4G LTE technology with the Face application
           Time(Product) Red
          <div className="cat-rate d-inline mx-3">4.5</div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col md="8" className="mt-4">
        <div className="cat-text d-inline">Brand :</div>
        <div className="barnd-text d-inline mx-1">iPhone  </div>
      </Col>
    </Row>
    <Row>
      <Col md="8" className="mt-1 d-flex">
        <div
          className="color ms-2 border"
          style={{ backgroundColor: "#E52C2C" }}></div>
        <div
          className="color ms-2 border "
          style={{ backgroundColor: "white" }}></div>
        <div
          className="color ms-2 border"
          style={{ backgroundColor: "black" }}></div>
      </Col>
    </Row>

    <Row className="mt-4">
      <div className="cat-text">Specifications :</div>
    </Row>
    <Row className="mt-2">
      <Col md="10">
        <div className="product-description d-inline">
        It features a dual SIM card with a physical card and an e-SIM card that you can unlock
           Your iPhone and log in to applications, accounts, etc. easily.
           The Face ID feature is the fastest and most secure for authentication using a fingerprint
           The face features the A12 Bionic chip, which is the smartest and most powerful chip in phones
           Smart The most famous cameras in the world have formed a new era of photography
           The innovative ISP sensor and motor work
           Neural, enabling you to capture images never before seen with a single lens camera
           It brings the people in front into sharp focus as opposed to a scope
           Unclear background overview
        </div>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col md="12">
        <div className="product-price d-inline px-3 py-3 border">34000 dh</div>
        <div className="product-cart-add px-3 py-3 d-inline mx-3"> Add to cart </div>
      </Col>
    </Row>
  </div>
  )
}

export default ProductText
