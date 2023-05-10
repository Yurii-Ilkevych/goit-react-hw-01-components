import css from './TransactionHistory.module.css';
console.log(css);
export const TransactionHistory = props => {
  console.log(props);
  const transactionHistory = props.items.map(data => {
    return (
      <tr key={data.id} className={css.bodyTableRow}>
        <td className={css.bodyTable}>{data.type}</td>
        <td className={css.bodyTable}>{data.amount}</td>
        <td className={css.bodyTable}>{data.currency}</td>
      </tr>
    );
  });

  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.headerTable}>Type</th>
          <th className={css.headerTable}>Amount</th>
          <th className={css.headerTable}>Currency</th>
        </tr>
      </thead>
      <tbody>{transactionHistory}</tbody>
    </table>
  );
};
