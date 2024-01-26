import ACTION_TYPES from "../ActionTypes/ActionTypes"

const INITIAL_STATE = {
    isSideBarOpen:false,
}
const SideBarHandlingReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case ACTION_TYPES.OPEN_SIDE_BAR:
            return{
                isSideBarOpen:true,
            }
        case ACTION_TYPES.CLOSE_SIDE_BAR:
            return{
                isSideBarOpen:false,
            }
        default:
            return{
                ...state
            }
    }
}

export default SideBarHandlingReducer