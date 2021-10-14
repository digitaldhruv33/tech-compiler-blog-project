import axios from 'axios'

const URL ="http://localhost:8000/api/blog/"

export const getAllBlog = async ()=>{
    try{
        const response = await axios.get(`${URL}/getblogs/`)
        console.log(response)
        return response.data
    }catch(error){
        console.log(error)
    }
    
}

