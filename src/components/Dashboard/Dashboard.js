import React, { Component, createRef } from 'react';
import shortid from 'shortid';
import Controls from './Controls';
import Balance from './Balance';
import TransactionHistory from './TransactionHistory';
import Operations from '../../utils/Operations';
import Modal from './Modal';
import styles from './Dashboard.module.css';

export default class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
    isModalOpen: false,
    errorMessage: '',
  };

  modalRef = createRef();

  componentDidMount() {
    const localStorageHistory = JSON.parse(localStorage.getItem('history'));
    if (localStorageHistory) {
      const { balance } = this.state;
      const newBalance = this.countBalanceFirstLoad(
        localStorageHistory,
        balance,
      );

      this.setState({ history: localStorageHistory, balance: newBalance });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { history } = this.state;

    if (prevState.history !== history) {
      localStorage.setItem('history', JSON.stringify(history));
    }
  }

  openModal = err => {
    this.setState({ isModalOpen: true });
    this.setErrorText(err);
  };

  setErrorText = err => {
    this.setState({ errorMessage: err });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleAddTransaction = (value, type) => {
    const transaction = {
      id: shortid.generate(),
      type,
      amount: value,
      date: new Date().toLocaleString(),
    };

    if (type === Operations.DEPOSIT) this.plusBalance(value);
    if (type === Operations.WITHDRAW) this.minusBalance(value);

    this.setState(state => ({ history: [...state.history, transaction] }));
  };

  minusBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }));
  };

  plusBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance + value,
    }));
  };

  countBalanceByType = (history, type) => {
    return history.reduce((acc, item) => {
      let total = acc;

      total += item.type === type ? item.amount : 0;

      return total;
    }, 0);
  };

  countBalanceFirstLoad = (history, balance) => {
    return history.reduce((acc, item) => {
      let total = acc;

      total += item.type === Operations.DEPOSIT ? item.amount : 0;
      total -= item.type === Operations.WITHDRAW ? item.amount : 0;

      return total;
    }, balance);
  };

  render() {
    const { history, balance, isModalOpen, errorMessage } = this.state;
    const profitBalance = this.countBalanceByType(history, Operations.DEPOSIT);
    const expenseBalance = this.countBalanceByType(
      history,
      Operations.WITHDRAW,
    );

    return (
      <div className={styles.dashboard}>
        {isModalOpen && <Modal text={errorMessage} onClose={this.closeModal} />}
        <Controls
          handleAddTransaction={this.handleAddTransaction}
          balance={balance}
          onOpenModal={this.openModal}
        />
        <Balance
          balance={balance}
          income={profitBalance}
          expenses={expenseBalance}
        />
        <TransactionHistory items={history} />
      </div>
    );
  }
}
