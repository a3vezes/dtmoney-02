import { useState } from 'react';
import Modal from 'react-modal';
import closeImg  from '../../assets/close.svg';
import incomeImg  from '../../assets/income.svg';
import outcomeImg  from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button type='button' onClick={onRequestClose} className='react-modal-close'>
      <img src={closeImg} alt="Close Modal" />

      </button>
      <Container>
        <h2>Cadastrar Nova Transacao</h2>
        <input type='text' placeholder='Titulo' />
        <input type='number' placeholder='Valor' />

        <TransactionTypeContainer>
          <RadioBox 
            type='button'
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="Income" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type='button'
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type='text' placeholder='Categoria' />
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
