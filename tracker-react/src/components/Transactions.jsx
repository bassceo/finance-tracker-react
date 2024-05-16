import { useMemo, useState } from 'react';
import { Button, Container, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {LineChart, PieChart } from '@mui/x-charts';
import { useLocation } from 'react-router';
import './styles/Accounts.css';
import Grid from '@mui/material/Grid';
import getTransactionsData from '../features/dataApi/TransactionsData';
import {getAccountName, getAccountsSum} from '../features/dataApi/AccountsData';

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


const Transactions = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let yourParam = queryParams.get('account_id');
    const [accountId, setAccountId] = useState(yourParam);
    
    const transactions = getTransactionsData(1).map(transaction => {
        return {...transaction, account: getAccountName(transaction.accountId)};
    });    
    


    const columns = [
        { field: 'id', headerName: '#', width: 100 },
        { field: 'amount', headerName: 'Сумма (₽)', width: 150, renderCell: (params) => (
            <>{ params.row.amount } ₽ </> )   
        },
        { field: 'date', type:'date', headerName: 'Дата', width: 150},
        { field: 'category', headerName: 'Категория', width: 150 },
        { field: 'account', headerName: 'Счет', width: 200, renderCell: (params) => (
            <a className="button link_to" href={`/transactions?account_id=${params.row.accountId}`}> {params.row.account}</a>
        ) },
        { field: 'description', headerName: 'Описание', width: 250 }
    ];

    let id = 1;

    function getId(){
        return id++;
    }

    let keys = Object.keys(calculateCategorySum(transactions));

    let dataChart = keys.filter(key => key !== 'Доход').map(key => {
        return {id:getId(),value: Math.abs(calculateCategorySum(transactions)[key]), label: key}});

    return (
        <Container className='container' maxWidth={false}>
            <Grid container spacing={1} >
                {/* <LineChart
                    xAxis={[{ id: "date", scaleType: 'point', data: transactions.filter(transaction => {return transaction.amount>0}).map(transaction => {return transaction.date})}]}
                    series={[
                        {
                        data: transactions.filter(transaction => {return transaction.amount>0}).map(transaction => {return transaction.amount}),
                        area: true,
                        label: 'Доходы'
                        },
                    ]}
                    width={500}
                    height={300}
                /> */}
                <Container className='summaryContainer' maxWidth={false}>
                    <h3>Период: Май 2024</h3>
                    <p>Общее количество транзакций: {transactions.length}</p>
                    <p>Общая сумма расходов: {transactions.reduce((total, transaction) => transaction.amount < 0 ? total - transaction.amount : total, 0)} руб.</p>
                    <p>Общая сумма доходов: {transactions.reduce((total, transaction) => transaction.amount > 0 ? total + transaction.amount : total, 0)} руб.</p>
                    <p>Чистый баланс: {transactions.reduce((total, transaction) => transaction.amount > 0 ? total + transaction.amount : total, 0)-transactions.reduce((total, transaction) => transaction.amount < 0 ? total - transaction.amount : total, 0)} руб.</p>
                </Container>
                <Container className='summaryContainer' maxWidth={false}>
                    <h3>Расходы по категориям:</h3>
                    <ul>
                    {dataChart.map(category => {
                        return <li key={category.id}>{category.label}: {category.value} руб.</li>;
                    })
                    }
                    </ul>
                    
                </Container>
                {/* <LineChart
                    xAxis={[{labelFontSize:10,
                        tickFontSize:10, id: "date", scaleType: 'point', data: transactions.filter(transaction => {return transaction.amount<0}).map(transaction => {return transaction.date})}]}
                    series={[
                        {
                        data: transactions.filter(transaction => {return transaction.amount<0}).map(transaction => {return -transaction.amount}),
                        area: true,
                        color: 'blue',
                        label: 'Траты',
                        labelFontSize:10,
                        tickFontSize:10
                        },
                    ]}
                    width={500}
                    height={300}
                /> */}
            </Grid>

            <Grid container spacing={1} >
                <Container className='summaryContainer' maxWidth={false}>
                        <h3>Топ доходов:</h3>
                        <ul>
                            {transactions.filter(transaction => transaction.amount>0)
                            .slice() // Создаём копию массива, чтобы не изменять исходный
                            .sort((a, b) => b.amount - a.amount) // Сортировка по убыванию суммы
                            .slice(0,5).map(transaction => (
                            <li key={transaction.id}>
                                {transaction.description}: {transaction.amount} руб.
                            </li>
                            ))}
                        </ul>
                        
                </Container>
                <Container className='summaryContainer' maxWidth={false }>
                    <PieChart 
                                    series={[
                                        {
                                        data: dataChart
                                        }
                                    ]
                                    }
                                    width={400}  
                                    height={200}
                                />
                </Container>
                
                {/* <LineChart
                    xAxis={[{
                        scaleType: 'point',
                        data: transactions.map(transaction => {return transaction.date}).slice(-10)
                    }]}
                    series={keys.map(key => {
                        return {id:key, data: transactions.map(transaction => {return transaction.date}).slice(-10).map(date => {
                            let amountSumm = 0;
                            transactions.filter(transaction => transaction.category===key).filter(transaction => transaction.date===date).map(transaction => {amountSumm += Math.abs(transaction.amount)})
                            return amountSumm
                        }),
                        area: true,
                        label: key}
                    })}
                    width={500}
                    height={300}
                /> */}
            </Grid>
            
            <div className="head">
                <h2 className="heading">Транзакции</h2>
                <div className="buttons">
                <Button variant="contained" className="button" onClick={() => console.log('Добавить счет')}>
                    Добавить транзакцию
                </Button>
                <Button variant="contained" className="button" onClick={() => console.log('Добавить счет')}>
                    Добавить категорию
                </Button>
                <Button variant="contained" className="button" onClick={() => console.log('Добавить счет')}>
                    Создать отчёт
                </Button> 
                </div>
            </div>
            <DataGrid
                    rows={transactions}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    checkboxSelection
                    disableSelectionOnClick
                />
        </Container>
    );
};

export default Transactions;
