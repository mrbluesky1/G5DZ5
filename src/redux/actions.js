import {types} from "./types";


export function addNumberAction (input) {
    return {
        type: types.ADD_NUMBER,
        payload: input
    }
}

export function deleteAllAction () {
    return {
        type: types.DElETE_ALL
    }
}