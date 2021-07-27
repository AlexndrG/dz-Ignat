import {combineReducers, createStore } from 'redux'
import {loadingReducer} from './loadingReducer'

const reducers = combineReducers({
    loading: loadingReducer,
})

export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers)


export default store

// @ts-ignore
window.store = store // for dev


// const reducers = combineReducers({
//     loading: loadingReducer,
//
// })
//
// const store = createStore(reducers)
//
// export default store
//
// export type AppStoreType = ReturnType<typeof reducers>
//
// // @ts-ignore
// window.store = store // for dev
