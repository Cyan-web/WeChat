import { connect } from 'react-redux'

import UserCellComp from '../components/friends/UserCell'

const mapStateToProps = ({ user: { userInfo } }: IStore) => ({ userInfo })

export const UserCell = connect(mapStateToProps)(UserCellComp)
