import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { FriendItem } from './Friend-item';
export const FriendListItem = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(data => {
        return (
          <li key={data.id} className={css.item}>
            <FriendItem
              id={data.id}
              isOnline={data.isOnline}
              avatar={data.avatar}
              name={data.name}
            />
          </li>
        );
      })}
    </ul>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }))
};
