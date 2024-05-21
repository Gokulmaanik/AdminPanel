import  axios  from "axios";

export function AC_GET_PRODUCTS_LIST(){
return function(dispatch) {
        return axios.get("https://dummyjson.com/products")
          .then(({ data }) => {
            dispatch(sendList(data));
           
        });
      };
}
function sendList(data){
    return{
        type:"GET_PRODUCTS_LIST",
        payload:data
    }
}




export function AC_GET_ACTIVE_PRODUCTS_LIST(){
    return{
        type:"ACTIVE_PRODUCTS_LIST",
        payload:""
    }
}

export function ActionGetUsersList()
{
    return function(dispatch) {
        return axios.get("http://localhost:3001/users/userslist")
          .then(({ data }) => {
            console.log(data)
            dispatch(sendUsersDataList(data))
        });
    };

    function sendUsersDataList(data)
    {
        return {
            type : 'GetUsersList',
            payload : data
        };
    }
}