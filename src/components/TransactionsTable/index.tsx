import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';


export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Web site development</td>
            <td className='deposit'>R$2350,00</td>
            <td>Service</td>
            <td>30/02/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className='withdraw'>- R$1850,00</td>
            <td>Cost</td>
            <td>05/02/2021</td>
          </tr>
          <tr>
            <td>Web site development</td>
            <td className='deposit'>R$5050,00</td>
            <td>Service</td>
            <td>15/02/2021</td>
          </tr>
          <tr>
            <td>MC Donald's</td>
            <td className='withdraw'>- R$50,00</td>
            <td>Food</td>
            <td>15/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
