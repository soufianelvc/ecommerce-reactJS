import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
// import avatar from '../../images/avatar.png'
import add from '../../images/add.png';
import MultipleImageInput from 'react-multiple-image-input';

// import { useDispatch, useSelector } from 'react-redux';
// import { getCategorys } from '../../redux/reducers/CategorySlice';
// import notify from '../../hook/useNotifaction';
// import { getAllBrands } from '../../redux/reducers/BrandSlice';

import { CompactPicker } from 'react-color';
// import { getSubCategorys } from '../../redux/reducers/SubCategorySlice';
// import { createProduct } from '../../redux/reducers/ProductSlice';
import { ToastContainer } from 'react-toastify';
import AddProductHook from '../../hook/Products/AddProductHook';


const AdminAddProducts = () => {
    const [
      images,setImages,proName,setProName,ProDecription,setProDecription,PriceBefor,setPriceBefor,
      PriceAfter,setPriceAfter,Qty,setQty,onSlecectedCate,categoryData,options,onSelect,onRemove,
      onSlecectedBrand,brandData,colors,deleteColor,setShowColor,showColor,handleChangeComplete,handleSubmit
    ]= AddProductHook();

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">   Add a new product</div>
                <Col sm="8">
                    <div className="text-form pb-2">  Pictures of the product </div>
                    <MultipleImageInput images={images}setImages={setImages}
                      theme={"light"}
                      allowCrop={false}
                      max={4}
      />
                    <input
                        value={proName}
                        onChange={e=>setProName(e.target.value)}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" product name "
                    />
                    <textarea
                        value={ProDecription}
                        onChange={e=>setProDecription(e.target.value)}                    
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder=" Product Description "
                    />
                    <input
                        value={PriceBefor}
                        onChange={e=>setPriceBefor(e.target.value)}                    
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="  Price before discount "
                    />
                    <input
                        value={PriceAfter}
                        onChange={e=>setPriceAfter(e.target.value)}                    
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" Price "
                    />
                      <input
                        value={Qty}
                        onChange={e=>setQty(e.target.value)}                      
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Quantity"
                    />
                    <select       
                        onChange={(e) =>{onSlecectedCate(e)}}                       
                        name="cate"
                        id="cat"
                        className="select input-form-area mt-3 px-2 ">
                    <option value="0">select category</option>
                      {
                        categoryData.data?(categoryData.data.map((item,i)=>{
                          return <option value={item._id} key={i}>{item.name} </option>
                        })):(null)
                      }
                    </select>

                    <Multiselect
                        className="mt-2 text-start"
                        placeholder=" Subcategory"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                    onChange={(e) =>{onSlecectedBrand(e)}}
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">select Brand</option>
                        {
                        brandData.data?(brandData.data.map((item,i)=>{
                          return <option value={item._id} key={i}>{item.name} </option>
                        })):(null)
                      }
                    </select>
                    <div className="text-form mt-3 ">Available colors of the product </div>
                    <div className="mt-1 d-flex">

                      {
                        colors.length > 0? (
                  colors.map((item,i)=>{
                    return <div onClick={()=> deleteColor(item)}
                     key={i} className="color ms-2 border  mt-1"style={{ backgroundColor: item  }}></div>
                  })
                        ):(null)
                      }
                        <img src={add} alt="" width="30px" height="35px"
                          onClick={()=>setShowColor(!showColor)} style={{cursor:"pointer"}} 
                         />
                         {
                         showColor?
                         (<CompactPicker onChangeComplete={handleChangeComplete}/>)
                         :null}
                        
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit}className="btn-save d-inline mt-2 "> Save modifications</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default AdminAddProducts