import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">sign in </label>
            <input
              placeholder="email..."
              type="email"
              className="user-input my-3 text-center mx-auto"
            />
            <input
              placeholder=" password..."
              type="password"
              className="user-input text-center mx-auto"
            />
            <button className="btn-login mx-auto mt-4"> sign in</button>
            <label className="mx-auto my-4">
            Don't have an account?{" "}
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  click here
                </span>
              </Link>
            </label>



          </Col>


          <label className="mx-auto my-4">
            <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                 admin
              </span>
            </Link>

            <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
              <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                 user
              </span>
            </Link>
          </label>
        </Row>
      </Container>
    </div>
  )
}

export default LoginPage; 
