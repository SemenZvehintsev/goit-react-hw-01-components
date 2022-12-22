import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css'

export const Statistics = ({title, stats}) => {
    return <section className={styles.statistics}>
        {title && <h2 className={styles.title}>Upload stats</h2>}
        <ul className={styles.statList}>
            {stats.map((item) => <li key={item.id} className={styles.item}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.percentage}>{item.percentage}</span>
            </li>)}
        </ul>
    </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}