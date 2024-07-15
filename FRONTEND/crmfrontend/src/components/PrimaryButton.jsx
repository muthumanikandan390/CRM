import styles from "./PrimaryButton.module.css"
import { Link } from 'react-router-dom';

function PrimaryButton() {

  return (
    <Link to="/homepage" >
    <button className={styles.btn}>

    click me !

    </button>
    </Link>

  )
}

export default PrimaryButton
