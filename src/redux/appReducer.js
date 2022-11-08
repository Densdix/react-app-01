import {setCurrentUserThunkCreator} from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
// const FAKE = "FAKE";

let initState = {
    initialized: false
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        // case FAKE:
        //     return {
        //         ...state
        //     }
        default:
            return state
    }
}

export const initSuccessActionCreator = () => {
    return {type: INITIALIZED_SUCCESS}
}

export const initAppThunkCreator = () => {
    return (dispatch) => {
        let promise = dispatch(setCurrentUserThunkCreator())

        Promise.all([promise]).then(()=>{
            dispatch(initSuccessActionCreator())
        })

    }
}

export default appReducer