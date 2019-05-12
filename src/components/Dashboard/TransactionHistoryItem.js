import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';

const TransactionItem = ({ item: { type, amount, date } }) => (
  <tr>
    <td className={styles.transactionItem}>{type}</td>
    <td className={styles.transactionItem}>{amount}$</td>
    <td className={styles.transactionItem}>{date}</td>
  </tr>
);

TransactionItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default TransactionItem;
