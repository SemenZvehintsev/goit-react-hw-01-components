import PropTypes from 'prop-types';
import styles from 'components/FriendList/FriendList.module.css';
import { FriendListItem } from 'components/FriendList/FriendListItem';

export const FriendList = ({friends}) => {
    return <ul className={styles.friendList}>
        {friends.map(({id, avatar, name, isOnline}) => <FriendListItem key={id} avatar={avatar} name={name} status={isOnline}/>)}
  </ul>
}

FriendList.propTypes = {
   friend: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
 }))
}