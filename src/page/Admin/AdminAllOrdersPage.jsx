import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAllOrders from '../../components/Admin/AdminAllOrders'
// import Pagination from '../../components/Uitily/pagination'
import AdminSideBar from '../../components/Admin/AdminSideBar'
const AdminAllOrdersPage = () => {
  return (
    <Container style={{minHeight:"670px"}}>
        <Row className='my-3'>
            <Col sm="3" xs="2" md="2">
                <AdminSideBar/>
            </Col>
            <Col sm="9" xs="10" md="10">
                <AdminAllOrders />
                {/* <Pagination/> */}
                <p>Pagination</p>
            </Col>
            
        </Row>
    </Container>
  )
}

export default AdminAllOrdersPage;
