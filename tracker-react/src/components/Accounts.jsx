import { Container, Button } from '@mui/material';
import { useState } from 'react';
import AccountDialog from './utils/AccountDialog';
import TransferDialog from './utils/TransferDialog';
import AccountTable from './utils/AccountTable';
import AccountPieChart from './utils/AccountPieChart';
// import { getAccountsData } from '../features/dataApi/AccountsData';
import './styles/Accounts.css';
import { useSelector } from 'react-redux';


const Accounts = () => {

    const accountsData = useSelector(state => state.accounts);
    const [modalActive, setModalActive] = useState(false);
    const [modal2Active, setModal2Active] = useState(false);

    return (
        <Container className='container' maxWidth={false}>
            <AccountPieChart accounts={accountsData} />
            <div className="head">
                <h2 className="heading">Счета</h2>
                <div className="buttons">
                    <Button variant="contained" className="button" onClick={() => setModalActive(true)}>
                        Добавить счет
                    </Button>
                    <Button variant="contained" className="button" onClick={() => setModal2Active(true)}>
                        Перевести средства между счетами
                    </Button>
                </div>
            </div>
            <AccountTable accounts={accountsData} />
            <AccountDialog open={modalActive} onClose={() => setModalActive(false)} onAccountAdded={() => {}} />
            <TransferDialog open={modal2Active} onClose={() => setModal2Active(false)} onTransferMade={() => {}} />
        </Container>
    );
};

export default Accounts;
