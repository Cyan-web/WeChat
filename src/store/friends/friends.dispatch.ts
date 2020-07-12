import { Dispatch } from 'redux'

import { SET_FRIENDS } from './friends.types'
import { api_allFriends, api_awaitReply } from '../../apis/friends'

export const dispatch_allFriends = () => {
    return async (dispatch: Dispatch) => {
        const all = await api_allFriends()
        dispatch({ type: SET_FRIENDS, payload: { all } })
    }
}

export const dispatch_awaitReply = () => {
    return async (dispatch: Dispatch) => {
        const awaitReply = await api_awaitReply()
        dispatch({ type: SET_FRIENDS, payload: { awaitReply } })
    }
}
