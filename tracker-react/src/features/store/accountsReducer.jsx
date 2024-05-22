// accountsReducer.js
import { createSlice } from '@reduxjs/toolkit';

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state from localStorage', err);
    return undefined;
  }
};

// console.log(loadStateFromLocalStorage());


function getInitState () {
  if (loadStateFromLocalStorage() !== undefined) {
    return loadStateFromLocalStorage().accounts;
  }else {
    return [];
  }
}



const accountsSlice = createSlice({
  name: 'accounts',
  initialState: getInitState(),
  reducers: {
    addAccountToStore: (state, action) => {


      const { name, type, balance } = action.payload;
      const id = state.length + 1; // TODO: потом исправить и вообще это на беке должно быть)
      state.push({ id, name, type, balance: parseInt(balance) });

    },
    transitMoneyToStore: (state, action) => {
      const { accountIdFrom, accountIdTo, amount } = action.payload;
      const fromAccount = state.find(account => account.id === parseInt(accountIdFrom));
      const toAccount = state.find(account => account.id ===  parseInt(accountIdTo));
      fromAccount.balance -= parseInt(amount);
      toAccount.balance += parseInt(amount);

    }
  }
});

export const { addAccountToStore, transitMoneyToStore } = accountsSlice.actions;
export default accountsSlice.reducer;