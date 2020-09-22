import { Plus, Minus } from "./ActionTypes"

const initState = {
    score: 28,
    score1: 123
}

export default (state = initState, action) => {
    switch (action.type) {
        case Plus:
            return { ...state, score: state.score + 1 }
        case Minus:
            return { ...state, score: state.score - 1 }
        default:
            return state;
    }
}