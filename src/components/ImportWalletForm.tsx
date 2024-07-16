// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
// import { addWallet } from '../store/walletSlice';
// import { v4 as uuidv4 } from 'uuid';
// import { FaTimes } from 'react-icons/fa';

// const FormContainer = styled.div`
//   background-color: ${props => props.theme.colors.secondary};
//   padding: 20px;
//   margin-top: 20px;
//   position: relative;
// `;

// const FormHeader = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const Title = styled.h2`
//   margin: 0;
// `;

// const CloseButton = styled.button`
//   background: none;
//   border: none;
//   color: ${props => props.theme.colors.text};
//   cursor: pointer;
//   font-size: 1.5em;
//   position: absolute;
//   right: 20px;
//   top: 20px;
// `;

// const InputGroup = styled.div`
//   margin-bottom: 15px;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 5px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   background-color: ${props => props.theme.colors.textSecondary};
//   border: none;
//   color: ${props => props.theme.colors.text};
// `;

// const Button = styled.button`
//   background-color: ${props => props.theme.colors.primary};
//   color: ${props => props.theme.colors.background};
//   border: none;
//   padding: 10px 20px;
//   cursor: pointer;
//   display: block;
//   margin: 20px auto 0;
// `;

// interface ImportWalletFormProps {
//   onClose: () => void;
// }

// const ImportWalletForm: React.FC<ImportWalletFormProps> = ({ onClose }) => {
//   const [walletName, setWalletName] = useState('');
//   const [mnemonic, setMnemonic] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(addWallet({
//       id: uuidv4(),
//       name: walletName,
//       balance: Math.random() * 1, // Random balance between 0 and 1 BTC
//     }));
//     onClose();
//   };

//   return (
//     <FormContainer>
//       <FormHeader>
//         <Title>Import Wallet</Title>
//       </FormHeader>
//       <CloseButton onClick={onClose}><FaTimes /></CloseButton>
//       <form onSubmit={handleSubmit}>
//         <InputGroup>
//           <Label htmlFor="walletName">Wallet Name</Label>
//           <Input 
//             id="walletName"
//             type="text" 
//             value={walletName}
//             onChange={(e) => setWalletName(e.target.value)}
//           />
//         </InputGroup>
//         <InputGroup>
//           <Label htmlFor="mnemonic">Mnemonic</Label>
//           <Input 
//             id="mnemonic"
//             type="text" 
//             value={mnemonic}
//             onChange={(e) => setMnemonic(e.target.value)}
//           />
//         </InputGroup>
//         <Button type="submit">Submit</Button>
//       </form>
//     </FormContainer>
//   );
// };

// export default ImportWalletForm;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addWallet } from '../store/walletSlice';
import { v4 as uuidv4 } from 'uuid';
import { FaTimes } from 'react-icons/fa';

const FormContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: 20px;
  margin-top: 20px;
  position: relative;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-size: 1.5em;
  position: absolute;
  right: 20px;
  top: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.colors.textSecondary};
  border: none;
  color: ${props => props.theme.colors.text};
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  display: block;
  margin: 20px auto 0;
`;

interface ImportWalletFormProps {
  onClose: () => void;
}

const ImportWalletForm: React.FC<ImportWalletFormProps> = ({ onClose }) => {
  const [walletName, setWalletName] = useState('');
  const [mnemonic, setMnemonic] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addWallet({
      id: uuidv4(),
      name: walletName,
      balance: Math.random() * 1, // Random balance between 0 and 1 BTC
    }));
    onClose();
  };

  return (
    <FormContainer>
      <FormHeader>
        <Title>Import Wallet</Title>
      </FormHeader>
      <CloseButton onClick={onClose}><FaTimes /></CloseButton>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="walletName">Wallet Name</Label>
          <Input 
            id="walletName"
            type="text" 
            value={walletName}
            onChange={(e) => setWalletName(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="mnemonic">Mnemonic</Label>
          <Input 
            id="mnemonic"
            type="text" 
            value={mnemonic}
            onChange={(e) => setMnemonic(e.target.value)}
          />
        </InputGroup>
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default ImportWalletForm;