import { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import styles from './HomePage.module.css'; // Import your CSS module
import Card from "../components/Card";
import ChildCard from "../components/ChildCard";
import CustomChildCard from "../components/CustomChildCard";
import StatusCard from "../components/StatusCard";
import Badge from "../components/Badge";


function HomePage() {
  const [isVisible, setIsVisible] = useState(true);

  function toggleSideBar() {
    setIsVisible(!isVisible);
    console.log(isVisible)
  }

  return (
    <div>
      <NavBar toggleSideBar={toggleSideBar} />
      <div className={styles.container}>
        <SideBar isVisible={isVisible} />
        <div className={styles.content}>
          <div className={styles.contentContainer}>
            <div className={styles.leftContainer}>
              <Card />
              </div>
            <div className={styles.rightContainer}>

              <div className={styles.rightContainer1}>


              <StatusCard>
  <div className={styles.statusContainer}>
    <div className={styles.statusHeading}>
      <h1>Sales Status</h1>
    </div>
    <div className={styles.statusContent}>
      <div className={styles.badgeContainer}>
        <h1 className={styles.badgeText}>800 product priority in</h1>
        <Badge className={styles.badgeIcon} />
      </div>
      <div className={styles.badgeContainer}>
        <h1 className={styles.badgeText}>50 product priority in</h1>
        <Badge className={styles.badgeIcon} />
      </div>
      <div className={styles.badgeContainer}>
        <h1 className={styles.badgeText}>120 product priority in</h1>
        <Badge className={styles.badgeIcon} />
      </div>
    </div>
  </div>
</StatusCard>

              </div>
              <div className={styles.rightContainer2}>
              <CustomChildCard>

              </CustomChildCard>
              </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
