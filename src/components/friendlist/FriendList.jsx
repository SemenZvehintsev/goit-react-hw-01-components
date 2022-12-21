import PropTypes from 'prop-types';
import { FriendListItem } from '../friendListItem/FriendListItem'
// import styles from '../friendList/FriendList.module.css'

export const FriendList = ({friends}) => {
    return <ul className="friend-list">
        {friends.map((friend) => <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} status={friend.isOnline}/>)}
  </ul>
}

FriendList.propTypes = {
   friend: PropTypes.arrayOf(PropTypes.object)
}