/* eslint-disable react/prop-types */

import styles from "../components/SideBar.module.css";


const Sidebar = ({isVisible}) => {
  return (
    <div className={`${styles.sideBar} ${!isVisible ? styles.sidebarHidden : ''}` }>
      <ul className={styles.featuresList}>
        <li className={`${styles.featuresItem} ${styles.inbox} ${styles.active}`}>
          <i className={`bx bxs-inbox ${styles.featuresItemIcon} ${styles.inboxIcon}`}>
            <span className={styles.status}></span>
          </i>
          <span className={styles.featuresItemText}>Data analysis</span>

          <span className={styles.tooltip}>Inbox</span>
        </li>
        <li className={`${styles.featuresItem} ${styles.draft}`}>
          <i className={`bx bx-file-blank ${styles.featuresItemIcon}`}></i>
          <span className={styles.featuresItemText}>Product sold</span>
          <span className={styles.tooltip}>Draft</span>
        </li>
        <li className={`${styles.featuresItem} ${styles.star}`}>
          <i className={`bx bx-star ${styles.featuresItemIcon}`}></i>
          <span className={styles.featuresItemText}>Starred</span>
          <span className={styles.tooltip}>Starred</span>
        </li>
        <li className={`${styles.featuresItem} ${styles.sent}`}>
          <i className={`bx bx-send ${styles.featuresItemIcon}`}></i>
          <span className={styles.featuresItemText}>Profit</span>
          <span className={styles.tooltip}>Sent</span>
        </li>
        <li className={`${styles.featuresItem} ${styles.trash}`}>
          <i className={`bx bx-trash ${styles.featuresItemIcon}`}></i>
          <span className={styles.featuresItemText}>loss</span>
          <span className={styles.tooltip}>Trash</span>
        </li>

      </ul>
      <ul className={styles.categoryList}>
        <div className={styles.categoryHeader}>Management</div>
        <li className={styles.categoryItem}>
          <span className={styles.categoryItemStatus} style={{ backgroundColor: '#79d861' }}></span>
          <span className={styles.categoryItemText}>Admin work</span>

          <span className={styles.tooltip}></span>
        </li>
        <li className={styles.categoryItem}>
          <span className={styles.categoryItemStatus} style={{ backgroundColor: '#c43c5d' }}></span>
          <span className={styles.categoryItemText}>Accountant</span>

          <span className={styles.tooltip}>Accountant</span>
        </li>
        <li className={styles.categoryItem}>
          <span className={styles.categoryItemStatus} style={{ backgroundColor: '#ff5050' }}></span>
          <span className={styles.categoryItemText}>Works</span>

          <span className={styles.tooltip}>Works</span>
        </li>
        <li className={styles.categoryItem}>
          <span className={styles.categoryItemStatus} style={{ backgroundColor: '#42ffdd' }}></span>
          <span className={styles.categoryItemText}>Marketing</span>

          <span className={styles.tooltip}>Marketing</span>
        </li>
      </ul>

    </div>
  );
};

export default Sidebar;
