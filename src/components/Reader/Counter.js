import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Counter = ({ articleNumber, articlesLength }) => (
  <Fragment>
    <p className={styles.counter}>
      {articleNumber}/{articlesLength}
    </p>
  </Fragment>
);

Counter.defaultProps = {
  articleNumber: 1,
};

Counter.propTypes = {
  articleNumber: PropTypes.number,
  articlesLength: PropTypes.number.isRequired,
};

export default Counter;
