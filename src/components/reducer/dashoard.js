
// const initialState = {
//   productList : [],
//   usersList : [],
//   vendorsList : []
// }
// const dashboardReducer = (state = initialState, action) => {
//   console.log('dashboardReducer-1-all',action)
//   switch (action.type) {
//       case 'GetProductList':
//           return { ...state , productList : action.payload} ;
//       case 'GetUsersList':
//           console.log('---reducercheck---', action.payload)
//           return { ...state , usersList : action.payload} ;
//           return {state};
//       case 'GetVendorsList':
//           return { ...state , productList : action.payload} ;
//           return {state};
  
//       default:
//           return state;
//   }
// }
// export default dashboardReducer;
const initialState={
    productsList:[]
}

const DashboardReducer = ( state = initialState,action)=>{
  console.log("---DashboardReducer----",action);
switch(action.type){
case "GET_PRODUCTS_LIST":
  return {...state,productsList:action.payload.products};
  case "GET_USER_LIST":
  return state;
  case "GET_VENDOR_LIST":
  return {...state,productsList:action.payload.products};
 
default:
    return state;
}
}
export default DashboardReducer;