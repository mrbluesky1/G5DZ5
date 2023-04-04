import {types} from "../types";

const initialState = {
    number: [],
    count: []
};


export function numbersReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_NUMBER:
            return {...state, number: action.payload, count: +state.number + +action.payload}

        case types.DElETE_ALL:
            return {...state, number: [], count: []}

        default: return state
    }
}