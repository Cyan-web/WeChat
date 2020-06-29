import React, { FC } from 'react'
import classNames from 'classnames'

import {
    OperationTypes,
    ChangeOperationType,
    OperationType_Online,
    OperationType_All,
    OperationType_Undetermined,
    OperationType_Blocking,
    OperationType_Add
} from './operationTypes'

interface IFriendsHeaderConfig {
    title: string
    type: OperationTypes
}

const friendsHeader: IFriendsHeaderConfig[] = [
    { title: '在线', type: OperationType_Online },
    { title: '全部', type: OperationType_All },
    { title: '待定', type: OperationType_Undetermined },
    { title: '已屏蔽', type: OperationType_Blocking }
]

interface IFriendsHeader {
    activeType: OperationTypes
    changeType: ChangeOperationType
}

const FriendsHeader: FC<IFriendsHeader> = ({ activeType, changeType }) => {
    const changeAddType = () => { changeType(OperationType_Add) }

    return (
        <div className="friendsHeader divider">
            <div className="friendHeader-base">
                <div className="friendsHeader-operation d-flex align-center px-n2">
                    <div className="mx-n2 px-n2">好友</div>

                    {
                        friendsHeader.map(e => {
                            const { title, type } = e

                            const classes = classNames('friendsHeader-operation-items mx-n2 px-n2 pointer', {
                                active: activeType === type
                            })

                            const _onClick = () => { changeType(type) }

                            return (
                                <div
                                    key={title}
                                    className={classes}
                                    onClick={_onClick}
                                >
                                    {title}
                                </div>
                            )
                        })
                    }

                    <div className="friendsHeader-operation-add mx-n2 px-n2 pointer" onClick={changeAddType}>
                        添加好友
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendsHeader
