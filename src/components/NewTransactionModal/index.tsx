import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';

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
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState(0);

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      type,
      title,
      category,
      value,
    };

    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt='Close Modal' />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Nova Transacao</h2>
        <input
          type='text'
          placeholder='Titulo'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type='number'
          placeholder='Valor'
          value={value}
          onChange={(event) => setValue(+event.target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            isActive={type === 'deposit'}
            activeColor='green'
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt='Income' />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            isActive={type === 'withdraw'}
            activeColor='red'
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt='Outcome' />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type='text'
          placeholder='Categoria'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
