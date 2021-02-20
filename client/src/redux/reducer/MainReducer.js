import { LOGIN, LOGOUT } from '../action/ActionType'

const initialstate = { islogin: false }

export const MainReducer = (state = initialstate, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, islogin: true };
        case LOGOUT:
            return { ...state, islogout: false };
        default:
            return initialstate;
    }
}