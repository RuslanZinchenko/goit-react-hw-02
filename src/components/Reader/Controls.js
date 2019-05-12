import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Controls = ({ onDecrement, onIncrement, currentPage, lastPage }) => (
  <section className={styles.controls}>
    <button
      className={styles.button}
      type="button"
      onClick={onDecrement}
      disabled={currentPage === 0}
    >
      Назад
    </button>
    <button
      className={styles.button}
      type="button"
      onClick={onIncrement}
      disabled={currentPage + 1 === lastPage}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
};

export default Controls;
