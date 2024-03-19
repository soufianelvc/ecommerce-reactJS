import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import Pagination from '../../components/Uitily/pagination'
import AdminAllProducts from '../../components/Admin/AdminAllProducts'
import AdminSideBar from '../../components/Admin/AdminSideBar'

const AdminAllProductsPage = () => {
  return (
    <Container style={{minHeight:"670px"}}>
        <Row className='my-3'>
            <Col sm="3" xs="2" md="2">
                <AdminSideBar/>
            </Col>
            <Col sm="9" xs="10" md="10">
                <AdminAllProducts className="my-1"/>
                {/* <Pagination /> */}
                <p>Pagination</p>
            </Col>
            
        </Row>
    </Container>
  )
}

export default AdminAllProductsPage
