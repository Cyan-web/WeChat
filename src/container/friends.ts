import { connect } from 'react-redux'

import FriendsCommon from '../components/friends/page/FriendsCommon'
import { dispatch_allFriends, dispatch_awaitReply } from '../store/friends/friends.dispatch'

const mapStateToProps = (store: IStore) => {
    const { all, awaitReply } = store.friends

    return { all, awaitReply }
}

const mapDispatchToProps = {
    dispatch_allFriends,
    dispatch_awaitReply
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsCommon)
