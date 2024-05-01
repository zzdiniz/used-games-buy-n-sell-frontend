import { Link } from "react-router-dom"
import styles from './style.module.css'
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <p className={styles.logo}>UsedGamesBS</p>
            <ul className={styles.navigation}>
                <li className={styles.navigationItem}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.navigationItem}>
                    <Link to='/login'>Login</Link>
                </li>
                <li className={styles.navigationItem}>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar