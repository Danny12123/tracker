import { ActionsTypes } from './ActionTypes';

export const UserAction = (user) => {
    return {
        type: ActionsTypes.USER,
        payload: user
    }
}