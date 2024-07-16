import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaWallet, FaExchangeAlt } from 'react-icons/fa';

const SidebarContainer = styled.aside`
  flex: 1;
  background-color: ${props => props.theme.colors.secondary};
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text};
  padding: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.hover};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.activeBackground};
  }

  svg {
    margin-right: 10px;
  }
`;

const SupportButton = styled.button`
  margin-top: auto;
  background-color: ${props => props.theme.colors.support};
  border: none;
  color: ${props => props.theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  transition: background-color 0.3s ease;
  width: 100%;
  border-radius: 5px;

  &:hover {
    background-color: ${props => props.theme.colors.hover};
  }
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <MenuItem to="/wallet">
        <FaWallet /> Wallet
      </MenuItem>
      <MenuItem to="/transactions">
        <FaExchangeAlt /> Last Transactions
      </MenuItem>
      <SupportButton>
        Support
      </SupportButton>
    </SidebarContainer>
  );
};

export default Sidebar;