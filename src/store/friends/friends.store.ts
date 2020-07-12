import { AnyAction } from 'redux'
import { SET_FRIENDS } from './friends.types'

const friendsStore: IFriendsStore = {
    all: [],
    awaitReply: []
}

export default (state = friendsStore, action: AnyAction) => {
    switch (action.type) {
        case SET_FRIENDS:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
