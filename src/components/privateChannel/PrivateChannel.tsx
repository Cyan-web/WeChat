import React, { FC } from 'react'
import GroupIcon from '@material-ui/icons/Group'

// import SearchHeader from './SearchHeader'
import PrivateChannelBlock from './PrivateChannelBlock'

const PrivateChannel: FC = () => {
    return (
        <div className="privateChannel pa-n2 d-flex flex-column">
            <PrivateChannelBlock
                link="/main/friends"
                title="好友"
                avatar={GroupIcon}
            />
        </div>
    )
}

export default PrivateChannel
