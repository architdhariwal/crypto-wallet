import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
  id: string;
  date: string;
  time: string;
  walletId: string;
  amount: number;
  type: 'RECEIVED' | 'SENT';
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
}

interface TransactionState {
  transactions: Transaction[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TransactionState = {
  transactions: [],
  status: 'idle',
  error: null,
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },
    setTransactions: (state, action: PayloadAction<Transaction[]>) => {
      state.transactions = action.payload;
    },
    setTransactionStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.status = action.payload;
    },
    setTransactionError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addTransaction, setTransactions, setTransactionStatus, setTransactionError } = transactionSlice.actions;

export default transactionSlice.reducer;