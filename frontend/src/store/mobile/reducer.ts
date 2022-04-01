import { Action as MobileAction } from './action';
import { MobileEntity, ActionTypes } from './types';

export interface MobileState {
    loading: boolean;
    items: MobileEntity[],
    error: string | null;
}

export const initialState: MobileState = {
    loading: false,
    error: null,
    items: [],
};

export default (state = initialState, action: MobileAction) => {
    switch (action.type) {
        case ActionTypes.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.items,
            };
        case ActionTypes.FAIL:
            return {
                ...state,
                loading: false,
                error: 'err ' + action.error,
            };
        default:
            return state;
    }
}