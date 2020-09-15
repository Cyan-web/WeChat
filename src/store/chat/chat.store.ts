import { AnyAction } from 'redux'

import chatInitState from './chat.initState'
import {
    SET_CURRENT_TALKER,
    SET_RECEIVE_MSG,
    ADD_RECEIVE_MSG
} from './chat.types'

const initialState: IChatStore = chatInitState

export default (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_CURRENT_TALKER:
            return { ...state, ...action.payload }
        case SET_RECEIVE_MSG:
        case ADD_RECEIVE_MSG:
            const { chat_id, history } = action.payload as IChatHistoryResponseData
            const oldHistory = state.chatHistory[chat_id] || []
            const newHistory = action.type === SET_RECEIVE_MSG ? history : [ ...oldHistory, ...history ]
            return { ...state, chatHistory: { ...state.chatHistory, [chat_id]: newHistory } }
        default:
            return state
    }
}
