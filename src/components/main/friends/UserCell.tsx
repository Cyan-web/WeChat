import React, { FC, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Tooltip from '@material-ui/core/Tooltip'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import Avatar from '../../public/Avatar'
import { api_addFriend } from '../../../apis/friends'

import { ButtonClickHandler } from '../../../modules/handler/handler'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon'

interface TooltipIconProps {
    tip: string
    Icon: OverridableComponent<SvgIconTypeMap>
    onClick?: ButtonClickHandler
}

const TooltipIcon: FC<TooltipIconProps> = ({ tip, Icon, onClick }) => {
    return (
        <Tooltip title={tip} placement="top" arrow>
            <IconButton onClick={onClick}>
                <Icon fontSize="small" />
            </IconButton>
        </Tooltip>
    )
}

interface IUserCellProps extends ISearchUserInfoResponseData {
    type: OperationTypes
    userInfo: IUserInfo
}

const UserCell: FC<IUserCellProps> = ({
    type,
    id,
    avatar,
    account,
    nickname,
    online,
    userInfo,
    waitReply
}) => {
    const addFriend = async () => {
        await api_addFriend({ id: userInfo.id, addId: id })
        console.log('添加好友成功, 等待对方同意')
    }

    const [ anchorEl, setAnchorEl ] = useState<HTMLElement | null>(null)

    const moreMenuOpen: ButtonClickHandler = e => { setAnchorEl(e.currentTarget) }

    const moreMenuClose = () => { setAnchorEl(null) }

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
                {
                    type
                        ? (
                            <TooltipIcon
                                tip="添加好友"
                                Icon={AddCircleIcon}
                                onClick={addFriend}
                            />
                        )
                        : (
                            <>
                                <TooltipIcon
                                    tip="消息"
                                    Icon={ChatBubbleIcon}
                                />

                                <TooltipIcon
                                    tip="更多"
                                    Icon={MoreVertIcon}
                                    onClick={moreMenuOpen}
                                />

                                <Menu
                                    keepMounted
                                    anchorEl={anchorEl}
                                    getContentAnchorEl={null}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={moreMenuClose}
                                >
                                    <MenuItem>添加好友</MenuItem>
                                </Menu>
                            </>
                        )
                }
            </div>
        </div>
    )
}

export default UserCell
