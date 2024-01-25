
import axios from "axios"
import ACTION_TYPES from "../ActionTypes/ActionTypes";


// action for getting all users
const GetUsersListing = () => {
    return async (dispatch) => {
        let allSavedUsers = localStorage.getItem('users');
        if(allSavedUsers){
            let users = JSON.parse(localStorage.getItem('users'))
            dispatch({
                type: ACTION_TYPES.FETCH_USERS_SUCCESS,
                payload: users
            })
        }else{
            const url = 'https://reqres.in/api/users?page=1'
            // console.log('url:-' ,url)
            try {
                // for enabling loader
                dispatch({
                    type: ACTION_TYPES.FETCH_USERS
                })
                const response = await axios.get(url);
                const data = response.data.data
    
                // for disabling loader and sending data to reducer 
                dispatch({
                    type: ACTION_TYPES.FETCH_USERS_SUCCESS,
                    payload: data
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

// action for delete user
const DeleteUser = (id) => {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPES.DELETE_USER,
            payload: id
        })
    }
}

export {
    GetUsersListing,AddNewUser,DeleteUser
}