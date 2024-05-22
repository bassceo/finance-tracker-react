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

function getInitState () {
  if (loadStateFromLocalStorage() !== undefined) {
    return loadStateFromLocalStorage().transactions;
  }else {
    return [];
  }
}



const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: getInitState (),
  reducers: {
    addTransaction: (state, action) => {
      const { date, desc, category, amount, accountId } = action.payload;
      const id = state.length + 1;  // TODO: потом исправить и вообще это на беке должно быть)
      state.push({ id, date: Date.now(), description: desc, category, amount: parseInt(amount), accountId: parseInt(accountId) });
    }
  }
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
