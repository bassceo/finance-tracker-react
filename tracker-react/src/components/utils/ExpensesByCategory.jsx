import { Container } from '@mui/material';
import { PieChart } from '@mui/x-charts';

function calculateCategorySum(transactions) {
    const categorySums = {};
    transactions.forEach(transaction => {
        if (categorySums.hasOwnProperty(transaction.category)) {
            categorySums[transaction.category] += transaction.amount;
        } else {
            categorySums[transaction.category] = transaction.amount;
        }
    });
    return categorySums;
}

const ExpensesByCategory = ({ transactions }) => {
    const categorySums = calculateCategorySum(transactions);
    const dataChart = Object.keys(categorySums).filter(key => key !== 'Доход').map(key => ({
        value: Math.abs(categorySums[key]),
        label: key
    }));

    return (
        <>        
            <Container className='summaryContainer' maxWidth={false}>
                <h3>Расходы по категориям:</h3>
                <ul>
                    {dataChart.map(category => (
                        <li key={category.label}>{category.label}: {category.value} руб.</li>
                    ))}
                </ul>
            </Container>
            <Container className='summaryContainer' maxWidth={false}>
                <PieChart series={[{ data: dataChart }]} width={400} height={200} />
            </Container>
        </>
    );
};

export default ExpensesByCategory;