/**
 * @interface IChatStore 聊天相关 store
 * @currentTalker 当前聊天对象
 * @chatHistory 聊天历史记录
 * */
interface IChatStore {
    currentTalker: IUserBase
    chatHistory: {
        [key: string]: IChatHistory[]
    }
    chatList: IUserBase[]
}

/**
 * @interface IChatHistory 聊天记录
 * @sender 发送者
 * @receiver 接收者
 * @content 内容
 * @create_time 创建时间
 * */
interface IChatHistory {
    id: number
    chat_id: string
    sender: IUserBase['id']
    receiver: IUserBase['id']
    content: string
    create_time: string
}
