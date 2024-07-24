import { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import styles from './HomePage.module.css'; // Import your CSS module
import Card from "../components/Card";

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
              <button>2nd container</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
