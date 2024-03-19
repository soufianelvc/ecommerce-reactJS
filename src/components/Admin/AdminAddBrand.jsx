import React from 'react'
import { Row,Col } from 'react-bootstrap';
import AddBrandHook from '../../hook/Brand/AddBrandHook';
import { ToastContainer } from 'react-toastify';
import isloadingg from '../../images/isloading.gif';

const AdminAddBrand = () => {
    const [img,catName,isloading,isclick,handleSubmit,onImageChange,onChangeName] = AddBrandHook() ; 
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> Add a new brand </div>
                <Col sm="8">
                <div>
                        <label htmlFor="upload-photo">
                            <img src={img} alt="fzx" height="100px" width="120px" style={{ cursor: "pointer" }} />
                        </label>
                        <input type="file" name="photo" onChange={(eventt) => onImageChange(eventt)} id='upload-photo' />
                    </div>
                    <input
                        type="text" className="input-form d-block mt-3 px-3"
                        placeholder="Brand name"
                        onChange={onChangeName}
                        value={catName}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 " onClick={handleSubmit} >
                        Save modifications
                    </button>

                </Col>
            </Row>
            {
                isclick ? isloading ?
                    <img src={isloadingg} alt="isloadinggg" className='mx-auto w-25 h-25' />
                    : <p>ok finiche </p> : null
            }
            <ToastContainer />
        </div>
    )
}

export default AdminAddBrand