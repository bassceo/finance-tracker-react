// Transactions.js
import { useState, useMemo } from 'react';
import { Button, Container, Grid } from '@mui/material';
import { useLocation } from 'react-router';
import { DataGrid } from '@mui/x-data-grid';
// import { getTransactionsData, addTransaction } from '../features/dataApi/TransactionsData';
// import { getAccountName, getAccountsData } from '../features/dataApi/AccountsData';
import TransactionDialog from './utils/TransactionDialog';
import SummaryContainer from './utils/SummaryContainer';
import TransactionsTable from './utils/TransactionsTable';
import ExpensesByCategory from './utils/ExpensesByCategory';
import TopIncomes from './utils/TopIncomes';
import './styles/Accounts.css';
import { useSelector } from 'react-redux';



function getAccountName(accounts, id){
    return accounts.find(account => account.id===parseInt(id)).name;
}

const Transactions = () => {
    const accounts = useSelector(state => state.accounts);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const accountIdParam = queryParams.get('account_id');
    const [accountId, setAccountId] = useState(accountIdParam);
    const [modalActive, setModalActive] = useState(false);
    const transactions = useSelector(state => state.transactions).map(transaction => ({
        ...transaction,
        account: getAccountName(accounts, transaction.accountId),
        date: new Date(transaction.date)
    }));

    const openModal = () => setModalActive(true);
    const closeModal = () => setModalActive(false);

    const columns = [
        { field: 'id', headerName: '#', width: 100 },
        { field: 'amount', headerName: 'Сумма (₽)', width: 150, renderCell: (params) => (<>{params.row.amount} ₽</>) },
        { field: 'date', type: 'date', headerName: 'Дата', width: 150 },
        { field: 'category', headerName: 'Категория', width: 150 },
        { field: 'account', headerName: 'Счет', width: 200, renderCell: (params) => (<a className="button link_to" href={`/transactions?account_id=${params.row.accountId}`}>{params.row.account}</a>) },
        { field: 'description', headerName: 'Описание', width: 250 }
    ];

    const refreshTransactions = () => {
        // setTransactions(getTransactionsData(1).map(transaction => ({
        //     ...transaction,
        //     account: getAccountName(transaction.accountId),
        // })));
    };

    return (
        <Container className='container' maxWidth={false}>
            <Grid container spacing={1}>
                <SummaryContainer transactions={transactions} />
                <ExpensesByCategory transactions={transactions} />
                <TopIncomes transactions={transactions} />
            </Grid>

            <div className="head">
                <h2 className="heading">Транзакции</h2>
                <div className="buttons">
                    <Button variant="contained" className="button" onClick={openModal}>
                        Добавить транзакцию
                    </Button>
                    {/* <Button variant="contained" className="button">
                        Добавить категорию
                    </Button>
                    <Button variant="contained" className="button">
                        Создать отчёт
                    </Button> */}
                </div>
            </div>

            <TransactionsTable transactions={transactions} columns={columns} />

            <TransactionDialog open={modalActive} onClose={closeModal} onTransactionAdded={refreshTransactions} />
        </Container>
    );
};

export default Transactions;
