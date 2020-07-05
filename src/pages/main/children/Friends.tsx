import React, { FC, useState, lazy, Suspense } from 'react'

import FriendsHeader from '../../../components/main/friends/FriendsHeader'
import {
    OperationType_All,
    OperationType_Undetermined,
    OperationType_Blocking,
    OperationType_Add,
    OperationType_Online
} from '../../../components/main/friends/operationTypes'

const OnlineComp = lazy(() => import('../../../components/main/friends/Online'))
const AllComp = lazy(() => import('../../../components/main/friends/All'))
const UndeterminedComp = lazy(() => import('../../../components/main/friends/Undetermined'))
const BlockingComp = lazy(() => import('../../../components/main/friends/Blocking'))
const AddComp = lazy(() => import('../../../components/main/friends/Add'))

const WithLazyLoad = (compType: OperationTypes) => {
    switch (compType) {
        case OperationType_Online:
            return <OnlineComp/>
        case OperationType_All:
            return <AllComp/>
        case OperationType_Undetermined:
            return <UndeterminedComp/>
        case OperationType_Blocking:
            return <BlockingComp/>
        case OperationType_Add:
            return <AddComp/>
        default:
            return <OnlineComp/>
    }
}

const Friends: FC = () => {
    const [ operationType, setOperationType ] = useState<OperationTypes>(OperationType_Add)

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
