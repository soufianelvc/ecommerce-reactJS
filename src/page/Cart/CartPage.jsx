import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CartItem from '../../components/Cart/CartItem';
import CartCheckout from '../../components/Cart/CartCheckout';

const CartPage = () => {
  return (
    <Container style={{minHeight:"670px"}}>
        <Row>
            <div className='cart-title mt-3'>shopping cart</div>
            <Row className='d-flex justify-content-center'>
                <Col xs="12" md="9">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </Col>

                <Col>
                    <CartCheckout />
                </Col>
            </Row>
        </Row>
    </Container>
  )
}

export default CartPage ; 
