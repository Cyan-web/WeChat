import { Dispatch } from 'redux'

import { store } from '../index'
import { api_getChatHistory } from '../../apis/chat'
import { SET_CURRENT_TALKER, SET_RECEIVE_MSG } from './chat.types'

export type Dispatch_setCurrentTalker = (currentTalker: IChatStore['currentTalker']) => { type: SET_CURRENT_TALKER, payload: { currentTalker: IChatStore['currentTalker'] } }
export const dispatch_setCurrentTalker: Dispatch_setCurrentTalker = (currentTalker) => ({ type: SET_CURRENT_TALKER, payload: { currentTalker } })

export const dispatch_getChatHistory: IDispatchHandler<undefined> = () => {
    return async (dispatch: Dispatch) => {
        const { chat: { currentTalker: { id } } } = store.getState()
        const res = await api_getChatHistory(id)
        dispatch({ type: SET_RECEIVE_MSG, payload: res })
    }
}
