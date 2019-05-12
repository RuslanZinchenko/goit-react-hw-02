import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';

export default class Modal extends Component {
  static defaultProps = {
    text: 'Sorry! Is ERROR!',
  };

  static propTypes = {
    text: PropTypes.string,
    onClose: PropTypes.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && current !== e.target) return;

    this.props.onClose();
  };

  render() {
    const { text, onClose } = this.props;
    return (
      <backDrop ref={this.backdropRef} onClick={this.handleBackdropClick}>
        <div className={styles.content}>
          <p className={styles.text}>{text}</p>
          <button
            className={styles.buttonBackdrop}
            type="button"
            onClick={onClose}
          >
            close
          </button>
        </div>
      </backDrop>
    );
  }
}
