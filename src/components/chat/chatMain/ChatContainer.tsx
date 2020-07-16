import React, { FC, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import ChatItemContainer from './ChatItemContainer'
// import { ChatWith } from '../../../container/chat'

interface IChatContainerProps {
    chatHistory: IChatHistory[]
}

const ChatContainer: FC<IChatContainerProps> = ({ chatHistory }) => {
    const containerRef = useRef<null | HTMLDivElement>(null)

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({ top: containerRef.current.scrollHeight })
        }
    }, [ chatHistory ])

    return (
        <div ref={containerRef} className="chatContainer hide-scroll pa-n3 flex-1">
            {/*<ChatWith/>*/}

            {
                chatHistory.map(e => {
                    return (
                        <ChatItemContainer
                            key={e.id}
                            {...e}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (store: IStore) => {
    const {
        chat: {
            currentTalker,
            chatHistory
        },
        user: {
            userInfo: {
                id
            }
        }
    } = store

    const chat_id = [ id, currentTalker.id ].sort().join('_')

    return { chatHistory: chatHistory[chat_id] || [] }
}

export default connect(mapStateToProps)(ChatContainer)
