import axios from "axios";

const URL = "http://localhost:8000/api/blog";

export const getAllBlog = async () => {
  try {
    const response = await axios.get(`${URL}/getblogs/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const submitBlog = async (blog)=>{
    try{
        return await axios.post(`${URL}/addblog`, blog)
    }catch(error){
        console.log(error)
    }
}
