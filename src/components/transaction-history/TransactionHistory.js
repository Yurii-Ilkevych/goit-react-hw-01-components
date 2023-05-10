import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { TransactionItem } from './Transaction-item';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.headerTable}>Type</th>
          <th className={css.headerTable}>Amount</th>
          <th className={css.headerTable}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(data => {
          return (
            <tr key={data.id} className={css.bodyTableRow}>
              <TransactionItem
                type={data.type}
                amount={data.amount}
                currency={data.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })),
};
