import PropTypes from 'prop-types';
import styles from 'components/friendlist/FriendList.module.css';
import { FriendListItem } from 'components/friendlistitem/FriendListItem';

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