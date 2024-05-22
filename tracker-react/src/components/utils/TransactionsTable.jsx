import { DataGrid } from '@mui/x-data-grid';

const TransactionsTable = ({ transactions, columns }) => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={transactions}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};

export default TransactionsTable;