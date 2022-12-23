import PropTypes from 'prop-types';
import styles from 'components/transactions/Transactions.module.css'

export const TransactionHistory = ({items}) => {
    return <table className={styles.transactionHistory}>
        <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
        </thead>
    
        <tbody>
            {items.map(({id, type, amount, currency}) => {
            const capitalizedType =
            type.charAt(0).toUpperCase()
            + type.slice(1);
            return <tr key={id}>
                <td>{capitalizedType}</td>
                <td>{amount}</td>
                <td>{currency}</td>
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