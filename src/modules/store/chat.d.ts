/**
 * @interface IChatStore 聊天相关 store
 * @currentTalker 当前聊天对象
 * @chatHistory 聊天历史记录
 * */
interface IChatStore {
    currentTalker: IUserBase
    chatHistory: {
        [IChatHistory['chat_id']]: IChatHistory[]
    }
}

/**
 * @interface IChatHistory 聊天记录
 * @sender 发送者
 * @receiver 接收者
 * @content 内容
 * @create_time 创建时间
 * */
interface IChatHistory {
    chat_id: string
    sender: IUserBase['id']
    receiver: IUserBase['id']
    content: string
    create_time: string
}
