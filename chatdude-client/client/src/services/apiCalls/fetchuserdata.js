import axios from "axios";
import store from "../../reduxstore/store";
import userActionCreator from "../../actioncreators/usercreation";
function fetchData(){
 const userdata = axios.get("http://localhost:5665/users/getAllUsersdata",{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token-key")}`
        }
    }).then((res)=>{
     console.log(res.data,'hello all users')
     store.dispatch(userActionCreator(res.data))
    }).catch((error)=>{
   console.log(error)
    })
}
export default fetchData;


