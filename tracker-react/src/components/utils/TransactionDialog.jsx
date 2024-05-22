// TransactionDialog.js
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Select, MenuItem } from '@mui/material';
// import { getAccountsData, getAccountName } from '../../features/dataApi/AccountsData';
import { addTransaction } from '../../features/store/transactionsReducer';

import { useSelector, useDispatch } from 'react-redux';


const TransactionDialog = ({ open, onClose, onTransactionAdded }) => {
    const dispatch = useDispatch ();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const obj = Object.fromEntries(formData.entries());
        dispatch(addTransaction(obj));
        onTransactionAdded();
        onClose();
    };

    const accounts = useSelector(state => state.accounts);

    return (
        <Dialog open={open} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>Создать транзакцию</DialogTitle>
                <DialogContent>
                    <TextField id='category' name='category' label="Категория" variant="outlined" fullWidth margin="normal" />
                    <Select id="accountId" name="accountId" label="Счёт" fullWidth margin="normal">
                        {accounts.map(account => <MenuItem key={account.id} value={account.id}>{account.name}</MenuItem>)}
                    </Select>
                    <TextField type='number' id='amount' name='amount' label="Транзакция в рублях" variant="outlined" fullWidth margin="normal" />
                    <TextField id='desc' name='desc' label="Описание" variant="outlined" fullWidth margin="normal" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} variant="contained">Обратно</Button>
                    <Button type="submit" variant="contained">Отправить</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default TransactionDialog;
