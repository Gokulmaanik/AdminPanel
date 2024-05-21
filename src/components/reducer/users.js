const initialState={
   usersList:[]
}

const UserReducer = ( state = initialState,action)=>{
  console.log("---UserReducer----",action);
switch(action.type){
case "GET_USER_LIST":
    return state;
  case "ACTIVE_USER_LIST":
    return state;
default:
    return state;
}
}
export default UserReducer;