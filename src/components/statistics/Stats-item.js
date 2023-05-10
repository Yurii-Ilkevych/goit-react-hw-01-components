import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const StatsItem = ({ label, percentage }) => {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
};


StatsItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
  };
  