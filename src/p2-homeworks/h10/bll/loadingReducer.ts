export type LoadingStateType = {
    isLoading: boolean
}

const initState: LoadingStateType = {
    isLoading: false,
}

type LoadingActionType = {
    type: 'SET_LOADING'
    value: boolean
}


export const loadingReducer = (state:LoadingStateType = initState, action: LoadingActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.value
            }

        default:
            return state
    }
}


export const loadingAC = (value: boolean): LoadingActionType => {
    return {
        type: 'SET_LOADING',
        value,
    }
} // fix any