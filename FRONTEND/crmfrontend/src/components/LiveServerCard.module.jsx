/* eslint-disable react/prop-types */
import styles from './LiveServerCard.module.css';
function LiveServerCard({children}) {
  return (
    <div className={styles.card}>{children}</div>
  )
}

export default LiveServerCard