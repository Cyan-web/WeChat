import React, { FC } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

import Avatar from '../public/Avatar'

import { ButtonClickHandler } from '../../modules/handler/handler'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon'

interface TooltipIconProps {
    tip: string
    Icon: OverridableComponent<SvgIconTypeMap>
    onClick?: ButtonClickHandler
}

export const TooltipIcon: FC<TooltipIconProps> = ({ tip, Icon, onClick }) => {
    return (
        <Tooltip title={tip} placement="top" arrow>
            <IconButton onClick={onClick}>
                <Icon fontSize="small" />
            </IconButton>
        </Tooltip>
    )
}

interface IUserCellProps extends IUserBase {
    type: OperationTypes
    waitReply?: boolean
    blocking?: boolean
}

const UserCell: FC<IUserCellProps> = ({
    type,
    id,
    avatar,
    account,
    nickname,
    online,
    children
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
                {children}
                {/*{whichOperation()}*/}
            </div>
        </div>
    )
}

export default UserCell
