import css from './FriendListItem.module.css';

export const FriendListItem = props => {
  const friendListCard = props.friends.map(data => {
    return (
      <li key={data.id} className={css.item}>
        {!data.isOnline ? (
          <span className={css.status}></span>
        ) : (
          <span className={css.isOnline}></span>
        )}

        <img
          className={css.avatar}
          src={data.avatar}
          alt={data.name}
          width="48"
        />
        <p className={css.name}>{data.name}</p>
      </li>
    );
  });

  return <ul className={css.friendList}>{friendListCard}</ul>;
};
