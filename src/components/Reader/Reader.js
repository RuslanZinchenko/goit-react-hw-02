import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';
import Counter from './Counter';
import Publication from './Publication';
import styles from './Reader.module.css';

export default class Reader extends Component {
  static defaultProps = {
    step: 1,
    index: 0,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
    step: PropTypes.number,
    index: PropTypes.number,
  };

  state = {
    value: this.props.index,
  };

  handleIncrement = () => {
    this.setState(state => ({
      value: state.value + this.props.step,
    }));
  };

  handleDecrement = () => {
    this.setState(state => ({
      value: state.value - this.props.step,
    }));
  };

  render() {
    const { items } = this.props;
    const { value } = this.state;
    const lastArticle = items.length;

    return (
      <div className={styles.reader}>
        <Publication item={items[value]} />
        <Counter articleNumber={value + 1} articlesLength={lastArticle} />
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
          currentPage={value}
          lastPage={lastArticle}
        />
      </div>
    );
  }
}
