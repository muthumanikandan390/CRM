/* eslint-disable react/prop-types */
import styles from './StatusCard.module.css';
function StatusCard({children}) {
  return (
    <div className={styles.card}>{children}</div>
  )
}

export default StatusCard