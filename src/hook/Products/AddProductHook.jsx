import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotifaction";
import { getCategorys } from "../../redux/reducers/CategorySlice";
import { getAllBrands } from "../../redux/reducers/BrandSlice";
import { getSubCategorys } from "../../redux/reducers/SubCategorySlice";
import { createProduct } from '../../redux/reducers/ProductSlice';

const AddProductHook = () => {
  const [options,setOption] =useState([]);
  
  
  // values image product 
  const [images, setImages] = useState([]);
  // values state 
  const [proName, setProName] = useState("");
  const [ProDecription, setProDecription] = useState("");
  const [PriceBefor, setPriceBefor] = useState();
  const [PriceAfter, setPriceAfter] = useState();
  const [Qty, setQty] = useState();
  const [CategoryId, setCategoryId] = useState("");

  const [BrandId, setBrandId] = useState("");
  // const [SubCatId ,setSubCatId]= useState([]); 
  const [SelectedSubCatId ,setSelectedSubCatId]= useState([]); 
  const [colors,setColors]= useState([]); 
  const [showColor,setShowColor]=useState(false);
  

 const [loading ,setLoading]= useState(true); 

// dispatch on getCategorys and getAllBrands 
      const dispatch = useDispatch();
  useEffect(()=>{
    if(!navigator.onLine){
      notify("wifi not working", "warn")
      return ; 
    }
      dispatch(getCategorys(1));
      dispatch(getAllBrands(1));
      // if(SubCatId.length>0){
      //   dispatch(getSubCategorys("65ba3b40531a1af048e94d95"))
      // }
      
    },[dispatch]);
// get last category state from redux 
    const categoryData = useSelector(state => state.allCategory.category);

// on select category store id 
const onSlecectedCate = async(e) => {
  if(e.target.value!=="0"){
      await dispatch(getSubCategorys(e.target.value))
  }
  setCategoryId(e.target.value) ; 
}
// get SubCategory with category 
const subCat = useSelector(state => state.subCat.Subcategory);
useEffect(()=>{
  if(CategoryId !== 0){
    if(subCat.data){
      setOption(subCat.data.data);

    }
  }
},[CategoryId])
// get last Brand state from redux 
    const brandData = useSelector(state => state.allBrand.Brands);
// on select category store id 
const onSlecectedBrand = (e) => {
  setBrandId(e.target.value) ; 
}


// to show hiden color ;
const name = (params) => {
  
}
// when chose new color 
const handleChangeComplete = (params) => {
  setColors([...colors,params.hex]) //#458855
  setShowColor(!showColor);

}

const deleteColor = (cl) => {
  setColors(colors.filter(e=> e!==cl))
}

const onSelect = (selectedList) => {
  setSelectedSubCatId(selectedList)
}
const onRemove = (selectedList) => {
  setSelectedSubCatId(selectedList)
}


// convert base64 to image file in js (i get this code from web )

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]), 
      n = bstr.length, 
      u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type:mime});
}

// send data to server on submit
const handleSubmit = async(params) => {

  try {
    if(proName==="" || ProDecription==="" || PriceBefor==="" || PriceAfter==="" || images.length<= 0 
    || PriceBefor <=0 || PriceAfter<=0 || CategoryId==="" || BrandId===""
  ){
   notify("give me correct info  please !!","warn") ; 
   return ;
  }
    const imgCover = dataURLtoFile(images[0],Math.random()+".png");
    const formData = new FormData();
      formData.append("title" , proName);
      formData.append("description" , ProDecription);
      formData.append("quantity" , Qty);
      formData.append("price" , PriceBefor);
      formData.append("imageCover" , imgCover);
      formData.append("category" , CategoryId);
      formData.append("brand" , BrandId);

      // on formData we use this methode to send array to server 
      // color
        colors.map((item)=>formData.append("availableColors" , item))
      // subcategory
      SelectedSubCatId.map((item)=>formData.append("subcategory" , item._id));
      // images 
    const   ItemImages = Array.from(Array(Object.keys(images).length).keys()).map(
        (item,i)=>{
          return  dataURLtoFile(images[i],Math.random()+".png");
        }
      )
      ItemImages.map((item)=>formData.append("images" , item));
      setLoading(true)
      await dispatch (createProduct(formData))
      setLoading(false)
  } catch (error) {
    console.error('Error dispatching createProduct:', error);
  }
}
// get product res 
const prd = useSelector(state => state.products.Products)



useEffect(()=>{
  if(loading===false){
        setOption([])
        setImages([])
        setProName("")
        setProDecription("")
        setPriceBefor("")
        setPriceAfter("")
        setQty("")
        setCategoryId("")
        setBrandId("")
        setSelectedSubCatId([])
        setColors([])
        setShowColor(false)
        

      setTimeout(() => {
            setLoading(true)
      }, 1000);
      if (prd.status === 201) {
        notify("added succses ","success") ; 
      }else {
          notify("not added  ","error") ; 
      }
  }
},[loading])
 return [
  images,setImages,proName,setProName,ProDecription,setProDecription,PriceBefor,setPriceBefor,
  PriceAfter,setPriceAfter,Qty,setQty,onSlecectedCate,categoryData,options,onSelect,onRemove,
  onSlecectedBrand,brandData,colors,deleteColor,setShowColor,showColor,handleChangeComplete,handleSubmit
]  ; 

}

export default AddProductHook;
