const UserReducer=(state={
    name:'govind',
    
},action)=>{
  if(action.type=='user'){
    state=action.playload
  }
    return state;
}
export default UserReducer