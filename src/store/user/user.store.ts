import { AnyAction } from 'redux'

import userInitState from './user.initState'
import { SET_USER_INFO } from './user.types'

const userStore: IUserStore = userInitState

export default (state: IUserStore = userStore, action: AnyAction) => {
    switch (action.type) {
        case SET_USER_INFO:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
