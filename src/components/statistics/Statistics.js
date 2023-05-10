import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatsItem } from './Stats-item';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(data => {
          return (
            <li
              style={{ backgroundColor: `${getRandomHexColor()}` }}
              key={data.id}
              className={css.item}
            >
              <StatsItem label={data.label} percentage={data.percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })),
  title: PropTypes.string.isRequired,
};
