import { combineReducers } from 'redux';
import DashboardReducer from "./reducer/dashoard"
import UserReducer from "./reducer/users"


 const rootReducer = combineReducers({DashboardReducer, UserReducer})
export default rootReducer;