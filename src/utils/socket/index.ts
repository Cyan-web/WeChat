import { store } from '../../store'
import { ADD_RECEIVE_MSG } from '../../store/chat/chat.types'

export default () => {
    socket.on('receiveMsg', (data: IChatHistoryResponseData) => {
        const {
            user: {
                userInfo: {
                    id
                }
            },
            chat: {
                currentTalker
            }
        } = store.getState()

        const chat_id = [ id, currentTalker.id ].sort().join('_')

        if (chat_id === data.chat_id) store.dispatch({ type: ADD_RECEIVE_MSG, payload: data })
    })
}
