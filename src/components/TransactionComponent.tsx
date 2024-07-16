import React from 'react';
import styled from 'styled-components';
import { FaBitcoin, FaArrowDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const TransactionContainer = styled.div`
  color: ${props => props.theme.colors.text};
`;

const TotalTransactions = styled.h2`
  color: ${props => props.theme.colors.textSecondary};
`;

const TransactionList = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TransactionHeader = styled.thead`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textSecondary};
`;

const TransactionRow = styled.tr`
  background-color: ${props => props.theme.colors.secondary};
`;

const TransactionCell = styled.td`
  padding: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TransactionComponent: React.FC = () => {
  const wallets = useSelector((state: RootState) => state.wallet.wallets);

  const transactions = wallets.map(wallet => ({
    id: wallet.id,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    walletName: wallet.name,
    amount: wallet.balance,
    type: 'RECEIVED' as const,
    status: 'SUCCESS' as const
  }));

  return (
    <TransactionContainer>
      <h1>Transactions</h1>
      <TotalTransactions>Total Transactions: {transactions.length}</TotalTransactions>
      <TransactionList>
        <TransactionHeader>
          <tr>
            <th>Coins</th>
            <th>Wallet</th>
            <th>Amount</th>
            <th>Result</th>
            <th>Status</th>
          </tr>
        </TransactionHeader>
        <tbody>
          {transactions.map(transaction => (
            <TransactionRow key={transaction.id}>
              <TransactionCell>
                <IconContainer>
                  <FaBitcoin />
                  <DateTimeContainer>
                    <div>{transaction.date}</div>
                    <div>{transaction.time}</div>
                  </DateTimeContainer>
                </IconContainer>
              </TransactionCell>
              <TransactionCell>{transaction.walletName}</TransactionCell>
              <TransactionCell>{transaction.amount.toFixed(8)} BTC</TransactionCell>
              <TransactionCell>
                <IconContainer>
                  <FaArrowDown /> {transaction.type}
                </IconContainer>
              </TransactionCell>
              <TransactionCell>{transaction.status}</TransactionCell>
            </TransactionRow>
          ))}
        </tbody>
      </TransactionList>
    </TransactionContainer>
  );
};

export default TransactionComponent;