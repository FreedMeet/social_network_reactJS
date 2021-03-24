import {getMyProfileTC} from "./authReducer"
import {CommonThunkType, InferValueTypes} from "./redux-store"

let initialState = {
    initialized: false
}

type InitialStateType = typeof initialState
type ActionsType = InferValueTypes<typeof actions>
type ThunkType = CommonThunkType<ActionsType, void>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "app/INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            };
        default:
            return state
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'app/INITIALIZED_SUCCESS'} as const)
}

export const initializeAppTC = (): ThunkType => (dispatch) => {
    let promise = dispatch(getMyProfileTC())
    Promise.all([promise]).then(() => {
        dispatch(actions.initializedSuccess())
    })
}

export default appReducer

