import { DataGrid } from '@mui/x-data-grid';

const AccountTable = ({ accounts }) => {
    const columns = [
        { field: 'id', headerName: '#', width: 100 },
        { field: 'name', headerName: 'Название счета', width: 250 },
        { field: 'type', headerName: 'Тип счета', width: 150 },
        { field: 'balance', headerName: 'Баланс', width: 150, type: 'number', renderCell: (params) => (<>{params.row.balance} ₽</>) },
        {
            field: 'transactions',
            headerName: 'Транзакции счёта',
            width: 150,
            renderCell: (params) => (
                <a className="button link_to" href={`/transactions?account_id=${params.row.id}`}>Перейти</a>
            ),
        },
    ];

    const rows = accounts.map(account => ({
        id: account.id,
        name: account.name,
        type: account.type,
        balance: account.balance,
    }));

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                // checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};

export default AccountTable;
