import ACTION_TYPES from "../../ActionTypes/ActionTypes"

const INITIAL_STATE = {
    users: [],
    isLoading: ACTION_TYPES
}

const GetUsersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_USERS:
            return {
                isLoading: true
            }
        case ACTION_TYPES.FETCH_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: [...action.payload]
            }
        case ACTION_TYPES.FETCH_USERS_FAIL:
            return {
                isLoading: false
            }
        case ACTION_TYPES.ADD_USER:
            // transformation for adding a dynamic id in sequence
            let newUser = {
                ...action.payload,
                id:state.users.length+1
            }

            // setting all the users data to local storage
            localStorage.setItem('users',JSON.stringify([...state.users, newUser]))

            return {
                ...state,
                users: [...state.users, newUser]
            }

        case ACTION_TYPES.DELETE_USER:
            const filteredUsers = state.users.filter((user,id) => id !== action.payload )
            localStorage.setItem('users',JSON.stringify([...filteredUsers]))
            return{
                ...state,
                users:[...filteredUsers]
            }

        case ACTION_TYPES.EDIT_USER:
            const {index,...updatedUser} = action.payload;
            state.users.splice(index,1,updatedUser)
            localStorage.setItem('users',JSON.stringify([...state.users]))
            return{
                ...state,
                users:[...state.users]
            }

        default:
            return {
                ...state
            }
    }

}
export {
    GetUsersReducer
}