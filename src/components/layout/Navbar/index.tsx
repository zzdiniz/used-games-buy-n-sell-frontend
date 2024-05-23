import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { UserContext } from '../../../context/UserContext';
import { useContext, useState } from 'react';
import UserIcon from '../../../assets/icons/UserIcon';
import Modal from '../../Modal';

const Navbar = () => {
  const useAuth = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <nav className={styles.navbar}>
      <p className={styles.logo}>UsedGamesBS</p>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated ? (
          <li className={styles.navigationItem} onClick={() => setIsOpen(true)}>
            <UserIcon />
          </li>
        ) : (
          <>
            <li className={styles.navigationItem}>
              <Link to="/login">Login</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
