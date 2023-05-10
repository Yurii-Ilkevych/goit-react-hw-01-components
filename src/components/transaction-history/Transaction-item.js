import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.bodyTable}>{type}</td>
      <td className={css.bodyTable}>{amount}</td>
      <td className={css.bodyTable}>{currency}</td>
    </>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
