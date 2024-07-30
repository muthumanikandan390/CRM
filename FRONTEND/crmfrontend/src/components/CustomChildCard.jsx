/* eslint-disable react/prop-types */
import styles from './CustomChildCard.module.css';
function CustomChildCard({children}) {
  return (
    <div className={styles.card}>{children}</div>
  )
}

export default CustomChildCard
