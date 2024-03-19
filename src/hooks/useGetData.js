


import axios from 'axios';

const useGetData = async(url,params) => {
    try {   
        const res = await axios.get(url);
        return res.data ; 
    } catch (error) {
        console.log(error)
    }
}

export default useGetData ; 
