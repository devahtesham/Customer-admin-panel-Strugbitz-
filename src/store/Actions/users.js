
import axios from "axios"
import ACTION_TYPES from "../ActionTypes/ActionTypes";


// action for getting all users
const GetUsersListing = () => {
    return async (dispatch) => {
        let allSavedUsers = localStorage.getItem('users');
        if (allSavedUsers) {
            let users = JSON.parse(localStorage.getItem('users'));
            // console.log(users)
            dispatch({
                type: ACTION_TYPES.FETCH_USERS_SUCCESS,
                payload: users
            })
        } else {
            const url = 'https://reqres.in/api/users?page=1'
            // console.log('url:-' ,url)
            try {
                // for enabling loader
                dispatch({
                    type: ACTION_TYPES.FETCH_USERS
                })
                const response = await axios.get(url);
                const data = response.data.data

                // transformation in response due to showing image file name
                const transfromedData = data.map(user => {
                    return {
                        ...user,
                        file_name: user.avatar.split("/").pop()
                    }
                })

                // for disabling loader and sending data to reducer 
                dispatch({
                    type: ACTION_TYPES.FETCH_USERS_SUCCESS,
                    payload: transfromedData
                })
            } catch (error) {
                dispatch({
                    type: ACTION_TYPES.FETCH_USERS_FAIL
                })
                console.log(error.message)
                alert(error.message)
            }
        }

    }
}

// action for add user
const AddNewUser = (userObj) => {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPES.ADD_USER,
            payload: userObj
        })
    }
}

// action for edit user
const UpdateUser = (updatedObj) => {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPES.EDIT_USER,
            payload: updatedObj
        })
    }
}

// action for delete user
const DeleteUser = (id) => {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPES.DELETE_USER,
            payload: id
        })
    }
}

// sorting Data
const SortByName = () => {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPES.SORT_BY_NAME
        })
    }
}
const SortByEmail = () => {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPES.SORT_BY_EMAIL
        })
    }
}
const SortById = () => {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPES.SORT_BY_ID
        })
    }
}

// handling Side Bar

const OpenSideBar = ()=>{
    return (dispatch)=>{
        dispatch({
            type:ACTION_TYPES.OPEN_SIDE_BAR
        })
    }

}
const CloseSideBar = ()=>{
    return (dispatch)=>{
        dispatch({
            type:ACTION_TYPES.CLOSE_SIDE_BAR
        })
    }

}


export {
    GetUsersListing, AddNewUser, DeleteUser, UpdateUser, SortByName, SortByEmail, SortById,OpenSideBar,CloseSideBar
}