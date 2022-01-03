import logoImg from '../../assets/logo.svg';
import { Container, Content, NewTransactionBtn } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='dt money' />
        <NewTransactionBtn type='button'>Nova Transação</NewTransactionBtn>
      </Content>
    </Container>
  );
}
