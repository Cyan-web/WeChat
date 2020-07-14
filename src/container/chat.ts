import { connect } from 'react-redux'

import ChatWithComp from '../components/chat/chatMain/ChatWith'
import ChatInputComp from '../components/chat/chatInput/ChatInput'

export interface IChatContainerProps {
    currentTalker: IChatStore['currentTalker']
}

const mapStateToProps = (store: IStore) => {
    const {
        chat: {
            currentTalker
        }
    } = store

    return { currentTalker }
}

export const ChatInput = connect(mapStateToProps)(ChatInputComp)
export const ChatWith = connect(mapStateToProps)(ChatWithComp)
