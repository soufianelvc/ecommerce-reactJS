import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategorys } from '../../redux/reducers/CategorySlice';
import notify from '../../hook/useNotifaction';
import { createSubCategory } from '../../redux/reducers/SubCategorySlice';

const AddSubCategoryHook = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    if(!navigator.onLine){
      notify("wifi not working", "warn")
      return ; 
    }
      dispatch(getCategorys("1"));
  },[dispatch]);
  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
      // get last category state from redux 
      const categoryData = useSelector(state => state.allCategory.category);

      // get last Subcategory state from redux
      const SubCategoryy = useSelector(state => state.subCat.Subcategory);
      
      
      // on select any option 
      const handelChange = (event) => {
        setId(event.target.value)
      }

      //on save data 
      const handelSubmit = async(params) => {
        if(!navigator.onLine){
          notify("wifi not working", "warn")
          return ; 
        }
        if(name===""){
          notify("give me name of subcategory", "warn")
        
          return ; 
        }
        if(id==="0"){
          notify("select any category", "warn")
          return ; 
        }
        setLoading(true)
          await dispatch(createSubCategory({name: name,category:id}))
        setLoading(false)
      }

      useEffect(() => {
        if(loading===false){
          setName("");
          setId("0");
          if(SubCategoryy){
            console.log(SubCategoryy)
          }

          if(SubCategoryy.status===201){
            notify("added success", "success")
          }
          else{
            notify("error in add data", "error")
          }          
          setLoading(true)

        }
      }, [loading]);

        return [name,categoryData,setName,handelChange,handelSubmit];

}

export default AddSubCategoryHook;
