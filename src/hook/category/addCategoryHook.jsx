import { useState } from 'react';
import avatar from '../../images/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { createCategory } from '../../redux/reducers/CategorySlice';
import notify from '../../hook/useNotifaction';
import { useEffect } from 'react';

const AddCategoryHook = () => {
    const [img, setImg] = useState(avatar);
    const [catName, setCatName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const dispatch = useDispatch();
    const [isloading, setIsLoading] = useState(true);
    const [isclick, setIsClick] = useState(false);
    

    const ress = useSelector(state => state.allCategory.category);

    const tError = useSelector(state => state.allCategory.err);
    // to change name state : 
    const onChangeName = (event) =>{
        event.persist();
        setCatName(event.target.value)
    }
    // when img change save it 
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files[0])
        }

    }
    const handleSubmit = async() => {
        if (img === avatar || catName === "") {
            notify("give me correct info  please !!","warn") ; 
        } else {
            const formData = new FormData();
            formData.append("name", catName);
            formData.append("image", selectedFile);

            setIsLoading(true);
            setIsClick(true)
            if (tError) {
                alert("error 404 ")
            }
            await  dispatch(createCategory(formData))

            setIsLoading(false);
            setTimeout(() => {
                setIsClick(false)
            }, 5000);


        }

    };  
      
    useEffect(() => {
        if (isloading === false) {
            setImg(avatar);
            setCatName("");
            setSelectedFile(null)
            console.log("okkkk")
            setIsLoading(true)
            console.log(ress)
      // setTimeout(() => {
            if (ress.status === 201) {
                notify("added succses ","success") ; 
            }else {
                notify("not added  ","error") ; 
            }
      // }, 5);            
        }

    }, [isloading]);

    return [img,catName,isloading,isclick,handleSubmit,onImageChange,onChangeName]
}

export default AddCategoryHook; 
