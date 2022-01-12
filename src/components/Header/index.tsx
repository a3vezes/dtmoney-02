import logoImg from '../../assets/logo.svg';
import { Container, Content, NewTransactionBtn } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='dt money' />
        <NewTransactionBtn type='button' onClick={onOpenNewTransactionModal}>
          Nova Transação
        </NewTransactionBtn>
      </Content>
    </Container>
  );
}
