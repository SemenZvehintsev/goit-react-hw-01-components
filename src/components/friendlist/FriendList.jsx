import PropTypes from 'prop-types';
import { FriendListItem } from '../friendlistitem/FriendListItem'
import styles from '../friendlist/FriendList.module.css'

export const FriendList = ({friends}) => {
    return <ul className={styles.friendList}>
        {friends.map((friend) => <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} status={friend.isOnline}/>)}
  </ul>
}

FriendList.propTypes = {
   friend: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
 }))
}