import React from 'react'
import AdminAllProductCard from './AdminAllProductCard'
import { Row } from 'react-bootstrap'

const AdminAllProducts = () => {
  return (
    <Row>
      <AdminAllProductCard/><AdminAllProductCard/><AdminAllProductCard/>
      <AdminAllProductCard/><AdminAllProductCard/><AdminAllProductCard/>
    </Row>
  )
}

export default AdminAllProducts
