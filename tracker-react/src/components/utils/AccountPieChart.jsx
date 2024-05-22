import { Container } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const AccountPieChart = ({ accounts }) => {
    const series = accounts.map(account => ({
        ...account,
        value: account.balance,
        label: account.name,
    }));

    return (
        <Container className="pieChart">
            <PieChart
                series={[{ data: series }]}
                height={500}
            />
        </Container>
    );
};

export default AccountPieChart;
