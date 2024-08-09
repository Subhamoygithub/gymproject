import axios from 'axios'
const API_REGISTER = "https://corefitserver.onrender.com/register"
export const RegisterApi = async(savedMember)=>{
    try {
       return await axios.post(API_REGISTER,savedMember) 
    } catch (error) {
        console.log(error,"something wrong");
    }
}