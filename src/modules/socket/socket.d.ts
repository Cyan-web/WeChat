interface ISocketOnReceiveMsgData {
    chat_id: IChatHistory['chat_id']
    content: string
    create_time: string
    id: number
    receiver: string
    sender: string
}
