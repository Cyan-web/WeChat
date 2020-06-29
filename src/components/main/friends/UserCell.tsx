import React, { FC } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import Avatar from '../../public/Avatar'

const UserCell: FC<ISearchUserInfo> = ({
    id,
    avatar,
    account,
    nickname,
    online
}) => {
    const status = online ? '在线' : '离线'

    return (
        <div className="userCell d-flex mx-n6 px-n2">
            <div className="userCell-container overflow-hidden flex-1 d-flex align-center">
                <div>
                    <Avatar src={avatar} className="mr-n2" />
                </div>

                <div>
                    <div className="userCell-info color_4--text">
                        <h5 className="fz-16 white--text r">
                            {nickname}
                            <span className="fz-14 ml-n1">{account}</span>
                        </h5>
                        <p className="fz-14">{status}</p>
                    </div>
                </div>
            </div>

            <div className="userCell-operation d-flex align-center ">
                <IconButton>
                    <ChatBubbleIcon fontSize="small" />
                </IconButton>
                <IconButton>
                    <MoreVertIcon fontSize="small" />
                </IconButton>
            </div>
        </div>
    )
}

export default UserCell
