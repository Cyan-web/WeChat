type OperationType_Online = 'online'
type OperationType_All = 'all'
type OperationType_Undetermined = 'undetermined'
type OperationType_Blocking = 'blocking'
type OperationType_Add = 'add'

export const OperationType_Online: OperationType_Online = 'online'
export const OperationType_All: OperationType_All = 'all'
export const OperationType_Undetermined: OperationType_Undetermined = 'undetermined'
export const OperationType_Blocking: OperationType_Blocking = 'blocking'
export const OperationType_Add: OperationType_Add = 'add'

export type OperationTypes = OperationType_Online
    | OperationType_All
    | OperationType_Undetermined
    | OperationType_Blocking
    | OperationType_Add

export type ChangeOperationType = (type: OperationTypes) => void
