import React from 'react';
import styles from "../components/SideBar.module.css";


const Sidebar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.logoNameWrapper}>
        <div className={styles.logoName}>
          <img
            src="./assets/images/logo.png"
            className={styles.logo}
            alt="logo app"
            srcSet=""
          />
          <span className={styles.logoNameText}>Lincoln Botosh</span>
        </div>
        <button className={styles.logoNameButton}>
          <i
            className={`bx bx-arrow-from-right ${styles.logoNameIcon}`}
            id="logo-name__icon"
          ></i>
        </button>
      </div>
      <div className={styles.message}>
        <i className={`bx bx-message-square-edit ${styles.messageIcon}`}></i>
        <span className={styles.messageText}>New Message</span>
        <span className={styles.tooltip}>New Message</span>
      </div>
      <ul className={styles.featuresList}>
        <li className={`${styles.featuresItem} ${styles.inbox} ${styles.active}`}>
          <i className={`bx bxs-inbox ${styles.featuresItemIcon} ${styles.inboxIcon}`}>
            <span className={styles.status}></span>
          </i>
          <span className={styles.featuresItemText}>Inbox</span>
          <span className={styles.inboxNumber}>99</span>
          <span className={styles.tooltip}>Inbox</span>
        </li>
        <li className={`${styles.featuresItem} ${styles.draft}`}>
          <i className={`bx bx-file-blank ${styles.featuresItemIcon}`}></i>
          <span className={styles.featuresItemText}>Draft</span>
          <span className={styles.tooltip}>Draft</span>
        </li>
        <li className={`${styles.featuresItem} ${styles.star}`}>
          <i className={`bx bx-star ${styles.featuresItemIcon}`}></i>
          <span className={styles.featuresItemText}>Starred</span>
          <span className={styles.tooltip}>Starred</span>
        </li>
        <li className={`${styles.featuresItem} ${styles.sent}`}>
          <i className={`bx bx-send ${styles.featuresItemIcon}`}></i>
          <span className={styles.featuresItemText}>Sent</span>
          <span className={styles.tooltip}>Sent</span>
        </li>
        <li className={`${styles.featuresItem} ${styles.trash}`}>
          <i className={`bx bx-trash ${styles.featuresItemIcon}`}></i>
          <span className={styles.featuresItemText}>Trash</span>
          <span className={styles.tooltip}>Trash</span>
        </li>
        <li className={`${styles.featuresItem} ${styles.spam}`}>
          <i className={`bx bx-message-square-error ${styles.featuresItemIcon}`}></i>
          <span className={styles.featuresItemText}>Spam</span>
          <span className={styles.tooltip}>Spam</span>
        </li>
      </ul>
      <ul className={styles.categoryList}>
        <div className={styles.categoryHeader}>Message categories</div>
        <li className={styles.categoryItem}>
          <span className={styles.categoryItemStatus} style={{ backgroundColor: '#79d861' }}></span>
          <span className={styles.categoryItemText}>My works</span>
          <span className={styles.categoryItemNumber}>9</span>
          <span className={styles.tooltip}>My works</span>
        </li>
        <li className={styles.categoryItem}>
          <span className={styles.categoryItemStatus} style={{ backgroundColor: '#c43c5d' }}></span>
          <span className={styles.categoryItemText}>Accountant</span>
          <span className={styles.categoryItemNumber}>43</span>
          <span className={styles.tooltip}>Accountant</span>
        </li>
        <li className={styles.categoryItem}>
          <span className={styles.categoryItemStatus} style={{ backgroundColor: '#ff5050' }}></span>
          <span className={styles.categoryItemText}>Works</span>
          <span className={styles.categoryItemNumber}>78</span>
          <span className={styles.tooltip}>Works</span>
        </li>
        <li className={styles.categoryItem}>
          <span className={styles.categoryItemStatus} style={{ backgroundColor: '#42ffdd' }}></span>
          <span className={styles.categoryItemText}>Marketing</span>
          <span className={styles.categoryItemNumber}>253</span>
          <span className={styles.tooltip}>Marketing</span>
        </li>
      </ul>
      <ul className={styles.chatList}>
        <div className={styles.chatHeader}>Recent chats</div>
        <button className={styles.chatNewBtn}>
          <i className={`bx bxs-plus-circle ${styles.chatIcon}`}></i>
          <span className={styles.chatNewBtnText}>Start New Chat</span>
          <span className={styles.tooltip}>New Chat</span>
        </button>
        <li className={styles.chatItem}>
          <span className={`${styles.chatItemAvatarWrapper} ${styles.hasMessage}`}>
            <img
              src="./assets/images/chris-evans.jpg"
              alt="avatar"
              className={styles.chatItemAvatar}
            />
          </span>
          <span className={styles.chatItemName}>Steve Rogers</span>
          <span className={styles.chatItemNumber}>53</span>
        </li>
        <li className={styles.chatItem}>
          <span className={styles.chatItemAvatarWrapper}>
            <img
              src="./assets/images/tony-stark.jpg"
              alt="avatar"
              className={styles.chatItemAvatar}
            />
          </span>
          <span className={styles.chatItemName}>Tony Stark</span>
          <span className={styles.chatItemStatus} style={{ backgroundColor: '#79d861' }}></span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
