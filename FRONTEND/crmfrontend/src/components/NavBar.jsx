import styles from "../components/NavBar.module.css";

function NavBar() {
  return (
    <header>
      <img className={styles.logo} src="images/logo.svg" alt="logo" />
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
