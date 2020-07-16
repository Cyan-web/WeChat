import React, { FC } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Avatar from '@material-ui/core/Avatar'

import ChatItemBase from './ChatItemBase'

interface IChatItemContainer extends IChatHistory {
    userInfo: IUserBase
    currentTalker: IChatStore['currentTalker']
}

const ChatItemContainer: FC<IChatItemContainer> = (
    {
        userInfo,
        currentTalker,
        sender,
        content,
        create_time
    }
) => {
    const isMe = userInfo.id === sender
    const avatar = isMe ? userInfo.avatar : currentTalker.avatar
    const nickname = isMe ? userInfo.nickname : currentTalker.nickname

    const classes = classNames('d-flex align-start mb-n2', [
        isMe ? 'flex-row' : 'flex-row-reverse'
    ])

    const contentClasses = classNames('flex-column', [
        isMe ? 'ml-n2' : 'mr-n2'
    ])

    return (
        <div className={classes}>
            <Avatar src={avatar} />

            <div className={contentClasses}>
                <ChatItemBase nickname={nickname} create_time={create_time} />

                <div className="color_5--text">
                    {content}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (store: IStore) => {
    const {
        user: { userInfo},
        chat: { currentTalker }
    } = store

    return { userInfo, currentTalker }
}

export default connect(mapStateToProps)(ChatItemContainer)
