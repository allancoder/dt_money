import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((accumulator, transaction) => {

    if (transaction.type === 'income') {
      accumulator.income += transaction.amount;
      accumulator.total += transaction.amount;
    } else {
      accumulator.outcome += transaction.amount;
      accumulator.total -= transaction.amount;
    }

    return accumulator;
  }, {
    income: 0,
    outcome: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="Incomes icon" />
        </header>
        <strong>
          {new Intl.NumberFormat('En', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.income)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="Outcomes icon" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('En', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.outcome)}
        </strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total icon" />
        </header>
        <strong>
          {new Intl.NumberFormat('En', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
