import { ActionTypes, All } from './character.actions';

export interface State {
    data: any
}

export const initialState: State = {
    data: null
};

export function reducer(state = initialState, action: All) {
    switch (action.type) {
        case ActionTypes.SAVE_SUCCESS: {
            return {
                ...state,
                data: action.payload
            };
        }
        case ActionTypes.UPDATE_SUCCESS: {
            return {
                ...state,
                data: action.payload
            };
        }
        case ActionTypes.FAIL: {
            return {
                ...state,
                data: null
            };
        }
        default: {
            return state;
        }
    }
}