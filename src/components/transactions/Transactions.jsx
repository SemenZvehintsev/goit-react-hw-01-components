import PropTypes from 'prop-types';
import styles from '../transactions/Transactions.module.css'

export const TransactionHistory = ({items}) => {
    console.log(items)
    return <table className={styles.transactionHistory}>
        <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
        </thead>
    
        <tbody>
            {items.map((transaction) => {
            const capitalizedType =
            transaction.type.charAt(0).toUpperCase()
            + transaction.type.slice(1)
            return <tr key={transaction.id}>
                <td>{capitalizedType}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
            </tr>}
            )}
        </tbody>
    </table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}