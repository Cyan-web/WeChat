import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import user from './user/user.store'

const rootPersistConfig = {
    key: 'root',
    storage,
    backList: [ 'user' ]
}

const userPersistConfig = {
    key: 'user',
    storage
}

const reducer = combineReducers({
    user: persistReducer(userPersistConfig, user)
})

const persistedReducer = persistReducer(rootPersistConfig, reducer)

export const store = createStore(persistedReducer, compose(
    applyMiddleware(thunk),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))

export const persistor = persistStore(store)
