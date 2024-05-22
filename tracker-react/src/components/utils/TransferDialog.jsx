import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Select, MenuItem, TextField } from '@mui/material';
import { transitMoneyToStore } from '../../features/store/accountsReducer.jsx';
import { useSelector, useDispatch } from 'react-redux';


const TransferDialog = ({ open, onClose, onTransferMade }) => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const obj = Object.fromEntries(formData.entries());
        console.log(obj);
        dispatch(transitMoneyToStore(obj));
        onTransferMade();
        onClose();
    };

    const accounts = useSelector(state => state.accounts);

    return (
        <Dialog open={open} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>Перевести средства</DialogTitle>
                <DialogContent>
                    <Select id="accountIdFrom" name="accountIdFrom" label="Откуда" fullWidth margin="normal">
                        {accounts.map(account => <MenuItem key={account.id} value={account.id}>{account.name}</MenuItem>)}
                    </Select>
                    <Select id="accountIdTo" name="accountIdTo" label="Куда" fullWidth margin="normal">
                        {accounts.map(account => <MenuItem key={account.id} value={account.id}>{account.name}</MenuItem>)}
                    </Select>
                    <TextField type='number' id='amount' name='amount' label="Транзакция в рублях" variant="outlined" fullWidth margin="normal" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} variant="contained">Обратно</Button>
                    <Button type="submit" variant="contained">Перевести</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default TransferDialog;
