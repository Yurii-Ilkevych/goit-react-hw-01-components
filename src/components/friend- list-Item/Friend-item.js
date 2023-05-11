import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendItem = ({isOnline, avatar, name}) => {
    return (<>
    {isOnline ? (
      <span className={`${css.status} ${css.isOnline}`}></span>
    ) : (
      <span className={css.status}></span>
    )}
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