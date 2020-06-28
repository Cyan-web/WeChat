import React, { FC, useState, lazy, Suspense } from 'react'

import FriendsHeader from '../../../components/main/friends/FriendsHeader'
import {
    OperationTypes,
    OperationType_All,
    OperationType_Undetermined,
    OperationType_Blocking,
    OperationType_Add
} from '../../../components/main/friends/operationTypes'

const OnlineComp = lazy(() => import('../../../components/main/friends/Online'))
const AllComp = lazy(() => import('../../../components/main/friends/All'))
const UndeterminedComp = lazy(() => import('../../../components/main/friends/Undetermined'))
const BlockingComp = lazy(() => import('../../../components/main/friends/Blocking'))
const AddComp = lazy(() => import('../../../components/main/friends/Add'))

const WithLayLoad = (compType: OperationTypes) => {
    switch (compType) {
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
    const [ operationType, setOperationType ] = useState<OperationTypes>('online')

    return (
        <div className="friends">
            <FriendsHeader activeType={operationType} changeType={setOperationType} />

            <Suspense fallback={null}>
                {WithLayLoad(operationType)}
            </Suspense>
        </div>
    )
}

export default Friends
