import { Container } from '@mui/material';

const SummaryContainer = ({ transactions }) => {
    const totalIncome = transactions.reduce((total, transaction) => transaction.amount > 0 ? total + transaction.amount : total, 0);
    const totalExpenses = transactions.reduce((total, transaction) => transaction.amount < 0 ? total - transaction.amount : total, 0);
    const netBalance = totalIncome - totalExpenses;

    return (
        <Container className='summaryContainer' maxWidth={false}>
            <h3>Период: Май 2024</h3>
            <p>Общее количество транзакций: {transactions.length}</p>
            <p>Общая сумма расходов: {totalExpenses} руб.</p>
            <p>Общая сумма доходов: {totalIncome} руб.</p>
            <p>Чистый баланс: {netBalance} руб.</p>
        </Container>
    );
};

export default SummaryContainer;
