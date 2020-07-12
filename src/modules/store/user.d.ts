interface IUserStore {
    userInfo: IUserInfo
}

/**
 * @interface IUseBase 用户对象接口基本值
 * @account 登录账号
 * @avatar 头像
 * @gender 性别
 * @nickname 昵称
 * @online 在线状态
 * @sign 签名
 * */
interface IUseBase {
    account: string
    id: number
    nickname: string
    online: boolean
    gender: string
    avatar: string
}

/**
 * @interface IUserInfo 用户数据结构
 * @extends ISearchUserInfoResponseData
 * @area 地区
 * @email 邮箱
 * @mobile 手机号
 * @password 密码
 * @sign 签名
 * @token
 * */
interface IUserInfo extends IUseBase {
    area: string
    email: string
    mobile: string
    password: string
    sign: string
    token: string
}
