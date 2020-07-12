interface IStore {
    user: IUserStore
    friends: IFriendsStore
}

type DispatchHandler = () => void
