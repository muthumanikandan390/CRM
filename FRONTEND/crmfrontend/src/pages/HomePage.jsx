import { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import styles from './HomePage.module.css'; // Import your CSS module

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
          <button>hi</button>
          {/* Add more content here */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
