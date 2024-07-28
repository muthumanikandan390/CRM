/* eslint-disable react/prop-types */
import styles from './ChildCard.module.css';


function ChildCard({ children }) {
  return (
    // <div className={styles.card}><CustomLineChart /></div>
    <div className={styles.card}>{children}</div>

  )
}
export default ChildCard
