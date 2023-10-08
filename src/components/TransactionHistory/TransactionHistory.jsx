import styles from './TransactionHistory.module.css'

export const TransactionHistory = ({ item }) => {
    return (
   <section className={styles.transactionSection}>   
    <table className={styles.transactionHistory}>
        <thead className={styles.transactionTitleList}>
            <tr className={styles.transactionTr}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody className={styles.transactionDiscriptionList}>{item.map(({ id, type, amount, currency }) => (
            <tr key={id}>
            <td>{type}</td>
            <td>{amount} $</td>
            <td>{currency}</td>
            </tr>
        ))}
        </tbody>
    </table>
   </section>           
    );
};

