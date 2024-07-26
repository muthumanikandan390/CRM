import styles from './ChildCard.module.css';
import LineChart from './LineChart';
import CustomLineChart from './LineChart';

function ChildCard() {
  return (
    <div className={styles.card}><CustomLineChart /></div>

  )
}
export default ChildCard
