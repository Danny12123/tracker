import { ActionsTypes } from "../ActionTypes";

export const UserHolder = (state = null, { type, payload }) => {
    switch (type) {
        case ActionsTypes.USER:
            return { ...state, ...payload }

        default:
            return state;
    }
}