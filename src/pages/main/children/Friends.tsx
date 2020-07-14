import React, { FC, useState, lazy, Suspense } from 'react'

import FriendsHeader from '../../../components/friends/FriendsHeader'
import {
    OperationType_All,
    OperationType_Undetermined,
    OperationType_Blocking,
    OperationType_Add,
    OperationType_Online
} from '../../../components/friends/operationTypes'

import FriendsCommon from '../../../container/friends'
// const OnlineComp = lazy(() => import('../../../components/chat/friends/Online'))
// const AllComp = lazy(() => import('../../../components/chat/friends/All'))
// const UndeterminedComp = lazy(() => import('../../../components/chat/friends/Undetermined'))
// const BlockingComp = lazy(() => import('../../../components/chat/friends/Blocking'))
const AddComp = lazy(() => import('../../../components/friends/page/Add'))

const WithLazyLoad = (compType: OperationTypes) => {
    switch (compType) {
        case OperationType_Online:
        case OperationType_All:
        case OperationType_Undetermined:
        case OperationType_Blocking:
            return <FriendsCommon type={compType} />
        case OperationType_Add:
            return <AddComp/>
        default:
            return <FriendsCommon type={OperationType_Online} />
    }
}

const Friends: FC = () => {
    const [ operationType, setOperationType ] = useState<OperationTypes>(OperationType_Online)

    return (
        <div className="friends d-flex flex-column flex-1">
            <FriendsHeader activeType={operationType} changeType={setOperationType} />

            <Suspense fallback={null}>
                {WithLazyLoad(operationType)}
            </Suspense>
        </div>
    )
}

export default Friends
