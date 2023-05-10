import css from './Profile.module.css';
import PropTypes from 'prop-types'; 
export const Profile = ({ urlAvatar, userName, tag, location }) => {
  return (
    <div className={css.description}>
      <img src={urlAvatar} alt={userName} className={css.avatar} />
      <p className={css.name}>{userName}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

Profile.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}