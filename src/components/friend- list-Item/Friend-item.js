import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendItem = ({isOnline, avatar, name}) => {
  console.log(css[isOnline])
    return (<>
      <span className={`${css.status} ${css[isOnline]}`}></span>
    <img
      className={css.avatar}
      src={avatar}
      alt={name}
      width="48"
    />
    <p className={css.name}>{name}</p>
  </>)
}


FriendItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };