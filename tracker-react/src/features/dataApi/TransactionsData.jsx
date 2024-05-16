function getTransactionsData(page, accountId=null) {
    // sample data
    let transactions = [
        { id: 1, amount: -700, date: '2024-05-10', category: 'Еда', accountId: 1, description: 'Покупка продуктов' },
        { id: 2, amount: -1000, date: '2024-05-12', category: 'Транспорт', accountId: 2, description: 'Заправка' },
        { id: 3, amount: 20000, date: '2024-05-12', category: 'Транспорт', accountId: 3, description: 'Заправка' },
        { id: 4, amount: -250, date: '2024-05-13', category: 'Развлечения', accountId: 4, description: 'Билеты в кино' },
        { id: 5, amount: -800, date: '2024-05-14', category: 'Еда', accountId: 5, description: 'Ужин в ресторане' },
        { id: 6, amount: -50, date: '2024-05-15', category: 'Здоровье', accountId: 6, description: 'Лекарства' },
        { id: 7, amount: 500, date: '2024-05-16', category: 'Доход', accountId: 7, description: 'Зарплата' },
        { id: 8, amount: -200, date: '2024-05-17', category: 'Транспорт', accountId: 3, description: 'Такси' },
        { id: 9, amount: -1200, date: '2024-05-18', category: 'Жилье', accountId: 2, description: 'Аренда' },
        { id: 10, amount: -300, date: '2024-05-19', category: 'Еда', accountId: 1, description: 'Продукты' },
        { id: 11, amount: -100, date: '2024-05-20', category: 'Развлечения', accountId: 3, description: 'Бар' }
    ];

    if(accountId !== null){
        transactions = transactions.filter(transaction => transaction.accountId === accountId);
    }

    return transactions.map(transaction => {
        return {...transaction, date: new Date(transaction.date)}
    });
}

export default getTransactionsData;