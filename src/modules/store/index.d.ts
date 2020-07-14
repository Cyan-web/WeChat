interface IStore {
    user: IUserStore
    friends: IFriendsStore
    chat: IChatStore
}

type IDispatchHandler = () => void
