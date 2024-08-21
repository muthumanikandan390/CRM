/* eslint-disable react/prop-types */
import styles from './Badge.module.css';

function Badge({ className , orderStatus}) {

  return (






        <div>
          <span className={`${styles.badge} ${className}`}>{orderStatus}</span>



          {/* <span className={`${styles.badge} ${styles.badgePrimary}`}>Badge</span>
          <span className={`${styles.badge} ${styles.badgeYellow}`}>Badge</span>
          <span className={`${styles.badge} ${styles.badgeOrange}`}>Badge</span>
          <span className={`${styles.badge} ${styles.badgeRed}`}>Badge</span>
          <span className={`${styles.badge} ${styles.badgePurple}`}>Badge</span>
          <span className={`${styles.badge} ${styles.badgeBlue}`}>Badge</span> */}
        </div>



  )
}

export default Badge
