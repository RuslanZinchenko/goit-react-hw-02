import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';

const Balance = ({ income, expenses, balance }) => (
  <section className={styles.balanceArea}>
    <span className={styles.rowUp} role="img" aria-label="icon">
      {income}$
    </span>
    <span className={styles.rowDown} role="img" aria-label="icon">
      {expenses}$
    </span>
    <span className={styles.balance}>Balance: {balance}$</span>
  </section>
);

Balance.defaultProps = {
  income: 0,
  expenses: 0,
  balance: 0,
};

Balance.propTypes = {
  income: PropTypes.number,
  expenses: PropTypes.number,
  balance: PropTypes.number,
};

export default Balance;
