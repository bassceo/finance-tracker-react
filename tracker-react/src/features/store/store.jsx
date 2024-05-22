import { configureStore } from '@reduxjs/toolkit';
import accountsReducer from './accountsReducer';
import transactionsReducer from './transactionsReducer';

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('smartMoneyPlanner');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state from localStorage', err);
    return undefined;
  }
};


const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Could not save state to localStorage', err);
  }
};


const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    saveStateToLocalStorage(getState());
    return result;
  };
};


const preloadedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    transactions: transactionsReducer
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware)
});

export {store, loadStateFromLocalStorage};
