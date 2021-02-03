import { userActionType } from './user.type';


const INTIAL_STATE = {
    currentUser: ''
}

const userReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case userActionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        
        default:
            return state;
    }
}

export default userReducer;