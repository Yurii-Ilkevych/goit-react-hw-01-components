import css from './Stats.module.css';

export const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={css.Stats}>
      <li>
        <span className={css.label}>Followers:</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li>
        <span className={css.label}>Views:</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li>
        <span className={css.label}>Likes:</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  );
};
