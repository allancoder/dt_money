import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';



export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="Incomes icon" />
        </header>
        <strong>R$5000,00</strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="Outcomes icon" />
        </header>
        <strong>- R$2000,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total icon" />
        </header>
        <strong>R$3000,00</strong>
      </div>
    </Container>
  );
}
