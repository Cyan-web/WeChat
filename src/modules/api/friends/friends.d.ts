/**
 * @interface ISearchUserInfoResponseData 查询好友返回的数据
 * @waitReply 是否等待被添加好友
 * @blocking 是否被屏蔽
 * */
interface ISearchUserInfoResponseData extends IUserBase {
    waitReply: boolean
    blocking: boolean
}

/**
 * @interface IAddFriendApiParams 添加好友时传递的参数
 * @addId 需要添加好友的 id
 * */
interface IAddFriendApiParams {
    addId: IUserBase['id']
}
