export const OperationType_Online: OperationType_Online = 'online'
export const OperationType_All: OperationType_All = 'all'
export const OperationType_Undetermined: OperationType_Undetermined = 'undetermined'
export const OperationType_Blocking: OperationType_Blocking = 'blocking'
export const OperationType_Add: OperationType_Add = 'add'

export type ChangeOperationType = (type: OperationTypes) => void
