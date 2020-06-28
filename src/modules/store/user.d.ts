interface IUserStore {
    userInfo: IUserInfo
}

/**
 * @interface IUserInfo 用户数据结构
 * @account 登录账号
 * @area 地区
 * @avatar 头像
 * @email 邮箱
 * @gender 性别
 * @mobile 手机号
 * @nickname 昵称
 * @online 在线状态
 * @password 密码
 * @sign 签名
 * */
interface IUserInfo {
    account: string
    area: string
    avatar: string
    email: string
    gender: string
    id: number
    mobile: string
    nickname: string
    online: boolean
    password: string
    sign: string
}
