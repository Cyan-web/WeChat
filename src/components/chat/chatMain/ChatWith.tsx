import React, { FC } from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'

import { IChatContainerProps } from '../../../container/chat'

const ChatWith: FC<IChatContainerProps> = (
    {
        currentTalker: {
            avatar,
            nickname
        }
    }
) => {
    return (
        <div className="flex-column">
            <Avatar src={avatar} />

            <h1 className="color_4--text mt-n4">{nickname}</h1>
        </div>
    )
}

const mapStateToProps = (store: IStore) => ({ currentTalker: store.chat.currentTalker })

export default connect(mapStateToProps)(ChatWith)
