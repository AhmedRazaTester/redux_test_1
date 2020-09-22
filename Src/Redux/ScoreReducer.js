import { Plus, Minus, ChangeTextColor } from "./ActionTypes"

const initState = {
    score: 28,
    textcolor: "#000"
}

export default (state = initState, action) => {
    switch (action.type) {
        case Plus:
            return { ...state, score: state.score + 1 }
        case Minus:
            return { ...state, score: state.score - 1 }
        case ChangeTextColor:
            return { ...state, textcolor: action.payLoad }
        default:
            return state;
    }
}