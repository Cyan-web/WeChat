import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
import { createHashHistory } from 'history'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

import user from './user/user.store'
import friends from './friends/friends.store'
import chat from './chat/chat.store'

const rootPersistConfig = {
    key: 'root',
    storage,
    backList: [ 'user', 'friends' ]
}

const createPersistConfig = (key: string) => ({ key, storage })

const reducer = combineReducers({
    user: persistReducer(createPersistConfig('user'), user),
    friends: persistReducer(createPersistConfig('friends'), friends),
    chat: persistReducer(createPersistConfig('chat'), chat),
})

const persistedReducer = persistReducer(rootPersistConfig, reducer)

export const store = createStore(persistedReducer, compose(
    applyMiddleware(thunk, routerMiddleware(createHashHistory())),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))

export const persistor = persistStore(store)
