import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Wallet {
  id: string;
  name: string;
  balance: number;
  createdAt: string;
}

interface WalletState {
  wallets: Wallet[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: WalletState = {
  wallets: [],
  status: 'idle',
  error: null,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    addWallet: (state, action: PayloadAction<Omit<Wallet, 'createdAt'>>) => {
      state.wallets.push({
        ...action.payload,
        createdAt: new Date().toISOString()
      });
    },
    removeWallet: (state, action: PayloadAction<string>) => {
      state.wallets = state.wallets.filter(wallet => wallet.id !== action.payload);
    },
    updateWalletBalance: (state, action: PayloadAction<{ id: string; balance: number }>) => {
      const wallet = state.wallets.find(w => w.id === action.payload.id);
      if (wallet) {
        wallet.balance = action.payload.balance;
      }
    },
    setWalletStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.status = action.payload;
    },
    setWalletError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addWallet, removeWallet, updateWalletBalance, setWalletStatus, setWalletError } = walletSlice.actions;

export default walletSlice.reducer;