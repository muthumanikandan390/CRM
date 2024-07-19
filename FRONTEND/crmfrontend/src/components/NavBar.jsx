import styles from "../components/NavBar.module.css";



function NavBar() {
  return (

    <header  className={styles.logoheader}>
      <button className={styles.collapsebtn}>hello</button>



      <div className={styles.logo}>

        <img  src="/images/logo3.png" alt="logo" />
        <h1 className={styles.logoheading} >AstraCRM</h1>
      </div>


      <nav>
        <ul className={styles.nav__links}>
          <li><a href="#"> services </a></li>
          <li><a href="#"> services </a></li>
          <li><a href="#"> services </a></li>
        </ul>
      </nav>
      <a className={styles.cta} href="#"><button className={styles.navbtn}>Contact</button></a>

    </header>
  );
}

export default NavBar;
