import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Publication = ({ item }) => (
  <section className={styles.publication} key={item.id}>
    <h2>{item.title}</h2>
    <p>{item.text}</p>
  </section>
);

Publication.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default Publication;
