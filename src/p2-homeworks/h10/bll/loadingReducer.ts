const initState = {
    loading: false
}

type LoadingStateType = typeof initState

type LoadingACType = {
    type: 'SET_LOADING'
    value: boolean
}

export type ActionsType = LoadingACType

export const loadingReducer = (state: LoadingStateType = initState, action: ActionsType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.value
            }

        default:
            return state
    }
}


export const loadingAC = (value: boolean): LoadingACType => ({ // fix any
    type: 'SET_LOADING',
    value,
})