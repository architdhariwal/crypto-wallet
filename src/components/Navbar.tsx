import React from 'react';
import styled from 'styled-components';
import { FaSync } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  background-color: ${props => props.theme.colors.background};
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
`;

const SyncButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <SyncButton>
        <FaSync /> Synced
      </SyncButton>
    </NavbarContainer>
  );
};

export default Navbar;