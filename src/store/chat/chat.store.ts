import { AnyAction } from 'redux'

import chatInitState from './chat.initState'
import { SET_CURRENT_TALKER } from './chat.types'

const initialState: IChatStore = chatInitState

export default (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_CURRENT_TALKER:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
