import { SaveUserName, SavePassword } from "./ActionTypes"

const initState = {
    Username: '',
    Passowrd: ''
}

export default (state = initState, action) => {
    switch (action.type) {
        case SaveUserName:
            return { ...state, Username: action.payLoad }
        case SavePassword:
            return { ...state, Passowrd: action.payLoad }
        default:
            return state;
    }
}