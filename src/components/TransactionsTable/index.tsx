import { useEffect } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions').then((res) => console.log(res.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>01/01/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>01/01/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='withdraw'>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>01/01/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='deposit'>- R$12.000</td>
            <td>Desenvolvimento</td>
            <td>01/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
