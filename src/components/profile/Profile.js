import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { Stats } from './Stats';
export const Profile = ({
  urlAvatar,
  userName,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={urlAvatar} alt={userName} className={css.avatar} />
        <p className={css.name}>{userName}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <Stats followers={followers} views={views} likes={likes} />
    </div>
  );
};

Profile.propTypes = {
  urlAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
