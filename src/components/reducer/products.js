
const initialState={
    productsList:[]
}

const DashboardReducer = ( state = initialState,action)=>{
  console.log("---DashboardReducer----",action);
switch(action.type){
case "GET_PRODUCTS_LIST":
  return {...state,productsList:action.payload.products};
  case "ACTIVE_PRODUCTS_LIST":
  return state;
default:
    return state;
}
}
export default DashboardReducer;