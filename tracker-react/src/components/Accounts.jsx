import { Button, Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import './styles/Accounts.css';
import { PieChart } from '@mui/x-charts/PieChart';

import {getAccountsData} from '../features/dataApi/AccountsData'

const Accounts = () => {
    const accountsData = getAccountsData();

    const columns = [
        { field: 'id', headerName: '#', width: 100 },
        { field: 'name', headerName: 'Название счета', width: 250 },
        { field: 'type', headerName: 'Тип счета', width: 150 },
        { field: 'balance', headerName: 'Баланс', width: 150, type: 'number', renderCell: (params) => (
            <>{ params.row.balance } ₽ </> )    },
        {
            field: 'transactions',
            headerName: 'Транзакции счёта',
            width: 150,
            renderCell: (params) => (
                <a className="button link_to" href={`/transactions?account_id=${params.row.id}`}>Перейти</a>
            ),
        },
    ];

    const rows = accountsData.map(account => ({
        id: account.id,
        name: account.name,
        type: account.type,
        balance: account.balance
    }));

    return (
        <Container className='container' maxWidth={false}>
            <Container className="pieChart"><PieChart 
                series={[
                    {
                    data: accountsData.map((account) => {
                        return {...account, value: account.balance, label: account.name};
                    }),
                    },
                ]}
                // width={600}  
                height={500}

            /></Container>
            <div className="head">
                <h2 className="heading">Счета</h2>
                <div className="buttons">
                <Button variant="contained" className="button" onClick={() => console.log('Добавить счет')}>
                    Добавить счет
                </Button>
                <Button variant="contained" className="button" onClick={() => console.log('Добавить счет')}>
                    Объеденить счета
                </Button>
                <Button variant="contained" className="button" onClick={() => console.log('Добавить счет')}>
                    Перевести средства между счетами
                </Button>
                </div>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </Container>
    );
};

export default Accounts;
