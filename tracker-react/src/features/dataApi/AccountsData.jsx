const accountsData = [
    { id: 1, name: 'Сбербанк - Расчетный счет', type: 'Расчетный', balance: 50000 },
    { id: 2, name: 'Инвестиционный портфель', type: 'Инвестиции', balance: 1000000 },
    { id: 3, name: 'Сберегательный счет', type: 'Сберегательный', balance: 30000 },
    { id: 4, name: 'Кредитная карта - Visa', type: 'Кредитная', balance: -5000 },
    { id: 5, name: 'Акции и облигации', type: 'Инвестиции', balance: 750000 },
    { id: 6, name: 'Сберегательный счет с высоким процентом', type: 'Сберегательный', balance: 60000 },
    { id: 7, name: 'Ипотека - Жилищный кредит', type: 'Кредит', balance: 250000 },
    { id: 8, name: 'Индивидуальный пенсионный счет', type: 'Инвестиции', balance: 200000 },
    { id: 9, name: 'Образовательный фонд', type: 'Сберегательный', balance: 40000 },
    { id: 10, name: 'Автокредит', type: 'Кредит', balance: -15000 },
    { id: 11, name: 'Кредитная карта - Туристическая', type: 'Кредитная', balance: -2000 },
    { id: 12, name: 'Фонд экстренной помощи', type: 'Сберегательный', balance: 20000 },
    { id: 13, name: 'Бизнес счет', type: 'Расчетный', balance: 100000 },
    { id: 14, name: 'Пенсионный план 401(k)', type: 'Инвестиции', balance: 500000 },
    { id: 15, name: 'Линия по потребительскому кредиту', type: 'Кредитная', balance: -10000 }
];

function getAccountName(id){
    return accountsData[id].name;
}

function getAccountsData(){
    return accountsData;
}

function getAccountsSum(){
    return accountsData.reduce((sum, account) => sum + parseInt(account.balance));
}



export {getAccountsData, getAccountName, getAccountsSum};