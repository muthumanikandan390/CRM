/* eslint-disable react/prop-types */
import styles from "../components/NavBar.module.css";
function CollapseBtn({ toggleSideBar }) {



  function handleAlert() {
    toggleSideBar()
  }

  return (

      <button onClick={handleAlert} className={styles.collapsebtn}> collapse btn </button>

  )
}

export default CollapseBtn
