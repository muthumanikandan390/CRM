/* eslint-disable react/prop-types */
import styles from "../components/NavBar.module.css";




function NavBar() {
  return (

    <header  className={styles.logoheader}>

      {/* <CollapseBtn toggleSideBar={toggleSideBar}/> */}



      <div className={styles.logo}>

        <img  src="/images/logo3.png" alt="logo" />
        <h1 className={styles.logoheading} >AstraCRM</h1>
      </div>


      <nav className={styles.navs} >
        <ul className={styles.nav__links}>
        <li>
  <a href="https://github.com/muthumanikandan390/CRM">
    <img className={styles.navicon} src="/images/github.png" alt="Logo"/>
  </a>
</li>
          {/* <li><a href="#"> services </a></li>
          <li><a href="#"> services </a></li> */}
        </ul>
      </nav>
      <a className={styles.cta} href="http://127.0.0.1:8000/admin"><button className={styles.navbtn}>Database panel</button></a>

    </header>
  );
}

export default NavBar;
