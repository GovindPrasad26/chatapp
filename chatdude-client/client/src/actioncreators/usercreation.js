import UserAction from "../action/useraction";
const userActionCreator=(userdata)=>{
    UserAction.playload=userdata
    return UserAction
}
export default userActionCreator;