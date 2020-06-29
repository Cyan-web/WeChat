interface IUserStore {
    userInfo: IUserInfo
}

/**
 * @interface IUserInfo 用户数据结构
 * @extends ISearchUserInfo
 * @area 地区
 * @email 邮箱
 * @mobile 手机号
 * @password 密码
 * @sign 签名
 * */
interface IUserInfo extends ISearchUserInfo {
    area: string
    email: string
    mobile: string
    password: string
    sign: string
}

/**
 * @interface ISearchUserInfo 用户数据结构
 * @account 登录账号
 * @avatar 头像
 * @gender 性别
 * @nickname 昵称
 * @online 在线状态
 * @sign 签名
 * */
interface ISearchUserInfo {
    account: string
    id: number
    nickname: string
    online: boolean
    gender: string
    avatar: string
}
