// AccountDialog.js
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Select, MenuItem } from '@mui/material';
// import { addAccount, getAccountsData } from '../../features/dataApi/AccountsData';
import { addAccountToStore } from '../../features/store/accountsReducer'
import { useDispatch } from 'react-redux';

const AccountDialog = ({ open, onClose, onAccountAdded }) => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('lol')

        const formData = new FormData(event.currentTarget);
        const obj = Object.fromEntries(formData.entries());
        console.log(obj);
        dispatch(addAccountToStore(obj));

        onAccountAdded();
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>Создать счёт</DialogTitle>
                <DialogContent>
                    <TextField id='name' name='name' label="Название счёта" variant="outlined" fullWidth margin="normal" />
                    <Select id="type" name="type" label="Тип" fullWidth margin="normal">
                        <MenuItem value={'Расчетный'}>Расчетный</MenuItem>
                        <MenuItem value={'Сберегательный'}>Сберегательный</MenuItem>
                        <MenuItem value={'Кредитный'}>Кредитный</MenuItem>
                        <MenuItem value={'Инвестиционный'}>Инвестиционный</MenuItem>
                    </Select>
                    <TextField type='number' id='balance' name='balance' label="Баланс в рублях" variant="outlined" fullWidth margin="normal" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} variant="contained">Обратно</Button>
                    <Button type="submit" variant="contained">Отправить</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default AccountDialog;
