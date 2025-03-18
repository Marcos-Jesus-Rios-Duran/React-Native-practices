import axios from "axios";
const url_api="http://10.10.60.28:3000/api/students";
export const getStudents= async()=>{
    try{
        const response = await axios.get(url_api+"/getAll")
        return response.data.data;
    } catch (error){
        console.error(error);
    }
}