import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionHistoryItem';
import styles from './Dashboard.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionTable}>
    <thead>
      <tr>
        <th className={styles.transactionItem}>Transaction</th>
        <th className={styles.transactionItem}>Amount</th>
        <th className={styles.transactionItem}>Date</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <TransactionItem key={item.id} item={item} />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
}.isRequired;

export default TransactionHistory;
