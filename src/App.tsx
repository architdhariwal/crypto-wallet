import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import WalletComponent from './components/WalletComponent';
import TransactionComponent from './components/TransactionComponent';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled.main`
  flex: 3;
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <ContentContainer>
          <Sidebar />
          <MainContent>
            <Routes>
              <Route path="/wallet" element={<WalletComponent />} />
              <Route path="/transactions" element={<TransactionComponent />} />
              <Route path="/" element={<Navigate replace to="/wallet" />} />
            </Routes>
          </MainContent>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
};

export default App;