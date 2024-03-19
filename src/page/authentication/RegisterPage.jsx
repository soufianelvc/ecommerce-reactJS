import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login"> Register a new account </label>
            <input
              placeholder=" name user..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              placeholder="email..."
              type="email"
              className="user-input my-3 text-center mx-auto"
            />
            <input
              placeholder="password ..."
              type="password"
              className="user-input text-center mx-auto"
            />
            <button className="btn-login mx-auto mt-4"> Account registration </button>
            <label className="mx-auto my-4">
            Already have an account?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                   click here
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register
