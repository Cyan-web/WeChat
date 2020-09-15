const currentTalker: IChatStore['currentTalker'] = {
    id: 0,
    account: '',
    avatar: '',
    nickname: '',
    gender: '',
    online: false
}

const chatHistory: IChatStore['chatHistory'] = {}

export default {
    currentTalker,
    chatHistory,
    chatList: []
}
