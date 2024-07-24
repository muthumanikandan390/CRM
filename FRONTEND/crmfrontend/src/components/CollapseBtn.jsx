/* eslint-disable react/prop-types */
import styles from "../components/CollapseBtn.module.css";
import MenuIcon from '@mui/icons-material/Menu';


function CollapseBtn({ toggleSideBar }) {

  function handleAlert() {
    toggleSideBar()
  }

  return (

      <button onClick={handleAlert} className={styles.collapsebtn}> <MenuIcon fontSize="large" /> </button>

  )
}

export default CollapseBtn
