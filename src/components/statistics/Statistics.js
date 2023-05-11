import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatsItem } from './Stats-item';
import getRandomHexColor from "./func-ramdom-color.js"

export const Statistics = ({ stats, title }) => {
  return (   
    <>
    { title && <section className={css.statistics}>
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
    </section>}
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })),
  title: PropTypes.string,
};
