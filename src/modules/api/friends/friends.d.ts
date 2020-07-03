/**
 * @interface ISearchUserInfoResponseData 查询好友返回的数据
 * @waitReply 是否等待被添加好友
 * */
interface ISearchUserInfoResponseData extends IUseBase {
    waitReply: boolean
}

/**
 * @interface IAddFriendApiParams 添加好友时传递的参数
 * @id 用户自己 id
 * @addId 需要添加好友的 id
 * */
interface IAddFriendApiParams {
    id: number
    addId: number
}
