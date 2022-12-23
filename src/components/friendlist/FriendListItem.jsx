import PropTypes from 'prop-types';
import styles from 'components/FriendList/FriendListItem.module.css'

export const FriendListItem = ({avatar, name, status}) => {
    return <li className={styles.item}>
            <span className={status ? styles.isOnline : styles.isOffline}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
}

FriendListItem.propTypes = {
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   status: PropTypes.bool.isRequired
}