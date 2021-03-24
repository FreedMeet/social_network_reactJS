import {getMyProfileTC} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {appStateType} from "./redux-store";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean
};

let initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state
    }
};

type ActionsType = initializedSuccessActionType

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
};

export const initializedSuccess = (): initializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

type ThunkType = ThunkAction<void, appStateType, unknown, ActionsType>

export const initializeAppTC = (): ThunkType => (dispatch) => {
    let promise = dispatch(getMyProfileTC());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })
};

export default appReducer

