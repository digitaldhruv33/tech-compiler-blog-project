import axios from "axios";

const URL = "http://localhost:8000/api/blog";

export const loginUser = async () => {
  try {
    const response = await axios.get(`${URL}/login/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const regiterUser = async (user)=>{
    try{
        return await axios.post(`${URL}/adduser`, user)
    }catch(error){
        console.log(error)
    }
}
