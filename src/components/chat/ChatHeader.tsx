import React, { FC } from 'react'
import Avatar from '@material-ui/core/Avatar'
import { connect } from 'react-redux'

interface IChatHeaderProps {
    currentTalker: IChatStore['currentTalker']
}

const ChatHeader: FC<IChatHeaderProps> = (
    {
        currentTalker: {
            avatar,
            nickname
        }
    }
) => {
    return (
        <div className="chatHeader divider d-flex align-center color_4--text px-n2">
            <Avatar
                className="mr-n2"
                src={avatar}
                style={{ width: 36, height: 36 }}
            />
            <h3>{nickname}</h3>
        </div>
    )
}

const mapStateToProps = (store: IStore) => ({ currentTalker: store.chat.currentTalker })

export default connect(mapStateToProps)(ChatHeader)
