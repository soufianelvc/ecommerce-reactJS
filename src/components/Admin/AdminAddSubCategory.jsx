import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import AddSubCategoryHook from '../../hook/subCategory/AddSubCategoryHook';
const AdminAddSubCategory = () => {
  const [name,categoryData,setName,handelChange,handelSubmit]= AddSubCategoryHook(); 
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add a new subcategory</div>
                <Col sm="8">
                    <input
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Subcategory name"
                    />
                    <select name="category" id="cat" className="select mt-3 px-2 "  
                      onChange={handelChange}
                     >
                    <option value="0">select category</option>
                      {
                        categoryData.data?(categoryData.data.map((item,i)=>{
                          return <option value={item._id} key={i}>{item.name} </option>
                        })):(null)
                      }
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 "> Save modifications</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default AdminAddSubCategory;
