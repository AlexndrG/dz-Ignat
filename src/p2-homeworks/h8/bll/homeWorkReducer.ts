import {UsersType} from '../HW8';

type SortActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckActionType = {
    type: 'check'
    payload: number
}

type ActionsType = SortActionType | CheckActionType

export const homeWorkReducer = (state: UsersType, action: ActionsType): UsersType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const newState = [...state]
            return newState.sort((a, b) => {
                if (action.payload ===  'up') {
                    return a.name > b.name ? 1 : -1
                } else {
                    return a.name > b.name ? -1 : 1
                }
            })
        }

        case 'check': {
            // need to fix
            return state.filter(i => i.age >= action.payload)
        }
        default:
            return state
    }
}