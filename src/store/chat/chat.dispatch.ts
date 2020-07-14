import { Dispatch } from 'redux'

import { SET_CURRENT_TALKER } from './chat.types'

export type Dispatch_setCurrentTalker = (currentTalker: IUserBase) => void
export const dispatch_setCurrentTalker: Dispatch_setCurrentTalker = (currentTalker) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: SET_CURRENT_TALKER, payload: { currentTalker } })
    }
}
