import { Container } from '@mui/material';

const TopIncomes = ({ transactions }) => {
    const topIncomes = transactions.filter(transaction => transaction.amount > 0)
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 5);

    return (
        <Container className='summaryContainer' maxWidth={false}>
            <h3>Топ доходов:</h3>
            <ul>
                {topIncomes.map(transaction => (
                    <li key={transaction.id}>
                        {transaction.description}: {transaction.amount} руб.
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default TopIncomes;