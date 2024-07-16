import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus, FaBitcoin, FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeWallet } from '../store/walletSlice';
import ImportWalletForm from './ImportWalletForm';

const WalletContainer = styled.div`
  color: ${props => props.theme.colors.text};
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ImportButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const ImportButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const TotalCoins = styled.h2`
  color: ${props => props.theme.colors.textSecondary};
  margin: 0;
`;

const WalletList = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const WalletHeader = styled.thead`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textSecondary};
`;

const WalletRow = styled.tr`
  background-color: ${props => props.theme.colors.secondary};
`;

const WalletCell = styled.td`
  padding: 10px;
`;

const WalletHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
`;

const WalletComponent: React.FC = () => {
  const [showImportForm, setShowImportForm] = useState(false);
  const wallets = useSelector((state: RootState) => state.wallet.wallets);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeWallet(id));
  };

  const totalWallets = wallets.length;

  return (
    <WalletContainer>
      <TopSection>
        <ImportButtonWrapper>
          <ImportButton onClick={() => setShowImportForm(true)}>
            <FaPlus /> Import Wallet
          </ImportButton>
        </ImportButtonWrapper>
        <TotalCoins>Total Coins: {totalWallets}</TotalCoins>
      </TopSection>
      {showImportForm && <ImportWalletForm onClose={() => setShowImportForm(false)} />}
      <WalletList>
        <WalletHeader>
          <tr>
            <WalletHeaderCell>Coins</WalletHeaderCell>
            <WalletHeaderCell>Holding</WalletHeaderCell>
            <WalletHeaderCell>Actions</WalletHeaderCell>
          </tr>
        </WalletHeader>
        <tbody>
          {wallets.map(wallet => (
            <WalletRow key={wallet.id}>
              <WalletCell><FaBitcoin /> {wallet.name}</WalletCell>
              <WalletCell>BTC {wallet.balance.toFixed(8)}</WalletCell>
              <WalletCell>
                <ActionButton onClick={() => handleDelete(wallet.id)}><FaTrash /></ActionButton>
              </WalletCell>
            </WalletRow>
          ))}
        </tbody>
      </WalletList>
    </WalletContainer>
  );
};

export default WalletComponent;