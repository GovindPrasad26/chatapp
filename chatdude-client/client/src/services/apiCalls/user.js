import axios from "axios";

export const getLoggedUser= async()=>{
  try{
    const data= await axios.get('http://localhost:5665/users/username',{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token-key")}`
        }
    })
    console.log(data)
    return data;
  }

  catch(error){
    console.log(error)
  }
}