import { combineReducers } from "redux";
import { GetUsersReducer} from "../usersReducer";
import SideBarHandlingReducer from "../sideBarReducer";

const CombineReducer = combineReducers({
    GetUsersReducer,
    SideBarHandlingReducer,
})

export default CombineReducer