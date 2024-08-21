import { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import styles from './HomePage.module.css'; // Import your CSS module
import Card from "../components/Card";

// import CustomChildCard from "../components/CustomChildCard";
import StatusCard from "../components/StatusCard";
import Badge from "../components/Badge";
import LiveServerCard from "../components/LiveServerCard.module";
import ProductCard from "../components/ProductCard";

const img1 = "https://images.stockcake.com/public/7/9/0/790dbe97-49da-4b94-ae51-bffb347819a6_large/smartphone-on-table-stockcake.jpg"
const img2 = "https://images.stockcake.com/public/d/7/6/d76bfa1b-b89d-463b-9c3f-49019a4bb96b_large/modern-gaming-gear-stockcake.jpg"
const img3 = "https://m.media-amazon.com/images/I/71PyGlehAFL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
const img4 = "https://m.media-amazon.com/images/I/51W65QNlTlS._AC_SY695_.jpg"
const img5 = "https://m.media-amazon.com/images/I/71SmkjL63uL._AC_SX679_.jpg"
const img6 = "https://m.media-amazon.com/images/I/71vE0KfTNQL._AC_SX679_.jpg"

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
        <Badge className={`${styles.badgeIcon} ${styles.badgePrimary}`} orderStatus={'delivered'}  />
      </div>
      <div className={styles.badgeContainer}>
        <h1 className={styles.badgeText}>50 product priority in</h1>
        <Badge className={`${styles.badgeIcon} ${styles.badgeRed}`} orderStatus={'cancelled'}    />
      </div>
      <div className={styles.badgeContainer}>
        <h1 className={styles.badgeText}>120 product priority in</h1>
        <Badge className={`${styles.badgeIcon} ${styles.badgeYellow}`}  orderStatus={'processed'}   />
      </div>
    </div>
  </div>
</StatusCard>

              </div>
              <div className={styles.rightContainer2}>

              <LiveServerCard>

                <div className={styles.liveContainer1}>

                <h1 className={styles.liveHeading}>Live product Server  <div className={styles.redCircle}></div></h1>

                <div className={styles.divider}></div>

                </div>

                <div className={styles.liveContainer2}>

                  <ProductCard description={"Apple iPhone 15 (128 GB) - Black"} count={1} price={"412.46"} img={img1}/>
                  <ProductCard description={"Play station ps5 pro - white"} count={1} price={"523.00"} img={img2}/>
                  <ProductCard description={"Huffy Stone Mountain Mountain Bike"} count={1} price={"229.99"} img={img3}/>
                  <ProductCard description={"Nike Men's Low Neck top"} count={1} price={"140.28"} img={img4}/>
                  <ProductCard description={"Z-Edge 24.5 Gaming Monitor, Z-Edge UG25I FHD"} count={1} price={"139.99"} img={img5}/>
                  <ProductCard description={"Insulated Water Bottle 64 oz"} count={3} price={"29.99"} img={img6}/>
                  {/* <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard /> */}
                  {/* <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard /> */}

                </div>


              </LiveServerCard>
              </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
